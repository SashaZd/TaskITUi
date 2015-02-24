var profGroupBy= 'HISTORY_GROUPBY_NAME'

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
                if (profGroupBy == 'HISTORY_GROUPBY_NAME'){
                    var userName = record.get('user_first_name') + " " + record.get('user_last_name')
                    return userName
                }
                else{
                    var sortDate = new Date(record.get('completed_on'))
                    return sortDate.toDateString()
                }
            }
        },
        groupDir: 'DESC',           
        sorters: 'completed_on',

    }
});



