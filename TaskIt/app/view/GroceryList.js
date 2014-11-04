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
        itemTpl : grocerytpl,
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                var tempGID = record.data.grocery_id.toString();
                var tempURL = base_URL.concat('grocery/', tempGID ,'/');
                console.log(tempURL);
                Ext.Ajax.request({
                    method : 'PUT',
                    url: tempURL,
                    success: function(response){
                        console.log(response.responseText);
                        Ext.getStore('Groceries').load();

                    },
                }); 
            }
        }
    }
});