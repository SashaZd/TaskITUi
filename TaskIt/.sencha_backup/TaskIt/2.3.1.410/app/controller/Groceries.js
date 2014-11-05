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

    deleteGrocery : function(list, index, target, record, e, eOpts){
        var grocery_id = record.data.grocery_id;

        Ext.Msg.confirm(
            'Deleting from Groceries',
            "Are you sure you wish to delete this item?",
            function(button){
                if(button=='yes'){
                    var tempURL = base_URL.concat('grocery/', grocery_id.toString(), '/' );
                    Ext.Ajax.request({
                        method : 'DELETE',
                        url: tempURL,
                        success: function(response){
                            console.log(response.responseText);
                            Ext.getStore('Groceries').load();
                        }
                    }); 
                    setTimeout(function(){list.deselect(index);},500);
                }
            }
        );
    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
