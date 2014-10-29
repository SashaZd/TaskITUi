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

                    Ext.Ajax.request({
                        type : 'POST',
                        url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/user/',
                        params: {
                            email : email,
                            first_name: first,
                            last_name: last
                        },
                        success: function(response){
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
                    });
                }
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
