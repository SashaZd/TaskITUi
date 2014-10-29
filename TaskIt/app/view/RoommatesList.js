
var roommatesTpl = new Ext.XTemplate(
    'Hello {first_name}'
);


Ext.define('TaskIt.view.RoommatesList', {
    extend: 'Ext.List',
    xtype: 'roommatesList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Roommmates',
        styleHtmlContent : true, 
        itemTpl : roommatesTpl,
        id : 'roommatesListId'
        // listeners : {
        //     itemtap : function(t, index, target, record, e, eOpts){
        //         console.log(record.data);
        //     },

        // }
        
    }
    
});
