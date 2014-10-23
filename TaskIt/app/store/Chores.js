Ext.define("TaskIt.store.Chores", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.Chore",
        data: [
            {id : 1, userId: 1, name: 'Cooking' },
        	{id : 2, userId: 2, name: 'Cleaning' }
        ]
    }
});

