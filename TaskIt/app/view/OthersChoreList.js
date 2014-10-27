var tplOther = new Ext.XTemplate(
    'Ahhhh {first_name}'
    // '<tpl if="email != \'',userEmail,'\'">',
        
    //     '<tpl for = "todays_chores">',
    //         'You are {[this.haveYouPrinted(xcount)]}',
    //     '</tpl>',
    // '</tpl>',

    // {
    //     haveYouPrinted: function(args) {
    //         return args
    //     }
    // }

    // '<center>',      
    //        '<tpl switch="email">',
    //             '<tpl case="',userEmail,'">',
    //                 '',
    //             '<tpl default>',
    //                 '<tpl for="todays_chores">',
    //                     '<div class="otherTaskBackground">',
    //                         '<div class="otherTaskText">',
    //                             '{parent.first_name} is {chore_name} ',
    //                         '</div>',
    //                     '</div>',
    //             '</tpl>'
);


Ext.define('TaskIt.view.OthersChoreList', {
    extend: 'Ext.List',
    xtype: 'othersChoreList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Chores',
        styleHtmlContent : true, 
        // cls : 'intro',
        itemTpl : tplOther,
        listeners : {
            itemtap : function(){
                console.log('Happening');
            }
        }
        
    }
    
});