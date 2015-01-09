Ext.define('TaskIt.view.ChoreList', {
    extend: 'Ext.List',
    xtype: 'choreList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Chores',
        id : 'myChoreList',
        styleHtmlContent : true,
        itemTpl : chorelisttpl,
        grouped : true,
        iconCls : 'list'
    }

});
