
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
                                style:'background-color:rgba(0,0,0,0);',
                                id : 'signup_email'
                            },
                            {
                                xtype: 'textfield',
                                label: 'First Name',
                                style:'background-color:rgba(0,0,0,0);',
                                id: 'signup_firstname'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Last Name',
                                style:'background-color:rgba(0,0,0,0);',
                                id: 'signup_lastname'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Group Name',
                                id: 'signup_groupname'
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
