var addNewMemberEmail, addNewChoreName;

Ext.define('TaskIt.controller.Settings', {
    extend: 'Ext.app.Controller',
    requires : [
        'Ext.field.Select'
    ],

    config: {
        refs: {
            addMemberToGroup: 'settings button[action=addGroupMembers]',
            addChoresToGroup: 'settings button[action=addGroupChores]'
        },
        control: {
            addMemberToGroup : {
                tap : 'addMemberToGroup'
            },
            addChoresToGroup : {
                tap : 'addChoreToGroup'
            }
        }
    },

    logout: function(){
        Ext.Ajax.request({
            method: 'GET',
            url: base_URL.concat('logout/'),
            success: function(response){
                setTimeout(function() {
                    Ext.getCmp('startScreen').getLayout().setAnimation({
                        type: 'slide',
                        duration: 300,
                        reverse: true,
                        direction:'left'
                    });
                    Ext.getCmp('startScreen').setActiveItem(0, {type : 'slide', direction:'left'});
                });
            }
        });
    },

    deleteUserFromGroup : function(){
        Ext.Msg.confirm(
            'Leave This Group ?',
            "Are you sure you wish to leave this group? Once you leave, you will need to be added back in by existing members for access.",
            function(button){
                if(button=='yes'){
                    var tempURL = base_URL.concat('group/',GROUP_ID,'/user/',USER_ID,'/');

                    Ext.Ajax.request({
                        url: tempURL,
                        method : 'DELETE',
                        success: function(response){
                            showDetails.hide();
                            TaskIt.app.getController('Settings').logout();

                        }
                    });
                }
            }
        );

    },

    deleteChoreFromGroup : function(t, chore_id){

        var tempURL = base_URL.concat('chore/', chore_id, '/');


        Ext.Ajax.request({
            url: tempURL,
            method : 'DELETE',
            success: function(response){
                if (JSON.parse(response.responseText).success){
                    showChoreDetails.hide();
                    Ext.getCmp('showChoreDetails_choreName').disable();
                    Ext.getCmp('showChoreDetails_frequency').disable();
                    Ext.getCmp('showChoreDetails_DeleteChore').hide();
                    setTimeout(function() {TaskIt.app.getController('Login').doAllGroupIDFunctions();},1000);
                }
                else {
                    console.log('An error occurred during delete');
                }
            }
        });
    },

    addChoreToGroup : function(){
        if(Ext.getCmp('settings_addGroupChores').getIconCls()=='add'){

            addNewChoreName = new Ext.Panel({
                layout : {
                    type : 'hbox',
                    align : 'center',
                    pack : 'center'
                },

                items : [
                    {
                        xtype : 'textfield',
                        labelWidth : '1',
                        id : 'settings_newChoreName',
                        width : '40%',
                        autoCapitalize: true,
                        autoCorrect: true,
                        listeners: {
                            keyup: function(field, e){
                                if(e.browserEvent.keyCode==13){
                                    addChore();
                                }
                            }
                        }
                    },
                    {xtype : 'spacer', width:'2%'},
                    {
                        xtype: 'selectfield',
                        id : 'settings_newChoreFreq',
                        width : '40%',
                        options: [
                            {text: 'Daily',  value: 'd'},
                            {text: 'Weekly', value: 'w'},
                            {text: 'Monthly',  value: 'm'}
                        ]
                    },
                    {xtype : 'spacer', width:'2%'},
                    {
                        xtype : 'button',
                        width : '16%',
                        text : 'Add',
                        handler : addChore
                ]
            });
            //adding email panel to the list
            var tempInsertPos = Ext.getCmp('settingsElements').getItems().length - 1;
            Ext.getCmp('settingsElements').insert(tempInsertPos, addNewChoreName);
            Ext.getCmp('settings_addGroupChores').setIconCls('');
            Ext.getCmp('settings_addGroupChores').setText('Done');

        }
        else {
            dismissChoreForm();
        }
    },

    addMemberToGroup : function() {

        if(Ext.getCmp('settings_addGroupMembers').getIconCls()=='add'){

            //creating the email addition
            addNewMemberEmail = new Ext.Panel({
                layout : {
                    type : 'hbox'
                },
                width : '90%',
                margin : '0 0 0 0',
                items : [
                    {
                        xtype : 'emailfield',
                        label : 'Email',
                        labelWidth : '1',
                        id : 'settings_newMemberEmail',
                        width : '80%',
                        listeners: {
                            keyup: function(field, e){
                                if(e.browserEvent.keyCode==13){
                                    addMember();
                                }
                            }
                        }
                    },
                    {xtype : 'spacer', width:'2%'},
                    {
                        xtype : 'button',
                        width : '18%',
                        text : 'Invite',
                        handler : addMember
                    }
                ]
            });
            //adding email panel to the list
            Ext.getCmp('settingsElements').insert(3, addNewMemberEmail);
            Ext.getCmp('settings_addGroupMembers').setIconCls('');
            Ext.getCmp('settings_addGroupMembers').setText('Done');

        }
        else {
            dismissMemberForm();
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});

function addChore() {
    if (Ext.getCmp('settings_newChoreName').getValue()=="")
        return;
    var tempURL = base_URL.concat('chore/');
    console.log(tempURL);

    Ext.Ajax.request({
        url: tempURL,
        method : 'POST',
        params : {
            chore_name: Ext.getCmp('settings_newChoreName').getValue(),
            frequency: Ext.getCmp('settings_newChoreFreq').getValue(),
            group_id: GROUP_ID
        },
        success: function(response){
            console.log(response.responseText);

            Ext.getCmp('settings_newChoreName').setValue('');
            setTimeout(function() {TaskIt.app.getController('Login').doAllGroupIDFunctions();},1000);
        }
    });
}

function addMember() {
    var emailComp = Ext.getCmp('settings_newMemberEmail');

    if(emailComp=="")
        return;

    var tempURL = base_URL.concat('user/');
    console.log(tempURL);
    //Creating new User
    Ext.Ajax.request({
        url: tempURL,
        method : 'POST',
        params : {
            first_name: 'Unverified',
            last_name: 'Unverified',
            email: emailComp.getValue()
        },
        success: function(response){
            //get server generated UserID
            console.log(response.responseText);
            setUserId = JSON.parse(response.responseText).user_id;

            //add user to the pre-existing group
            var tempURL2 = base_URL.concat('group/', GROUP_ID.toString(), '/user/', setUserId.toString(), '/');
            console.log(tempURL2);
            Ext.Ajax.request({
                url: tempURL2,
                method : 'POST',
                success: function(response2){
                    console.log(response2.responseText);
                    Ext.getStore('Roommates').add({email: emailComp.getValue(), first_name:'Unverified', last_name:'Unverified'});
                    Ext.getStore('Roommates').sync();
                    emailComp.setValue('');
                }
            });
        }
    });
}

function dismissChoreForm() {
    //removing email panel to the list
    Ext.getCmp('settingsElements').remove(addNewChoreName);
    Ext.getCmp('settings_addGroupChores').setIconCls('add');
    Ext.getCmp('settings_addGroupChores').setText('');
}

function dismissMemberForm() {
    //removing email panel to the list
    Ext.getCmp('settingsElements').remove(addNewMemberEmail);
    Ext.getCmp('settings_addGroupMembers').setIconCls('add');
    Ext.getCmp('settings_addGroupMembers').setText('');
}
