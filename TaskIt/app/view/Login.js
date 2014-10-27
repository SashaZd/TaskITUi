

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
                width : '50%',
                items : [
                    {
                        html : '<div class="otherTaskText">Welcome to Task It!</div>'
                    },
                    {
                        xtype: 'container',
                        styleHtmlContent : true,
                        defaults: {
                            margin: '5 5 5 5'
                        },
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'Email ID',
                                id : 'loginEmail'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password'
                            },
                            {
                                xtype : 'button', 
                                text : 'Login',
                                action : 'doLogin'
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