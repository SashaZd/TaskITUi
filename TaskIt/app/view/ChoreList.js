var userEmail = "brandonchastain@gmail.com";

var chorelisttpl = new Ext.XTemplate(
    "<tpl if='email == \"",userEmail,"\" '>",
        "<tpl if='is_done'>",
            "<font color='green'>COMPLETED : {chore_name}</font>",
        "<tpl else>",
            "<div class='myTaskText'>You are {chore_name} </div>",
        "</tpl>",
    "<tpl else>",
    "<tpl if='is_done'>",
            "<font color='green'>{first_name} has finished {chore_name}</font>",
        "<tpl else>",
            "<div class='otherTaskText'>{first_name} is {chore_name}</div>",
        "</tpl>",
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
