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
                xtype : 'home'
            },
            {
                xtype : 'groceries'
            },
            {
                xtype : 'settings'
            }
        ]
    }
});
