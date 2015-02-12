Ext.define("TaskIt.store.History", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.HistoryItem",
        autoLoad : false,
        grouper: {
            groupFn: function(record) {
                return record.get('chore_name')
                // if (record.get('email')==userEmail)
                // {
                //     return "My Chores"
                // }
                // else {
                //     return "Rest of Household"
                // }
            }
        },
        proxy : {
            type : 'ajax',
            url : 'http://api.task-it.me/api/group/38/history/',
            reader : 'json'
        }
    }
});



