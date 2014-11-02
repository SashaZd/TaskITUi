var groupSettingsTpl = new Ext.XTemplate(
    '<h2>Group Joined : <b>{group_name}</b></h2>'
)

Ext.define('TaskIt.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    requires: [
        'Ext.TitleBar',
        'Ext.List',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Settings',
        id: 'settingsPanel',
        style:'background-color:rgba(0,0,0,0);',
        iconCls: 'settings',
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
                width:'100%',
                docked: 'top',
                title: '<font size=3>Setup the Group</font>'
            },
            {
                xtype : 'panel',
                id : 'settingsElements',
                flex : 1,
                height : '40%',
                layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
                defaults : {
                    width : '90%',
                    margin : '5 5 5 5'
                },
                items : [
                    {
                        xtype : 'panel',
                        flex : 1
                    },
                    {
                        xtype : 'panel',
                        flex : 1,
                        layout : 'fit',
                        id : 'householdDetails',
                        styleHtmlContent : true,
                        tpl : groupSettingsTpl
                    },
                    {
                        xtype :'toolbar',
                        flex : 1,
                        style:'background-color:rgba(0,0,0,0)',
                        styleHtmlCls:'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3> Group Members </h3>',
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                action : 'addGroupMembers',
                                id : 'settings_addGroupMembers'
                            }
                        ]
                    },
                //will insert the new member form here from settings controller
                    {
                        xtype : 'panel',
                        flex : 4,
                        items : [
                            {  
                                xtype : 'roommatesList',
                                layout : 'fit',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0)',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true
                            }
                        ]
        
                    },
                    {
                        xtype : 'toolbar',
                        style:'background-color:rgba(0,0,0,0)',
                        styleHtmlCls:'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3>Group Chores</h3>',
                        flex : 1,
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                action : 'addGroupChores',
                                id : 'settings_addGroupChores'
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4, 
                        items : [
                            {
                                xtype : 'onlyChoresList',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0)',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 1
                    }
                ]
            }   
        ]
    }
});


// //The settings screen : Assume we know the userid for the user at this point. And the post request sends us the 
// //group id
// myNewChore = new Ext.Panel({
//     layout : {
//             type : 'vbox'
//         },
//     defaults:{ 
//  margin: '5 5 5 5'
//     },
//         items : [
//             {
//                 xtype: 'textfield',
//                 name: 'name',
//                 id : 'addNewChore',
//                 width : '30%'

//             },
//      // insert space here
//      {
//      xtype: 'selectfield',
//                 name: 'name',
//                 id : 'choreFrequency',
//                 width : '30%'
//      options: [
//                         {text: 'First Option',  value: 'Weekly'},
//                         {text: 'Second Option', value: 'Daily'},
//                         {text: 'Third Option',  value: 'Mon'}
//                     ]        
//      },

//             {xtype : 'spacer', width : '2%'},
//             {
//                 xtype : 'button',
//                 text : 'Add',
//                 width : '18%',
//                 handler : function(){
//                     // Ext.Ajax.request({
//                     //     url: 'page.php',
//                     //     params: {
//                     //         addToGroup : 1,
//                     //         groceryItem : Ext.getCmp('addNewGroceryItem').getValue()
//                     //     },
//                     //     success: function(response){
//                     //         var text = response.responseText;
//                     //     }
//                     // });
//          var chore=Ext.getCmp('addNewChore').getValue();
//          var frequency=Ext.getCmp('choreFrequency').getValue();

//                     Ext.getStore('Chores').add({Chore: chore});
//                     Ext.getStore('Chores').sync();
//                     var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/chore/';
//                     console.log(tempURL);
//                     // Ext.Ajax.request({
//                     //     url: tempURL,
//                     //     method : 'PUT',
//          //  params : {
//          //      user_id: USER_ID,
//          //      group_id: GROUP_ID,
//          //      chore_name: chore,
//          //      chore_frequency: frequency
//          //  },
//                     //     success: function(response){
//                     //         var text = response.responseText;
//                     //         console.log("Successs true...");
//                     //         console.log(text);
//                     //         Ext.getStore('Chores').sync();
//                     //         Ext.getStore('Chores').load();
//                     //     }
//                     // });
                                    
//                 }
//             }
//         ]
// });


// Ext.define('TaskIt.view.Settings', {
//     extend: 'Ext.Panel',
//     xtype: 'settings',
//     requires: [
//         'Ext.TitleBar',
//  'Ext.List',
//         'Ext.MessageBox'
//     ],
//     config: {
//         title: 'Settings',
//  id: 'chorePanel',
//         iconCls: 'list',
//         // iconMask : true,
//         styleHtmlContent : true,
//         layout : {
//             type : 'vbox'
//         },
//         items: [
//             {

//                 docked: 'top',
//                 xtype: 'titlebar',
//                 title: 'Settings',
//                 items : [
//                     {xtype : 'spacer'},
//                     {
//                         xtype : 'button',
//          id: 'addToChores',
//                         iconCls : 'add',
//                         align : 'right',
//                         handler : function (){
//                             var buttonIconCls = Ext.getCmp('addToChores').getIconCls();

//                             if (buttonIconCls == "add"){
//                                 Ext.getCmp('chorePanel').insert(0,myNewChore);
//                                 Ext.getCmp('addToChores').setText('<font size=3>Done</font>');
//                                 Ext.getCmp('addToChores').setIconCls('');
//                             }
//                             else {
//                                 Ext.getCmp('addToChores').setText('<font size=3>Done</font>');
//                                 Ext.getCmp('addToChores').setIconCls('');   
//                                 Ext.getCmp('chorePanel').remove(myNewGroceryItem);
//                             }


//                         }
//                     }
//                 ]
//             },
//             {
//                 xtype   : 'choreList',
//                 flex : 3,
//                 // title   : 'Home',
//                 // iconCls : 'home',
//                 // itemTpl : '<center><font size=3>{chore_name}</font></center>',
//                 // store : 'Chores'
//                 styleHtmlContent : true, 
//                 scrollable : true

//             }
//         ]
//     }
// });
