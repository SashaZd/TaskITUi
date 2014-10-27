var userEmail = "brandonchastain@gmail.com";
var myChoreCount = 0;

var myChoreStore = Ext.create('TaskIt.store.Chores');
myChoreStore.filter('email', "brandonchastain@gmail.com");

var tpl = new Ext.XTemplate(
    "<tpl if='email == \"brandonchastain@gmail.com\" '>",
        "{first_name}",
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
        store: myChoreStore,
        styleHtmlContent : true, 
        itemTpl : tpl,
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data);
            },

        }
        
    }
    
});
