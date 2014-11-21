
var defaulttasktpl = new Ext.XTemplate(
    '<center>',
        "<tpl>",
            "<div class='myTaskText'> {chore_name} </div>",
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
        layout : 'fit',
        // styleHtmlContent : true, 
        itemTpl : defaulttasktpl,
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                console.log("default here");
            }
        }
    }
});