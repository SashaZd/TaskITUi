Ext.define('TaskIt.controller.Signup', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            signUpButton: 'signup button[action=signUp]'
        },
        control: {
            signUpButton: {
                tap: function() {
                    var email = Ext.getCmp('email').getValue();
                    var first = Ext.getCmp('firstname').getValue();
                    var last = Ext.getCmp('lastname').getValue();
                    var groupName = Ext.getCmp('groupname').getValue();

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

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
