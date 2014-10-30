
Ext.define("TaskIt.store.OnlyChores", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.OnlyChore",
        autoLoad : true,
        proxy : {
            type : 'ajax',
            url : 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/chore/',
                // url: 'app/store/temp.json',
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'chores'
            }
        }      

    }
});


