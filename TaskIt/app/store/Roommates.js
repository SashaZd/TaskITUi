Ext.define("TaskIt.store.Roommates", {
    extend: "Ext.data.Store",
    requires : [
        'Ext.data.proxy.JsonP'
    ],
    config: {
    	storeId : 'Roommates',
        model: "TaskIt.model.Roommate",
		autoLoad : true
    }
});