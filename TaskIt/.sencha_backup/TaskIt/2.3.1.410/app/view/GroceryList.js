Ext.define('TaskIt.view.GroceryList', {
    extend: 'Ext.List',
    xtype: 'groceryList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        title : 'Groceries',
        id : 'myGroceryList',
        iconCls : 'list',
        store: 'Groceries',
        loadingText : false,
        grouped : true,
        // styleHtmlContent : true, 
        itemTpl : grocerytpl
    }
});