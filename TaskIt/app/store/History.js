Ext.define("TaskIt.store.History", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.HistoryItem",
        autoLoad : false,
        proxy : {
            type : 'ajax',
            method: 'get',
            url : historyStore_URL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json'
            }
        },
        grouper: {
            groupFn: function(record) {
                if (record.get('email')==userEmail)
                {
                    return "My History"
                }
                else {
                    return "Others History"
                }
            }
        }
    }
});



