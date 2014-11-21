Ext.define('TaskIt.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'start',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent : true,
        style:'background-color:black;',
        id : 'startScreen',
        layout : 'card',
        html:'<p>Poleo</p>',
        items: [
            {
                xtype : 'login',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            },
            {
                xtype : 'setup',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            },
            {
                xtype : 'main',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            },
            {
                xtype: 'signup',
                styleHtmlContent : true,
                styleHtmlCls:'myAppBackground'
            }
        ]
    }
});
