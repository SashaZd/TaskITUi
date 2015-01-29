Ext.define('TaskIt.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        style:'background-color:rgba(0,0,0,0);',
        ui:'transparent',
        styleHtmlContent : true,
        fullscreen : true,
        layout : 'card',
        items: [
            {
                xtype : 'home',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            },
            {
                xtype : 'groceries',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            },
            {
                xtype : 'settings',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            }
        ]
    }
});
