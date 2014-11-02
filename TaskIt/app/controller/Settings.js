var addNewMemberEmail;

Ext.define('TaskIt.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            addMemberToGroup: 'settings button[action=addGroupMembers]'
        },
        control: {
            addMemberToGroup : {
                tap : 'addMemberToGroup'
            },
        }
    },

    addMemberToGroup : function() {
        
        if(Ext.getCmp('settings_addGroupMembers').getIconCls()=='add'){
        
            //creating the email addition
            addNewMemberEmail = new Ext.Panel({
                layout : {
                    type : 'hbox'
                },
                width : '100%',
                margin : '0 0 0 -55',
                items : [
                    {
                        xtype : 'emailfield',
                        label : 'Email',
                        id : 'settings_newMemberEmail',
                        width : '80%',

                    },
                    {xtype : 'spacer', width:'2%'},
                    {
                        xtype : 'button',
                        width : '18%',
                        text : 'Invite',
                        handler : function(){
                            
                            
                                
                                var emailComp = Ext.getCmp('settings_newMemberEmail');

                                var tempURL = base_URL.concat('user/');
                                console.log(tempURL);
                                //Creating new User
                                Ext.Ajax.request({
                                    url: tempURL,
                                    method : 'POST',
                                    params : {
                                        first_name: 'Default',
                                        last_name: 'Default',
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
                                            url: tempURL,
                                            method : 'POST',
                                            success: function(response2){
                                                console.log(response2.responseText);
                                                
                                                Ext.getStore('Roommates').add({email: emailComp.getValue()});
                                                Ext.getStore('Roommates').sync();

                                                emailComp.setValue('');
                                            }
                                        }); 
                                    }
                                }); 
                        }
                    }
                ]
            });
            //adding email panel to the list
            Ext.getCmp('settingsElements').insert(3, addNewMemberEmail);
            Ext.getCmp('settings_addGroupMembers').setIconCls('');
            Ext.getCmp('settings_addGroupMembers').setText('Done');

        }
        else {
            //removing email panel to the list
            Ext.getCmp('settingsElements').remove(addNewMemberEmail);
            Ext.getCmp('settings_addGroupMembers').setIconCls('add');
            Ext.getCmp('settings_addGroupMembers').setText('');
        }


    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
