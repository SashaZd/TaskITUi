var base_URL='http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/'
GroceryStore=Ext.define("TaskIt.store.Groceries", {
    extend: "Ext.data.Store",
    requires : [
    	'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: "TaskIt.model.GroceryItem",
        autoLoad: true,
         proxy : {
            type : 'ajax',
            url : base_URL.concat('/group/',GROUP_ID,'/grocery/'),
                // url: 'app/store/temp.json',
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'chores'
            }
        }
    }
});

