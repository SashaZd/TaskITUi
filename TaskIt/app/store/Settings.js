Ext.define("TaskIt.store.Settings", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.Setting",
        autoLoad : true,
        proxy : {
            type : 'ajax',
            url : 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/',
            useDefaultXhrHeader : false,
            reader : {
                type : 'json'
            }
        }      

    }
});



