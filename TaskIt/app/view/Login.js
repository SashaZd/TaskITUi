
Ext.define('TaskIt.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    id : 'loginView',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Email',
        'Ext.field.Password'
    ],
    config: {
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'center'
        },

        fullscreen : true,
        items: [
            {
                xtype : 'panel',
                styleHtmlContent: true,
                width : '90%',
                items : [
                    {
                        xtype : 'container',
                        html : '<img src="resources/images/logoAndName.png"></img>',
                        width : '50%'
                    },
                   {
                        xtype : 'container',
                        html : ['<div class="fb-like"',
                                  'data-share="true"',
                                  'data-width="450"',
                                  'data-show-faces="true">',
                                '</div>'].join(),
                        width : '50%'
                    },
                    {
                        xtype: 'container',

                        defaults: {
                            margin: '5 5 5 5',
                            labelWidth: '40%'
                        },
                        items: [
			   // {
			  //	xtype : 'panel',
			//	html : ['<center><div id="facebook_button"> <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">',
			//	'</fb:login-button></div></center>'].join(),
			//	width : '50%'
			  //  },// Check button handler for code
			    {
				xtype: 'panel',
				html : '<center><fb:login-button scope="public_profile,email" onlogin="checkLoginState();" data-size="xlarge" data-auto-logout-link=true ></fb:login-button></center>',
				style : 'background-color:#fcc;',
				width : '100%',
				height : 50
			    },
			    {
                                xtype: 'emailfield',
                                label: 'Email',
                                id : 'loginEmail',
                                autoComplete: false,
                                listeners: {
                                    keyup: function(field, e){
                                        if(e.browserEvent.keyCode==13){
                                            TaskIt.app.getController('Login').doLogin()
                                        }
                                    }
                                }
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
                                listeners: {
                                    keyup: function(field, e){
                                        if(e.browserEvent.keyCode==13){
                                            TaskIt.app.getController('Login').doLogin()
                                        }
                                    }
                                }
                            },
                            {
                                xtype : 'panel',
                                layout : {
                                    type : 'hbox'
                                },
                                defaults : {
                                    flex : 1,
                                    margin: '5 5 5 5'
                                },
                                items : [
                                    {
                                        xtype: 'button',
                                        text: 'Sign Up',
                                        action: 'goToSignUp'
                                    },
                                    {
                                        xtype : 'button',
                                        text : 'Login',
                                        action : 'doLogin'//,
                                        //ui : 'action'
                                    }
                                ]
                            }//,
                            // {
                            //     html: '<div id="gSignInWrapper">' +
                            //         '<div id="customBtn" class="customGPlusSignIn">' +
                            //         '<span class="icon"> </span>' +
                            //         '<span class="buttonText">Google</span>' +
                            //         '</div>' +
                            //         '</div>',
                            //     xtype: 'container',
                            //     width: '100%'
                            // }
                        ]
                    }
                ]
            }
        ]
    }, initialize: function() {
        this.on('painted', function() {
            var additionalParams = {
                'theme' : 'dark'
            };

            gapi.signin.render('customBtn', additionalParams);
        });
    }
});


// I've provided a sample button that switches to the main app screen. When you finish verifying the login, make a similar sort of button to switch to the main screen (with the tabs) :

// Check button handler for code
