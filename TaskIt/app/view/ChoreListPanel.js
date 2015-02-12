Ext.define('TaskIt.view.ChoreListPanel', {
    extend: 'Ext.Panel',
    xtype: 'choreListPanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        width : '100%',
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'center'
        },
        items: [
            {
                xtype : 'choreList',
                flex : 1,
                width : '100%',
                style:'background-color:rgba(0,0,0,0);',
                styleHtmlCls:'mySemiTransparentList',
                styleHtmlContent : true
            }
        ]
    }
});
