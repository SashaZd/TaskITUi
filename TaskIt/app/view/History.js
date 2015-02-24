Ext.define('TaskIt.view.History', {
    extend: 'Ext.Panel',
    xtype: 'history',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        width : '100%',
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'stretch'
        },
        items: [
            {
                xtype : 'toolbar',
                title : '<font size=4><b>History</b></font>',
                cls : 'myInAppToolbar',
                docked : 'top'
            },
            {
                xtype : 'list',
                id : 'historyList',
                flex : 1,
                width : '100%',
                style:'background-color:rgba(0,0,0,0);',
                styleHtmlCls:'mySemiTransparentList',
                styleHtmlContent : true,
                itemTpl : 'Hello',
                store : 'History',
                grouped : true
            }
        ]
    }
});
