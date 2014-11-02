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
                label : '<font size=3>Grocery Item</font>',
                flex : 6,
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
        		    var grocery_item=Ext.getCmp('addNewGroceryItem').getValue();

                    Ext.getStore('Groceries').add({
                        name: Ext.getCmp('addNewGroceryItem').getValue()
                    });

                    Ext.getStore('Groceries').sync();
                    
                    var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/grocery/';
                    console.log(tempURL);
                    Ext.Ajax.request({
                        url: tempURL,
                        method : 'POST',
            			params : {
            			    // user_id: USER_ID,
            			    group_id: GROUP_ID,
            			    name: grocery_item
            			},
                        success: function(response){
                            var text = response.responseText;
                            console.log("Successs true...");
                            console.log(text);
                            Ext.getStore('Groceries').sync();
                            Ext.getStore('Groceries').load();
                        }
                    });             
                }
            }
        ]
});

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
                    {xtype : 'spacer'},
                    {
                        xtype : 'button',
                        id : 'addToGroceryList',
                        iconCls : 'add',
                        // ui : 'add',
                        handler : function(){

                            var buttonIconCls = Ext.getCmp('addToGroceryList').getIconCls();

                            if (buttonIconCls == "add"){
                                Ext.getCmp('groceryPanel').insert(0,myNewGroceryItem);
                                Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                                Ext.getCmp('addToGroceryList').setIconCls('');
                            }
                            else {
                                Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                                Ext.getCmp('addToGroceryList').setIconCls('');   
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
