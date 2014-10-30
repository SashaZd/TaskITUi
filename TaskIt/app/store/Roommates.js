Ext.define("TaskIt.store.Roommates", {
    extend: "Ext.data.Store",
    requires : [
        // 'Ext.data.proxy.JsonP'
    ],
    config: {
        model: "TaskIt.model.Roommate",
		autoLoad : true,
		reader : {
            type : 'json',
            rootProperty : 'users'
        }
    }
});