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
        layout : {
            type : 'vbox'
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings',
                items : [
                    {
                        xtype : 'button',
                        iconCls : 'add',
                        align : 'right',
                        handler : function (){
                            Ext.Msg.alert(
                                'Add Chore', 
                                "TBD", 
                                Ext.emptyFn
                            );
                        }
                    }
                ]
            },
            {
                xtype   : 'list',
                flex : 1,
                title   : 'Home',
                iconCls : 'home',
                itemTpl : '<center><font size=3>{chore_name}</font></center>',
                store : 'Chores'
            }
        ]
    }
});
