Ext.define('TaskIt.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Home',
        id : 'homePanel',
        iconCls: 'home',
        style:'background-color:rgba(0,0,0,0);',
        styleHtmlContent : true,
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'stretch'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                cls : 'myInAppToolbar',
                title: '<font size=4><b>TaskIt</b></font>'
            },
            {
                xtype : 'choreListPanel',
                flex : 5,
                width : '98%',
                styleHtmlContent : true
            },
            {
                xtype : 'panel',
                flex : 1,
                width : "98%",
                layout : {
                    type : 'hbox',
                    align : 'center'
                },
                items : [
                    {
                        xtype : 'spacer',
                        width : '1%'
                    },
                    {
                        xtype : 'button',
                        width : '47%',
                        text : '<font size=3>Done All</font>',
                        action : 'doneAllChores',
                        height : 40,
                        handler : function(){
                            // var tempStore=Ext.getStore('Chores');

                           
                        }
                    },
                    {
                        xtype : 'spacer', 
                        width : '4%'
                    },
                    {
                        xtype : 'button',
                        action : 'notAtHomeButton',
                        text : '<font size=3>Not at Home</font>',

                        width : '47%',
                        height : 40,
                        // ui : 'decline',

                    },
                    {
                        xtype : 'spacer',
                        width : '1%'
                    }
                ]
            }
            
        ]
    }
});

