var userEmail = "brandonchastain@gmail.com";
var myChoreCount = 0;

var tpl = new Ext.XTemplate(
    '<tpl if="email == \"',userEmail,'\" " " >',
        '<tpl for = "todays_chores">',
            'You are {[this.haveYouPrinted(xcount, chore_name)]}',
        '</tpl>',
    '</tpl>',

    {
        disableFormats: true,
        haveYouPrinted: function(count, cname) {
            if(count > myChoreCount){
                myChoreCount = myChoreCount+1;
                return cname
            }
            else {
                return "Hello"
            }
        }
    }

    // '<center>',      
    //        '<tpl switch="email">',
    //             '<tpl case="',userEmail,'">',
    //                '<tpl for="todays_chores">',
    //                     '<tpl if="is_done">',
    //                         '',
    //                     '<tpl else>',
    //                         '<div class="myTaskBackground">',
    //                            '<div class="myTaskText">',
    //                                 // 'You are {chore_name}',
    //                                 '{[this.haveYouPrinted()]} is {chore_name}',
    //                              '</div>',
    //                         '</div>',    
    //                     '</tpl>',
    //                 '</tpl>',
    //         '</tpl>',
    // '</center>',
    // {
    //     // XTemplate configuration:
    //     haveYouPrinted: function(){
    //        return 'Sara Grace';
    //     },
    //     isBaby: function(age){
    //        return age < 1;
    //     }
    // }
    
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
        // cls : 'intro',
        itemTpl : tpl,
        listeners : {
            itemtap : function(){
                console.log('Happening');
            }
        }
        
    }
    
});