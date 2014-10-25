var userEmail = 'brandonchastain@abc.com';

var tpl = new Ext.XTemplate(
    '<center>',      
           '<tpl switch="email">',
                '<tpl case="',userEmail,'">',
                   '<tpl for="todays_chores">',
                        '<tpl if="is_done">',
                            '',
                        '<tpl else>',
                            '<div class="myTaskBackground">',
                               '<div class="myTaskText">',
                                    'You are {chore_name}',
                                 '</div>',
                            '</div>',    
                        '</tpl>',
                    '</tpl>',
                        
                '<tpl default>',
                        
                            '<tpl for="todays_chores">',
                    '<div class="otherTaskBackground">',
                        '<div class="otherTaskText">',
                            '{parent.first_name} is {chore_name} ',
                        '</div>',
                    '</div>',
                '</tpl>',
            '</tpl>',
    '</center>',
    {
        // XTemplate configuration:
        haveYouPrinted: function(name){
           return name == 'Sara Grace';
        },
        isBaby: function(age){
           return age < 1;
        }
    }
    
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