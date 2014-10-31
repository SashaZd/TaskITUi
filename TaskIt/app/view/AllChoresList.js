var allChoresTpl = new Ext.XTemplate(
    "<tpl if='email == \"brandonchastain@gmail.com\" '>",
        "{first_name}",
    "</tpl>"
);


Ext.define('TaskIt.view.AllChoresList', {
    extend: 'Ext.List',
    xtype: 'allChoresList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'OnlyChores', 
        itemTpl : allChoresTpl,
        iconCls : 'list',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data);
            },

        }
        
    }
    
});
