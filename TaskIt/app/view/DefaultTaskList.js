
var defaulttasktpl = new Ext.XTemplate(
    '<center>',
    // "<tpl if='is_done==true'>",
            // "<div class='taskTextCompleted'>{default_item}</div>",
        "<tpl>",
            "<div class='myTaskText'> {chore_item} </div>",
        "</tpl>",   
    '<center>'
);


Ext.define('TaskIt.view.DefaultTaskList', {
    extend: 'Ext.List',
    xtype: 'defaultTaskList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        title : 'DefaultTasks',
        iconCls : 'list',
        store: 'OnlyChores',
        // styleHtmlContent : true, 
        itemTpl : defaulttasktpl,
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                console.log("default here");    

            //        var tempURL = base_URL.concat('grocery/',record.data.id,'/');
            //         Ext.Ajax.request({
            //         method : 'PUT',
            //         url: tempURL,
            //         success: function(response){
            //             console.log(response.responseText);
            //             console.log('Done the grocery!');

                    // },
                // }); 
            }
        }
    }
});