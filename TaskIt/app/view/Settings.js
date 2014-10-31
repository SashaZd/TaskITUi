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
        icon: 'settings',
        styleHtmlContent : true,
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'center'
        },    
        defaults : {
            width : '80%'
        },    
        // scrollable : true,
        items: [
            {
                xtype : 'titlebar',
                title : 'Settings',
                docked : 'top',
                width : '100%'
            },
            {
                xtype : 'panel',
                flex : 1,
                layout : 'fit',
                id : 'householdDetails',
                styleHtmlContent : true,
                tpl : groupSettingsTpl
                // data : 
            },
            {
                xtype : 'toolbar',
                html : '<font color="white">Roommmates</font>',
                styleHtmlContent : true,
                style : 'background-color:#0174DF;'
            },
            {
                xtype : 'roommatesList',
                layout : 'fit',
                // id : 'myChoreList',

                flex : 3,
                styleHtmlContent : true
            },
            {
                xtype : 'panel',
                html : 'Chores',
                styleHtmlContent : true,
                style : 'background-color:#0174DF;'
            },
            {
                xtype : 'othersChoreList',
                // id : 'othersChoreList',
                flex : 3,
                styleHtmlContent : true
            }
        ]




        	// {
        	// 	xtype : 'panel',
         //        styleHtmlContent : true,
        	// 	layout : {
        	// 		type : 'vbox',
        	// 		pack : 'center',
        	// 		align : 'center'
        	// 	},
        	// 	defaults : { 
        	// 		width : '80%',
         //            margin : '5 5 5 5'
        	// 	},
        	// 	items : [
        			
         //            // {xtype : 'spacer'},
         //            {
         //                xtype : 'titlebar', 
         //                title: 'Roommates'
         //            },
         //            {
         //                xtype : 'panel',
         //                html : 'Hello World',
         //                layout : 'fit',
         //                flex : 4,
         //                // styleHtmlContent : true,
         //                // layout : 'fit',
         //                // flex : 2,
         //                // items : [
         //                //     {
         //                //         xtype : 'roommatesList',
         //                //         layout : 'fit'
         //                //     }
         //                // ]
         //            },
         //            // {xtype : 'spacer'},
         //            {
         //                xtype : 'titlebar',
         //                title : 'Chores For Group'
         //            },
         //            {
         //                xtype : 'panel',
         //                html : 'World, Hello',
         //                layout : 'fit',
         //                flex : 2
         //                // styleHtmlContent : true,
         //                // layout : 'fit',
         //                // flex : 2,
         //                // items : [
         //                //     {
         //                //         xtype : 'allChoresList'
         //                //     }
         //                // ]
         //            }
        	// 	]
        	// }

    }
});


// //The settings screen : Assume we know the userid for the user at this point. And the post request sends us the 
// //group id
// myNewChore = new Ext.Panel({
//     layout : {
//             type : 'vbox'
//         },
//     defaults:{ 
// 	margin: '5 5 5 5'
//     },
//         items : [
//             {
//                 xtype: 'textfield',
//                 name: 'name',
//                 id : 'addNewChore',
//                 width : '30%'

//             },
// 	    // insert space here
// 	    {
// 		xtype: 'selectfield',
//                 name: 'name',
//                 id : 'choreFrequency',
//                 width : '30%'
// 		options: [
//                         {text: 'First Option',  value: 'Weekly'},
//                         {text: 'Second Option', value: 'Daily'},
//                         {text: 'Third Option',  value: 'Mon'}
//                     ]		
// 	    },

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
// 		    var chore=Ext.getCmp('addNewChore').getValue();
// 		    var frequency=Ext.getCmp('choreFrequency').getValue();

//                     Ext.getStore('Chores').add({Chore: chore});
//                     Ext.getStore('Chores').sync();
//                     var tempURL = 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/chore/';
//                     console.log(tempURL);
//                     // Ext.Ajax.request({
//                     //     url: tempURL,
//                     //     method : 'PUT',
// 		    // 	params : {
// 		    // 	    user_id: USER_ID,
// 		    // 	    group_id: GROUP_ID,
// 		    // 	    chore_name: chore,
// 		    // 	    chore_frequency: frequency
// 		    // 	},
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
// 	'Ext.List',
//         'Ext.MessageBox'
//     ],
//     config: {
//         title: 'Settings',
// 	id: 'chorePanel',
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
// 			id: 'addToChores',
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
