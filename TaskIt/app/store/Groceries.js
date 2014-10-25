Ext.define("TaskIt.store.Groceries", {
    extend: "Ext.data.Store",
    requires : [
    	'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: "TaskIt.model.GroceryItem",
        proxy: {
            type: 'localstorage',
            id  : 'grocery_list'
        },
        autoLoad: true
    }
});

