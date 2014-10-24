Ext.define('TaskIt.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'start',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        id : 'startScreen',
        layout : 'card',
        items: [
            {
                xtype : 'login'
            },
            {
                xtype : 'setup'
            },
            {
                xtype : 'main'
            }
        ]
    }
});
