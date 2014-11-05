
Ext.define("TaskIt.store.OnlyChores", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.OnlyChore",
        // autoLoad : true,
        proxy : {
            type : 'ajax',
            method : 'GET',
            url : onlyChoresStore_URL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'chores'
            }
        },
        sorters : [{
                property : 'chore_name',
                direction : 'ASC'
            }]      

    }
});



