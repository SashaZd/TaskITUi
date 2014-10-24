Ext.define('TaskIt.view.Setup', {
    extend: 'Ext.Panel',
    xtype: 'setup',
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
                html: '<h2><center>Setup Default Screen To Be Coded to Change</center></h2>'
            }
        ]
    }
});
