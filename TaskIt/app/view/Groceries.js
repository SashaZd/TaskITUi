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
                layout : {
                    type : 'hbox'
                },
                id: 'addNewGroceryForm',
                width : '90%',
                hidden: true,
                items : [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        id : 'addNewGroceryItem',
                        label : '<font size=4><b>Grocery Item</b></font>',
                        flex : 6,
                        labelWidth : '1',
                        autoCapitalize: true,
                        autoCorrect: true,
                        // width : '80%',
                        margin : '0 0 0 -20',
                        listeners: {
                            keyup: function(field, e){
                                if(e.browserEvent.keyCode==13){
                                    addGrocery();
                                }
                            }
                        }
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
                        handler : addGrocery
                    }
                ]
            },
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
                        text : '<font color="white"></font>',
                        // ui : 'add',
                        handler : function(button){

                            if (button.getIconCls() == "add"){
                                Ext.getCmp('addNewGroceryForm').show();

                                Ext.getCmp('addToGroceryList').setText('<font size=3>Done</font>');
                                Ext.getCmp('addToGroceryList').setIconCls('');
                            }
                            else {
                                dismissForm();
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

function addGrocery() {
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
            dismissForm();
        }
    });
}

function dismissForm() {
    Ext.getCmp('addToGroceryList').setText('');
    Ext.getCmp('addToGroceryList').setIconCls('add');
    Ext.getCmp('addNewGroceryForm').hide();
}
