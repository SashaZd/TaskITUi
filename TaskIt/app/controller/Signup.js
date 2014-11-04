var myNewRoomm;
var myNewRoomm1;
Ext.define('TaskIt.controller.Signup', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            signUpButton: 'signup button[action=signUp]',
            setupNewGroupMembers : 'setup button[action=addGroupMembers]',
            setupNewGroupChores : 'setup button[action=addGroupChores]'

        },
        control: {
            setupNewGroupMembers : {
                tap : 'setupNewGroupMembersFn'
            },
            setupNewGroupChores : {
                tap : 'setupNewGroupChoresFn'
            },
            signUpButton: {
                tap: 'signUp'
            }
        }
    },

    signUp : function() {
                    
        var email = Ext.getCmp('signup_email').getValue();
        var first = Ext.getCmp('signup_firstname').getValue();
        var last = Ext.getCmp('signup_lastname').getValue();
        var groupName = Ext.getCmp('signup_groupname').getValue();

        Ext.Ajax.request({
            method : 'POST',
            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/user/',
            params: {
                email : email,
                first_name: first,
                last_name: last,
                group_name : groupName
            },
            success: function(response){
                console.log('User created');
                var r = JSON.parse(response.responseText);
                var userId = r.user_id;

                //Create new group if it doesn't already exist
                if (!r.group_exists) {
                    
                    Ext.Msg.confirm(
                        'Create New Group',
                        "There is no existing group with this name. Would you like to create a new one?",
                        function(button){
                            if(button=='yes'){
                                Ext.Ajax.request({
                                    method : 'POST',
                                    url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/',
                                    params: {
                                        group_name: groupName
                                    },
                                    success: function(response){
                                        console.log('Group created');
                                        
                                        var r = JSON.parse(response.responseText);
                                        var groupId = r.group_id;
                                        console.log("Group ID :::: ", groupId);
                                        var tempURL2 = base_URL.concat('group/', groupId.toString(), '/user/', userId.toString(), '/');
                                        //Setting Global variable
                                        GROUP_ID = groupId;

                                        //assign user to the group made earlier
                                        Ext.Ajax.request({
                                            method: 'POST',
                                            url: tempURL2,
                                            success : function(response){
                                                console.log("user assigned to group");
                                                setTimeout(function() {
                                                    
                                                    TaskIt.app.getController('Login').doAllGroupIDFunctions();
                                                    Ext.Ajax.request({
                                                        method: 'POST',
                                                        url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/login/',
                                                        params: {
                                                            email: email
                                                        },
                                                        success: function(response){
                                                            console.log('Login done');
                                                            setTimeout(function() {
                                                                Ext.getCmp('startScreen').getLayout().setAnimation({
                                                                    type: 'slide',
                                                                    duration: 300,
                                                                    reverse: true,
                                                                    direction:'right'
                                                                });
                                                                Ext.getCmp('startScreen').setActiveItem(1, {type : 'slide', direction:'right'});

                                                            });
                                                        }
                                                    });
                                                    
                                                });
                                            }
                                        });
                                        
                                    }

                                });
                            }//transition to setup screen
                        }
                    );
                } else {
                    Ext.Ajax.request({
                        method: 'POST',
                        url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/login/',
                        params: {
                            email: email
                        },
                        success: function(response){
                            console.log("Login done");
                            setTimeout(function() {
                                Ext.getCmp('startScreen').getLayout().setAnimation({
                                    type: 'slide',
                                    duration: 300,
                                    reverse: true,
                                    direction:'right'
                                });
                                Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'right'});
                            });
                        }
                    });
                }
            }
        });
    },

    setupNewGroupMembersFn : function(){
        var buttonIconCls = Ext.getCmp('addGroupMembersButton').getIconCls();

        if (buttonIconCls == "add"){

            myNewRoomm = new Ext.Panel({
                layout : {
                    type : 'hbox'
                },
                items : [
                    {
                        xtype: 'emailfield',
                        name: 'name',
                        id : 'addNewMembersEmail',
                        width : '80%'

                    },
                    {xtype : 'spacer', width : '2%'},
                    {
                        xtype : 'button',
                        text : 'Add',
                        width : '18%',
                        handler : function(){
                            var tempURL = base_URL.concat('user/');
                            console.log(tempURL);


                            //Creating new User
                            Ext.Ajax.request({
                                url: tempURL,
                                method : 'POST',
                                params : {
                                    first_name: 'Unverified',
                                    last_name: 'Unverified',
                                    email: Ext.getCmp('addNewMembersEmail').getValue()
                                },
                                success: function(response){
                                    //get server generated UserID
                                    console.log("1 :: ", response.responseText);
                                    setUserId = JSON.parse(response.responseText).user_id;

                                    //add user to the pre-existing group
                                    var tempURL2 = base_URL.concat('group/', GROUP_ID.toString(), '/user/', setUserId.toString(), '/');
                                    console.log(tempURL2);
                                    Ext.Ajax.request({
                                        url: tempURL2,
                                        method : 'POST',
                                        success: function(response2){
                                            console.log("2 :: ", response2.responseText);
                                            var s='Invited:'
                                            Ext.getStore('Roommates').add({first_name: s.concat(Ext.getCmp('addNewMembersEmail').getValue())});
                                            Ext.getStore('Roommates').add({last_name: ''});    
                                            Ext.getStore('Roommates').add({email: Ext.getCmp('addNewMembersEmail').getValue()});
                                            
                                            // console.log('reaching here3');
                                            Ext.getStore('Roommates').sync();

                                            Ext.getCmp('addNewMembersEmail').setValue('');
                                        }
                                    }); 
                                }
                            });
                        }
                    }
                ]
            });

            Ext.getCmp('addMembersAndChoresPanel').insert(3,myNewRoomm);
            Ext.getCmp('addGroupMembersButton').setText('<font size=3>Done</font>');
            Ext.getCmp('addGroupMembersButton').setIconCls('');
        }
        else {
            // console.log('Going in');
            Ext.getCmp('addGroupMembersButton').setText('');
            Ext.getCmp('addGroupMembersButton').setIconCls('add');   
            Ext.getCmp('addMembersAndChoresPanel').remove(myNewRoomm);
        }
    },


    setupNewGroupChoresFn : function(){
        var buttonIconCls = Ext.getCmp('addGroupChoresButton').getIconCls();
        if (buttonIconCls == "add"){

            myNewChoresNewPanel = new Ext.Panel({
                layout : {
                    type : 'hbox'
                },
                items : [
                    {
                        xtype: 'textfield',
                        label_width: '1',
                        name: 'name',
                        id : 'addNewChores',
                        width : '40%'

                    },
                    {xtype : 'spacer', width : '2%'},
                    {
                        xtype: 'selectfield',
                        id : 'ChoreFreq',
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
                        text : 'Add',
                        width : '18%',
                        handler : function(){
                            var chore_item=Ext.getCmp('addNewChores').getValue();
                            
                            var tempURL = base_URL.concat('chore/');
                            console.log(tempURL);
                            //Creating new User
                            Ext.Ajax.request({
                                url: tempURL,
                                method : 'POST',
                                params : {
                                    chore_name: chore_item,
                                    group_id: GROUP_ID
                                },
                                success: function(response){
                                    console.log(response.responseText);
                                    console.log('Added Chore To Group');
                                    Ext.getStore('OnlyChores').add({chore_name: Ext.getCmp('addNewChores').getValue()});
                                    Ext.getStore('OnlyChores').add({frequency: Ext.getCmp('ChoreFreq').getValue()});            
                                            // console.log('reaching here3');
                                    Ext.getStore('Roommates').sync();
                                }
                            });                                
                        }
                    }
                ]
            });
            var len = Ext.getCmp('addMembersAndChoresPanel').getItems().length;
            Ext.getCmp('addMembersAndChoresPanel').insert(len-2,myNewChoresNewPanel);
            Ext.getCmp('addGroupChoresButton').setText('<font size=3>Done</font>');
            Ext.getCmp('addGroupChoresButton').setIconCls('');
        }
        else {
            // console.log('Going in');
            Ext.getCmp('addGroupChoresButton').setText('');
            Ext.getCmp('addGroupChoresButton').setIconCls('add');   
            Ext.getCmp('addMembersAndChoresPanel').remove(myNewChoresNewPanel);
        }
    },

        //called when the Application is launched, remove if not needed
        launch: function(app) {

        }
    });


