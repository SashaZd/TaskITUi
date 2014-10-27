Ext.define('TaskIt.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    requires: [
        'Ext.TitleBar',
	'Ext.List',
        'Ext.MessageBox'
    ],
    config: {
        title: 'Settings',
	id: 'chorePanel',
        iconCls: 'list',
        // iconMask : true,
        styleHtmlContent : true,
        items: [
	    {
		xtype:'panel',
		fullscreen: true,
		layout: {
		    type : 'vbox',
		    align: 'center',
		    pack: 'center'
		},
		items: [
		    {
			xtype : 'panel',
			tpl: '<h1> Hello </h1>'
		    },
		    {
			xtype: 'panel',
			items: [
			    {
				xtype: 'button',
				dock: 'bottom',
				text: "Add more"
			    }

			]
			
		    }
		    
		]
		
	    }


        ]
    }
});
