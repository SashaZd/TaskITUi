Ext.define('TaskIt.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        layout : 'card',
        items: [
            {
                xtype : 'panel',
                styleHtmlContent : true, 
                html: '<h2><center>Login Default Screen for Brandon to Change</center></h2>'
            }
        ]
    }
});
