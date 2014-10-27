myNewGroceryItem = new Ext.Panel({
        layout : {
            type : 'hbox'
        },
        items : [
            {
                xtype: 'textfield',
                name: 'name',
                id : 'addNewGroceryItem',
                width : '80%'

            },
            {xtype : 'spacer', width : '2%'},
            {
                xtype : 'button',
                text : 'Add',
                width : '18%',
                handler : function(){
                    // Ext.Ajax.request({
                    //     url: 'page.php',
                    //     params: {
                    //         addToGroup : 1,
                    //         groceryItem : Ext.getCmp('addNewGroceryItem').getValue()
                    //     },
                    //     success: function(response){
                    //         var text = response.responseText;
                    //     }
                    // });
		    var grocery_item=Ext.getCmp('addNewGroceryItem').getValue();
                    Ext.getStore('Groceries').add({grocery_item: Ext.getCmp('addNewGroceryItem').getValue()});
                    Ext.getStore('Groceries').sync();
                    var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/grocery/';
                    console.log(tempURL);
                    Ext.Ajax.request({
                        url: tempURL,
                        method : 'PUT',
			params : {
			    user_id: USER_ID,
			    group_id: GROUP_ID,
			    item: grocery_item
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
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
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
                xtype : 'groceryList',
                flex : 3,
                styleHtmlContent : true, 
                scrollable : true
            },
        ]


    }
    
});
