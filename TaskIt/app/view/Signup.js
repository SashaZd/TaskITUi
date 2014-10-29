
Ext.define('TaskIt.view.Signup', {
    extend: 'Ext.Panel',
    xtype: 'signup',
    id : 'signupView',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Email',
        'Ext.field.Text'
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
                width : '90%',
                items : [
                    {
                        xtype: 'container',
                        styleHtmlContent : true,
                        defaults: {
                            margin: '5 5 5 5'
                        },
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                id : 'email'
                            },
                            {
                                xtype: 'textfield',
                                label: 'First Name',
                                id: 'firstname'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Last Name',
                                id: 'lastname'
                            },
                            {
                                xtype: 'button',
                                text: 'Sign Up',
                                action: 'signUp'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
