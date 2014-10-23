Ext.define('TaskIt.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    cls:  'yourclassname',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView'
    ],
    config: {
        title: 'Home',
        iconCls: 'home',
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
        },
        scrollable : true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Home'
            },
            {
                xtype : 'userList',
                id : 'myUserList',
                flex : 1,
                styleHtmlContent : true, 
            }
            
        ]
    }
});

