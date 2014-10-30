var userEmail = "brandonchastain@gmail.com";

var chorelisttpl = new Ext.XTemplate(
    "<tpl if='email == \"",userEmail,"\" '>",
        "<h1>You are {chore_name} </h1>",
    "<tpl else>",
    "<h1>{first_name} is {chore_name}</h1>",
    "</tpl>"
);


Ext.define('TaskIt.view.ChoreList', {
    extend: 'Ext.List',
    xtype: 'choreList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Chores',
        styleHtmlContent : true, 
        itemTpl : chorelisttpl,
        iconCls : 'list',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
            console.log(record.data);
            },

        }
        
    }
    
});
