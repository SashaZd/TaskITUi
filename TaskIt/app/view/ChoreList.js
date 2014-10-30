var userEmail = "brandonchastain@gmail.com";

var chorelisttpl = new Ext.XTemplate(
    "<tpl if='email == \"",userEmail,"\" '>",
        "<tpl if='is_done==true'>",
            "<div class='myTaskTextCompleted'>You are {chore_name}</div>",
        "<tpl else>",
            "<div class='myTaskText'>You are {chore_name} </div>",
        "</tpl>",
    "<tpl else>",
    "<tpl if='is_done'>",
            "<div class='myTaskTextCompleted'>{first_name} : {chore_name}</div>",
        "<tpl else>",
            "<div class='otherTaskText'>{first_name} : {chore_name}</div>",
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
            itemswipe : function(t, index, target, record, e, eOpts){
                console.log(record.data.chore_id);

                if(record.data.email == userEmail){
                    var tempURL = base_URL.concat('chore/',record.data.chore_id,'/');
                    Ext.Ajax.request({
                    type : 'PUT',
                    url: tempURL,
                    success: function(response){
                        console.log(response.responseText);
                        console.log('Done the chore!');
                    }
                });
                }
                else {
                    console.log("Not your chore to do!!");
                }

                
            },

        }
        
    }
    
});
