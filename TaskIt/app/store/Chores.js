
Ext.define("TaskIt.store.Chores", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.Chore",
        autoLoad : true,
        sorters : 'is_done',
        grouper: {
            groupFn: function(record) {
                if (record.get('email')==userEmail)
                {
                    return "My Chores"
                }
                else {
                    return "Rest of Household"
                }
                
            }
        },
    }
});



