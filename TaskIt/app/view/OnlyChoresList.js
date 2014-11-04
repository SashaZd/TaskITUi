Ext.define('TaskIt.view.OnlyChoresList', {
    extend: 'Ext.List',
    xtype: 'onlyChoresList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'OnlyChores', 
        itemTpl : allChoresTpl,
        iconCls : 'list',
        styleHtmlContent : true,
        styleHtmlCls:'mySemiTransparentList',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data);
            },

        }
        
    }
    
});
