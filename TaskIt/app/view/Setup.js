var mytemp;

Ext.define('TaskIt.view.Setup', {
    extend: 'Ext.Panel',
    xtype: 'setup',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.MessageBox'
    ],
    config: {
        // title: 'Setup',
        // iconCls: 'home',
        styleHtmlContent : true,
          
        // scrollable : true,
        listeners : {
            show : function(){
                // console.log("SHowwwwwwwww");
                Ext.getCmp('setup_groupname').setValue(Ext.getCmp('signup_groupname').getValue());
            }
        },
        layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'

                },
                defaults : {
                    width : '90%'
                },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '<font size=3>Setup the Group</font>'
            },
            {
                xtype : 'panel',
                flex : 1,
                id : 'addMembersAndChoresPanel',
                height : '40%',
                layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
                defaults : {
                    width : '100%',
                    margin : '5 5 5 5'
                },

                items : [
                    {
                        xtype : 'panel',
                        flex : 1
                    },
                    {
                        xtype : 'textfield',
                        label : 'Group Name',
                        id : 'setup_groupname',
                        flex : 1
                    },
                    {
                        xtype :'toolbar',
                        flex : 1,
                        styleHtmlContent : true,
                        title : '<h3> Group Members </h3>',
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                id : 'addGroupMembersButton',
                                action : 'addGroupMembers',
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4,
                        // height : '40%',
                        items : [
                             {
                                xtype : 'defaultTaskList',
                                // flex : 3,
                                height : '100%',
                                styleHtmlContent : true,

                              },
                        ]
        
                    },
                    {
                        xtype : 'toolbar',
                        styleHtmlContent : true,
                        title : '<h3>Group Chores</h3>',
                        flex : 1,
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                action : 'addGroupChores'
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4, 
                        items : [
                            {
                                xtype : 'defaultTaskList',
                                height : '100%',
                                styleHtmlContent : true  
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 1
                    }
        
           

                 //    {
                 //        xtype : 'spacer'
                 //    },
                 //    {htm
                 //        xtype : '',
                 //        id : 'addToChoreList',
                 //        iconCls : 'add',
                 //        // ui : 'add',
                 //        handler : function(){
                 //            // add to chores here //

                 //            // var buttonIconCls = Ext.getCmp('addToGroceryList').getIconCls();

                 //            // if (buttonIconCls == "add"){
                 //            //     Ext.getCmp('groceryPanel').insert(0,myNewGroceryItem);
                 //            //     Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                 //            //     Ext.getCmp('addToGroceryList').setIconCls('');
                 //            // }
                 //            // else {
                 //            //     Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                 //            //     Ext.getCmp('addToGroceryList').setIconCls('');
                 //            //     Ext.getCmp('groceryPanel').remove(myNewGroceryItem);
                 //            // }
                 //            Ext.Msg.alert(
                 //                'Add!',
                 //                'To the store',
                 //                Ext.emptyFn
                 //            );
                 //        }

                 //    }
                ]
            }

        ]
    }
});
