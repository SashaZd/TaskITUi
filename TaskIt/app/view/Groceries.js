var myNewGroceryItem;

Ext.define('TaskIt.view.Groceries', {
    extend: 'Ext.Panel',
    xtype: 'groceries',
    requires: [
        'Ext.TitleBar',
        'Ext.List',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Groceries',
        id : 'groceryPanel',
        iconCls: 'list',
        style:'background-color:rgba(0,0,0,0);',
        styleHtmlContent : true,
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        items : [
            {
                xtype : 'toolbar',
                title : '<font size=3>Groceries</font>',
                docked : 'top',

                items : [
                    {
                        xtype : 'button',
                        iconCls: 'sync',
                        text : 'sync',
                        handler : function(){
                            console.log('Synced');
                            Ext.getStore('Groceries').load();
                        }
                    },
                    {xtype : 'spacer'},
                    {
                        xtype : 'button',
                        id : 'addToGroceryList',
                        iconCls : 'add',
                        text : '<font color="white"></font>',
                        // ui : 'add',
                        handler : function(button){
                            if(!myNewGroceryItem){
                                console.log("Not here")
                            }

                            if (button.getIconCls() == "add"){
                                myNewGroceryItem = new Ext.Panel({
                                    layout : {
                                        type : 'hbox'
                                    },
                                    width : '90%',
                                    items : [
                                        {
                                            xtype: 'textfield',
                                            name: 'name',
                                            id : 'addNewGroceryItem',
                                            label : '<font size=4><b>Grocery Item</b></font>',
                                            flex : 6,
                                            labelWidth : '1',
                                            // width : '80%',
                                            margin : '0 0 0 -20'
                                        },
                                        {
                                            xtype : 'spacer',
                                            // flex : 1
                                            width : 3
                                        },
                                        {
                                            xtype : 'button',
                                            margin : '5 0 0 0',
                                            text : 'Add',
                                            flex : 1,
                                            // width : '18%',
                                            handler : function(){
                                                if(Ext.getCmp('addNewGroceryItem').getValue()==""){

                                                }
                                                else {
                                                    var grocery_item=Ext.getCmp('addNewGroceryItem').getValue();
                                                    var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/grocery/';
                                                    console.log(tempURL);
                                                    Ext.Ajax.request({
                                                        url: tempURL,
                                                        method : 'POST',
                                                        params : {
                                                            group_id: GROUP_ID,
                                                            name: grocery_item
                                                        },
                                                        success: function(response){
                                                            console.log(response.responseText);
                                                            Ext.getCmp('addNewGroceryItem').setValue("");
                                                            Ext.getStore('Groceries').load();
                                                        }
                                                    });
                                                }

                                            }
                                        }
                                    ]
                            });
                                Ext.getCmp('groceryPanel').insert(0,myNewGroceryItem);
                                Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                                Ext.getCmp('addToGroceryList').setIconCls('');
                            }
                            else {
                                Ext.getCmp('addToGroceryList').setText('');
                                Ext.getCmp('addToGroceryList').setIconCls('add');
                                Ext.getCmp('groceryPanel').remove(myNewGroceryItem);

                            }


                        }
                    }
                ]
            },
            {
                xtype:'spacer',
                flex:1
            },
            {
                xtype : 'groceryList',
                style:'background-color:rgba(0,0,0,0);',
                styleHtmlCls:'mySemiTransparentList',
                width:'90%',
                        //cls:'myAppBackground',
                flex : 7,
                styleHtmlContent : true,
                scrollable : true
            },
            {
                xtype:'spacer',
                flex:1
            }
        ]


    }

});
