Ext.define('TaskIt.controller.Chores', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            choreList: 'choreList',
            doneAllButton : 'home button[action=doneAllChores]'
        },
        control: {
            choreList : {
                itemswipe : 'toggleDoneChore'
            },

            doneAllButton : {
                tap: 'doneAllChores'
            }
        }
    },

    doneAllChores : function(){
        Ext.getStore('Chores').each(function(rec) {
            var array=rec.get('users');
            for (i in array){
                 if (array[i].email == userEmail){
                    for (var j =0; j< array[i].todays_chores.length; j++) {
                        var tempChoreID = array[i].todays_chores[j].chore_id;

                        if(!array[i].todays_chores[j].is_done){
                            var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/chore/'+tempChoreID+'/';
                            Ext.Ajax.request({
                                url: tempURL,
                                method : 'PUT',
                                success: function(response){
                                    var text = response.responseText;
                                    Ext.getStore('Chores').sync();
                                    Ext.getStore('Chores').load();
                                }
                            });
                        }
                    };
                }
            }
        });

        Ext.Msg.alert(
            'Great!', 
            'Go read a book!', 
            Ext.emptyFn
        );
    },

    toggleDoneChore : function(t, index, target, record, e, eOpts){
        if(record.data.email == userEmail){
            var tempURL = base_URL.concat('chore/',record.data.chore_id,'/');
            Ext.Ajax.request({
                method : 'PUT',
                url: tempURL,
                success: function(response){
                    if(JSON.parse(response.responseText).success){
                        console.log(response.responseText); 
                        TaskIt.app.getController('Login').setChores();   
                    }
                    else {
                        Ext.Msg.alert(
                            'Oh No!', 
                            'There seems to be a network error. Try again later.', 
                            Ext.emptyFn
                        );
                    }
                }
            });
        }
        else {
            console.log("Not your chore to do!!");
        }
    },


    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
