
var grocerytpl = new Ext.XTemplate(
    '<center>',
    	'<div class="myTaskText">',
    		'{grocery_item}',
    	'</div>',
    '<center>'
);


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
        iconCls : 'list',
        store: 'Groceries',
        // styleHtmlContent : true, 
        itemTpl : grocerytpl
    }
});