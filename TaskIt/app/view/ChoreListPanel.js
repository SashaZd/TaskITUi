Ext.define('TaskIt.view.ChoreListPanel', {
    extend: 'Ext.Panel',
    xtype: 'choreListPanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
        },
        items: [
            {
                xtype : 'choreList',
                
                flex : 1,
                style:'background-color:rgba(0,0,0,0);',
                styleHtmlCls:'mySemiTransparentList',
                styleHtmlContent : true
            }
        ]
    }
});
