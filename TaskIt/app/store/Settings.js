Ext.define("TaskIt.store.Setitngs", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.Setting",
        autoLoad : true,

        proxy : {
            type : 'ajax',
            url : 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/settings/1/',
                // url: 'app/store/temp.json',
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'users'
            }
        }      
    }
});

