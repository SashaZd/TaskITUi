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
                        html : '<div class="otherTaskText">Task It</div>'
                    },
                    {
                        xtype: 'container',

                        defaults: {
                            margin: '5 5 5 5',
                            labelWidth: '40%'
                        },
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'Email ID',
                                id : 'loginEmail'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
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
                                        action : 'doLogin',
                                        ui : 'action'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});


// I've provided a sample button that switches to the main app screen. When you finish verifying the login, make a similar sort of button to switch to the main screen (with the tabs) : 

// Check button handler for code
