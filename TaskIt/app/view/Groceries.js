Ext.define('TaskIt.view.Groceries', {
    extend: 'Ext.Panel',
    xtype: 'groceries',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        title: 'Groceries',
        iconCls: 'list',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Groceries',
                items : [
                    {
                        xtype : 'button',
                        iconCls: 'add',
                        iconMask : true,
                        align : 'right'
                    },
                    {
                        xtype : 'list',
                        store : 'Roommates',
                        itemTpl : '{name} {email}'
                    }
                ]
            }

        ]
    }
});
