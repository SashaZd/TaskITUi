Ext.define('TaskIt.controller.Chores', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            choreList: 'choreList',
            doneAllButton : 'home button[action=doneAllChores]',
            notAtHomeButton : 'home button[action=notAtHomeButton]'
        },
        control: {
            choreList : {
                itemswipe : 'toggleDoneChore'
            },

            doneAllButton : {
                tap: 'doneAllChores'
            },

            notAtHomeButton : {
                tap : 'notAtHome'
            }
        }
    },

    notAtHome : function(){

        var tempURL = base_URL.concat('user/', USER_ID.toString(), '/notathome/');

        Ext.Ajax.request({
            url: tempURL,
            method : 'POST',
            success: function(response){
                console.log(response.responseText);
                TaskIt.app.getController('Login').setChores();
                Ext.Msg.alert(
                    'Uh Oh!',
                    "Well, we'll getcha tomorrow.",
                    Ext.emptyFn
                );
            }
        });


    },

    doneAllChores : function(){
        Ext.getStore('Chores').each(function(record) {
            
            if(record.get('email')==userEmail & record.get('is_done')=="YES"){
                var tempURL = base_URL.concat('chore/', record.get('chore_id'), '/'); 

                console.log(tempURL);
                Ext.Ajax.request({
                    url: tempURL,
                    method : 'PUT',
                    success: function(response){
                        console.log(response.responseText);
                        TaskIt.app.getController('Login').setChores();
                    }
                });
            }
        });

        Ext.Msg.alert(
            'Great!',
            'Go read a book!',
            Ext.emptyFn
        );
    },

    toggleDoneChore : function(t, index, target, record, e, eOpts){
        if (e.direction == 'left'){
            if(record.data.email == userEmail){
                //left does the chore, right is  undo
                if (record.data.is_done == false){
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
            }
            else {
                console.log("Not your chore to do!!");
            }
        }
        else {
            if(record.data.email == userEmail){
                //left does the chore, right is  undo
                if (record.data.is_done == true){
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
            }
            else {
                console.log("Not your chore to do!!");
            }
        }
    },



    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
