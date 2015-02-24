Ext.define('TaskIt.view.History', {
    extend: 'Ext.Panel',
    xtype: 'history',
    id : 'history',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        width : '100%',
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'stretch'
        },
        items: [
            {
                xtype : 'toolbar',
                title : '<font size=4><b>History</b></font>',
                cls : 'myInAppToolbar',
                docked : 'top',
                items : [
                    {
                        xtype : 'button',
                        ui : 'plain',
                        iconCls : 'home',
                        // text : '<font color="white">Back</font>',
                        action: 'backToHome'
                    }
                ]
            },
            {
                xtype : 'container',
                height : 50,
                items : [
                    {
                        xtype : 'segmentedbutton',
                        centered : true,
                        items : [
                            {
                                text : 'By Person',
                                pressed : true
                            },
                            {
                                text : 'By Date'
                            }
                        ]
                    }
                ]
            },
            {
                xtype : 'list',
                id : 'historyList',
                flex : 1,
                width : '100%',
                // height : '90%',
                style:'background-color:rgba(0,0,0,0);',
                styleHtmlCls:'mySemiTransparentList',
                styleHtmlContent : true,
                // itemTpl : 'Hello',
                store : 'History',
                grouped : true
            }
        ]
    }
});
