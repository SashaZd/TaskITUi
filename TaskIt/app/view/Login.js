Ext.define('TaskIt.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.field.Email',
        'Ext.form.FieldSet',
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
                                xtype: 'textfield',
                                label: 'Email ID'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password'
                            },
                            {
                                xtype : 'button', 
                                text : 'Login', 
                                handler : function(){
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