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
        iconCls: 'home',
        style:'background-color:rgba(0,0,0,0);',
        styleHtmlContent : true,
        layout : {
            type : 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '<font size=4><b>TaskIt</b></font>'
            },
            {
                xtype : 'choreListPanel',
                flex : 5,
                styleHtmlContent : true
            },
            {
                xtype : 'panel',
                flex : 1,
                layout : {
                    type : 'hbox',
                    align : 'middle'

                },
                items : [
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        width : '40%',
                        text : '<font size=3>Done All</font>',
                        action : 'doneAllChores',
                        height : 40,
                        handler : function(){
                            // var tempStore=Ext.getStore('Chores');

                           
                        }
                    },
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        text : '<font size=3>Not at Home</font>',

                        width : '40%',
                        height : 40,
                        handler : function(){
                            Ext.Msg.alert(
                                'Uh Oh!', 
                                "Well, we'll getcha tomorrow.", 
                                Ext.emptyFn
                            );
                        }

                        // ui : 'decline',

                    },
                    {
                        xtype : 'spacer'
                    }
                ]
            }
            
        ]
    }
});

