Ext.define('TaskIt.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        layout : 'auto',
        items: [
            {
                xtype : 'panel',
                styleHtmlContent : true, 
                html: '<h2><center>Login Default Screen for Brandon to Change</center></h2>'
            }, 
            {
                xtype : 'button', 
                text : 'Login', 
                handler : function(){
                    setTimeout(function() {
                        Ext.getCmp('startScreen').getLayout().setAnimation({
                            type: 'slide',
                            duration: 300,
                            reverse: true
                        });
                        Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'right'}); 
                    });
                }
            }
        ]
    }
});


// I've provided a sample button that switches to the main app screen. When you finish verifying the login, make a similar sort of button to switch to the main screen (with the tabs) : 
// Check button handler for code