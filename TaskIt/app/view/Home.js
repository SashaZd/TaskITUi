Ext.define('TaskIt.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Home',
        iconCls: 'home',
        style:'background-color:rgba(0,0,0,0);',
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '<font size=3>Home</font>'
            },
            {
                xtype : 'choreListPanel',
                flex : 3,
                styleHtmlContent : true
            },
            {
                xtype : 'panel',
                flex : 1,
                layout : {
                    type : 'hbox',
                    align : 'middle'

                },
                items : [
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        width : '40%',
                        text : '<font size=3>Done All</font>',

                        height : 40,
                        handler : function(){
                            // var tempStore=Ext.getStore('Chores');

                           Ext.getStore('Chores').each(function(rec) {
                                // if (something here) {
                                    var array=rec.get('users');
                                    for (i in array){
                                         if (array[i].email == userEmail){
                                            for (var j =0; j< array[i].todays_chores.length; j++) {
                                                var tempChoreID = array[i].todays_chores[j].chore_id;

                                                if(!array[i].todays_chores[j].is_done){
                                                    var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/chore/'+tempChoreID+'/';
                                                    console.log(tempURL);
                                                    Ext.Ajax.request({
                                                        url: tempURL,
                                                        method : 'PUT',
                                                        success: function(response){
                                                            var text = response.responseText;
                                                            console.log("Successs true...");
                                                            console.log(text);
                                                            Ext.getStore('Chores').sync();
                                                            Ext.getStore('Chores').load();
                                                        }
                                                    });
                                                }

                                            };
                                         }
                                    }
                                // }
                            });

                            

                            Ext.Msg.alert(
                                'Great!', 
                                'Go read a book!', 
                                Ext.emptyFn
                            );
                        }

                        // ui : 'confirm',



                    },
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        text : '<font size=3>Not at Home</font>',

                        width : '40%',
                        height : 40,
                        handler : function(){
                            Ext.Msg.alert(
                                'Uh Oh!', 
                                "Well, we'll getcha tomorrow.", 
                                Ext.emptyFn
                            );
                        }

                        // ui : 'decline',

                    },
                    {
                        xtype : 'spacer'
                    }
                ]
            }
            
        ]
    }
});

