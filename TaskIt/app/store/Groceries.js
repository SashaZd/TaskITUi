GroceryStore=Ext.define("TaskIt.store.Groceries", {
    extend: "Ext.data.Store",
    requires : [
    	'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: "TaskIt.model.GroceryItem",
        autoLoad: true,
        proxy : {
            type : 'ajax',
            method: 'get',
            url : base_URL.concat('group/',GROUP_ID.toString(),'/grocery/'),
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

