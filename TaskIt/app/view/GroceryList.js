
var grocerytpl = new Ext.XTemplate(
    '<center>',
    "<tpl if='is_done==true'>",
            "<div class='taskTextCompleted'>{grocery_item}</div>",
        "<tpl else>",
            "<div class='myTaskText'> {grocery_item} </div>",
        "</tpl>",   
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
        itemTpl : grocerytpl,
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                

                   var tempURL = base_URL.concat('grocery/',record.data.id,'/');
                    Ext.Ajax.request({
                    method : 'PUT',
                    url: tempURL,
                    success: function(response){
                        console.log(response.responseText);
                        console.log('Done the grocery!');

                    },
                }); 
            }
        }
    }
});