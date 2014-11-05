Ext.define('TaskIt.controller.Groceries', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            groceryList : 'groceryList',
            groceryPanel : 'groceries'
        },
        control: {
            groceryList : {
                itemswipe : 'toggleBought',

                itemtaphold : 'deleteGrocery'
            }
        }
    },

    toggleBought : function(t, index, target, record, e, eOpts){
        var tempGID = record.data.grocery_id.toString();
        var tempURL = base_URL.concat('grocery/', tempGID ,'/');
        console.log(tempURL);
        Ext.Ajax.request({
            method : 'PUT',
            url: tempURL,
            success: function(response){
                console.log(response.responseText);
                Ext.getStore('Groceries').load();
            }
        }); 
    },

    deleteGrocery : function(t, index, target, record, e, eOpts){
        var tempGName = record.data.grocery_name;

        Ext.Msg.confirm(
            'Deleting from Groceries',
            "Are you sure you wish to delete this item?",
            function(button){
                if(button=='yes'){
                    console.log("yes delete")
                }
            }
        );
    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
