GroceryStore=Ext.define("TaskIt.store.Groceries", {
    extend: "Ext.data.Store",
    requires : [
    	'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: "TaskIt.model.GroceryItem",
        proxy : {
            type : 'ajax',
            method: 'get',
            url : groceriesStore_URL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json'
                // rootProperty : 'chores'
            }
        },
        grouper: {
            groupFn: function(record) {
                if (record.get('is_done')==true)
                {
                    return "Purchased"
                }
                else {
                    return "Buy"
                }
                
            }
        }
    }
});

