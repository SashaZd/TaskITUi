
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
                        xtype : 'container',
                        html : '<img src="resources/images/logoAndName.png"></img>',
                        width : '100%',
                        margin: '0 0 25 0'
                    },
                    {
                        xtype: 'container',
                        styleHtmlContent : true,
                        defaults: {
                            margin: '5 5 5 5',
                            labelWidth: '45%'
                        },
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                id : 'signup_email',
                                hidden : false
                            },
                            {
                                xtype: 'textfield',
                                label: 'First Name',
                                id: 'signup_firstname'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Last Name',
                                id: 'signup_lastname'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Group Name',
                                id: 'signup_groupname'
                            },
                            {

                                xtype : 'container',
                                layout : {
                                    type : 'hbox'
                                },
                                defaults : {
                                    width : '50%',
                                    margin : '0 5 0 0',
                                    flex : 1
                                },
                                items : [
                                    {
                                        xtype : 'button',
                                        text : 'Cancel',
                                        action : 'cancelSignUp'
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
        ]
    }
});
