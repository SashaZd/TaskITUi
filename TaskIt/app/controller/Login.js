// var myChoreStore;

Ext.define('TaskIt.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginButton : 'login button[action=doLogin]'
        },
        control: {
            loginButton : {
                tap : 'doLogin'
            }
        }
    },
    
    doLogin : function(){

        var email = Ext.getCmp('loginEmail').getValue();

        Ext.Ajax.request({
            type : 'POST',
            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/login/',
            params: {
                email : email
            },
            success: function(response){
                
                if (JSON.parse(response.responseText).success){
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
                else {
                    console.log("Login Error");
                }

                
            }
        });

        

    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        myChoreStore  = Ext.getStore('Chores');
    }
});
