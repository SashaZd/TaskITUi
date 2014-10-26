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
                id : 'myChoreList',
                flex : 1,
                styleHtmlContent : true
            },
            {
                html : 'Rest of the Household'
            },
            {
                xtype : 'othersChoreList',
                id : 'othersChoreList',
                flex : 1,
                styleHtmlContent : true
            }
        ]
    }
});
