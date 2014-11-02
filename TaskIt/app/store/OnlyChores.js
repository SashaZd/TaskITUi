
Ext.define("TaskIt.store.OnlyChores", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.OnlyChore",
        autoLoad : true,
        proxy : {
            type : 'ajax',
            url : 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/chore/',
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



