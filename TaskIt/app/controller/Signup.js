
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
                tap: function() {
                    var email = Ext.getCmp('signup_email').getValue();
                    var first = Ext.getCmp('signup_firstname').getValue();
                    var last = Ext.getCmp('signup_lastname').getValue();
                    var groupName = Ext.getCmp('signup_groupname').getValue();

                    Ext.Ajax.request({
                        type : 'POST',
                        url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/user/',
                        params: {
                            email : email,
                            first_name: first,
                            last_name: last,
                            group_name: groupName
                        },
                        success: function(response){
                            var r = JSON.parse(response.responseText);
                            var userId = r.user_id;
                            if (!r.group_exists) {
                                Ext.Msg.alert(
                                    'Create New Group?',
                                    "There is no existing group with this name. Would you like to create a new one?",
                                    function() {
                                        Ext.Ajax.request({
                                            type : 'POST',
                                            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/',
                                            params: {
                                                group_name: groupName
                                            },
                                            success: function(response){
                                                var r = JSON.parse(response.responseText);
                                                var groupId = r.group_id;
                                                Ext.Ajax.request({
                                                    method: 'POST',
                                                    url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/' + groupId + '/user/' + userId + '/',
                                                    params: {}
                                                });
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
                                        //transition to setup screen
                                    }
                                );
                            } else {
                                Ext.Ajax.request({
                                    type: 'POST',
                                    url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/login/',
                                    params: {
                                        email: email
                                    },
                                    success: function(response){
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
                }
            }
        }
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
                        xtype: 'textfield',
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
                            var roommate_item=Ext.getCmp('addNewMembersEmail').getValue();
                            Ext.getStore('Roommates').add({email: Ext.getCmp('addNewMembersEmail').getValue()});
                            Ext.getStore('Roommates').sync();
                            var tempURL = "http://tempUrl.com";
                            // var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/grocery/';
                            console.log(tempURL);
                            Ext.Ajax.request({
                                url: tempURL,
                                method : 'POST',
                                params : {
                                    // user_id: USER_ID,
                                    group_id: GROUP_ID,
                                    email: roommate_item
                                },
                                success: function(response){
                                    var text = response.responseText;
                                    console.log("Successs true...");
                                    console.log(text);
                                    Ext.getStore('Roommates').sync();
                                    Ext.getStore('Roommates').load();
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
                        name: 'name',
                        id : 'addNewChores',
                        width : '80%'

                    },
                    {xtype : 'spacer', width : '2%'},
                    {
                        xtype : 'button',
                        text : 'Add',
                        width : '18%',
                        handler : function(){
                            var chore_item=Ext.getCmp('addNewChoresName').getValue();
                            Ext.getStore('OnlyChore').add({chore_name: Ext.getCmp('addNewChoresName').getValue()});
                            Ext.getStore('OnlyChore').sync();
                            var tempURL = "http://tempUrl.com";
                            // var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/grocery/';
                            console.log(tempURL);
                            Ext.Ajax.request({
                                url: tempURL,
                                method : 'POST',
                                params : {
                                    // user_id: USER_ID,
                                    group_id: GROUP_ID,
                                    chore_name: chore_item
                                },
                                success: function(response){
                                    var text = response.responseText;
                                    console.log("Successs true...");
                                    console.log(text);
                                    Ext.getStore('OnlyChores').sync();
                                    Ext.getStore('OnlyChores').load();
                                }
                            });                                
                        }
                    }
                ]
            });

            Ext.getCmp('addMembersAndChoresPanel').insert(5,myNewChoresNewPanel);
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


