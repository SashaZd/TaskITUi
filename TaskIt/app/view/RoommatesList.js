Ext.define('TaskIt.view.RoommatesList', {
    extend: 'Ext.List',
    xtype: 'roommatesList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Roommates',
        styleHtmlContent : true,
        itemTpl : roommatesTpl,
        iconCls : 'list',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data)
            }

        }
        
    }
    
});