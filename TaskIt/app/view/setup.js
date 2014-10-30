var mytemp;

Ext.define('TaskIt.view.Setup', {
    extend: 'Ext.Panel',
    // xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Setup',
        iconCls: 'home',
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
        },
        // scrollable : true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '<font size=3>Setup the Group</font>'
            },
            {
                xtype : 'defaultTaskList',
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
                        id : 'addToChoreList',
                        iconCls : 'add',
                        // ui : 'add',
                        handler : function(){
                            // add to chores here //

                            // var buttonIconCls = Ext.getCmp('addToGroceryList').getIconCls();

                            // if (buttonIconCls == "add"){
                            //     Ext.getCmp('groceryPanel').insert(0,myNewGroceryItem);
                            //     Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                            //     Ext.getCmp('addToGroceryList').setIconCls('');
                            // }
                            // else {
                            //     Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                            //     Ext.getCmp('addToGroceryList').setIconCls('');
                            //     Ext.getCmp('groceryPanel').remove(myNewGroceryItem);
                            // }
                            Ext.Msg.alert(
                                'Add!',
                                'To the store',
                                Ext.emptyFn
                            );
                        }

                    }
                ]
            }

        ]
    }
});
