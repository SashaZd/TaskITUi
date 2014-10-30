Ext.define('TaskIt.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        styleHtmlContent : true,
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
