userEmail = 'sasha.azad@gatech.edu';

var tpl = new Ext.XTemplate(
    '<div class="intro"><font size = 3><tpl for=".">', 
        '<tpl for="users">',                // process the data.kids node
            '<tpl switch="email">',
                '<tpl case="',userEmail,'">',
                    '<div style="background-image:url(resources/images/mytaskBkgImg.jpg);padding: 15px;height 30px;width:3000px; background-repeat:no-repeat">You are ',
                    '<tpl for="chores">',
                        '{choreName}',
                    '</tpl></div>',
                '<tpl default>',
                    '<div style="background:url(resources/images/othertaskBkgImg.jpg);padding: 15px;height 30px;width:3000px; background-repeat:no-repeat">',
                     '{firstName} is ',
                     '<tpl for="chores">',
                        '{choreName}',
                '</tpl></div>',
            '</tpl>',
        '</tpl>',                           // process the data.kids node
    '</tpl></font></div>'
);


Ext.define('TaskIt.view.UserList', {
    extend: 'Ext.DataView',
    xtype: 'userList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Roommates',
        styleHtmlContent : true, 
        cls : 'sasha',
        itemTpl : tpl
        
    }
    
});