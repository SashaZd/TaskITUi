Ext.define('TaskIt.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        title: 'Settings',
        iconCls: 'settings',
        iconMask : true,

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            }
        ]
    }
});
