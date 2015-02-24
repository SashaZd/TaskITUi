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
            align : 'center',
            pack : 'center'
        },
        items: [
            {
                xtype : 'toolbar',
                cls : 'myInAppToolbar',
                title: '<font size=4><b>TaskIt</b></font>',
                docked : 'top',
                items : [
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        ui : 'plain',
                        text: '<font color="white">History</font>',
                        iconCls : 'time',
                        action : 'historyButton'
                    }
                ]
            },
            {
                xtype : 'choreListPanel',
                // flex : 5,
                height : '90%',
                width : '100%',
                styleHtmlContent : true
            },
            {
                xtype : 'panel',
                // flex : 1,
                height : '10%',
                width : "100%",
                layout : {
                    type : 'hbox',
                    align : 'stretch'
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

