Ext.define("TaskIt.store.Settings", {
    extend: "Ext.data.Store",
    config: {
        model: "TaskIt.model.Setting",
        proxy : {
            type : 'ajax',
            url : settingsStore_URL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json'
            },
            listeners : {
                exception : function(proxy, response, operation){
                    // console.log("Error : Not logged in yet. Login soon !")
                }
            }
        }      

    }
});



