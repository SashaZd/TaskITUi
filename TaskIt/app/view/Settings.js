var groupSettingsTpl = new Ext.XTemplate(
    '<h2>Group Joined : <b>{group_name}</b></h2>'
)

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
        id: 'settingsPanel',
        style:'background-color:rgba(0,0,0,0);',
        iconCls: 'settings',
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        defaults : {
            width : '90%'
        },
        items: [
            {
                xtype: 'titlebar',
                width:'100%',
                docked: 'top',
                title: '<font size=3>Settings</font>'
            },
            {
                xtype : 'panel',
                id : 'settingsElements',
                flex : 1,
                height : '40%',
                layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
                defaults : {
                    width : '90%',
                    margin : '5 5 5 5'
                },
                items : [
                    {
                        xtype : 'panel',
                        flex : 1
                    },
                    {
                        xtype : 'panel',
                        flex : 1,
                        layout : 'fit',
                        id : 'householdDetails',
                        styleHtmlContent : true,
                        tpl : groupSettingsTpl
                    },
                    {
                        xtype :'toolbar',
                        flex : 1,
                        style:'background-color:rgba(0,0,0,0)',
                        styleHtmlCls:'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3> Group Members </h3>',
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                action : 'addGroupMembers',
                                id : 'settings_addGroupMembers'
                            }
                        ]
                    },
                //will insert the new member form here from settings controller
                    {
                        xtype : 'panel',
                        flex : 4,
                        items : [
                            {  
                                xtype : 'roommatesList',
                                layout : 'fit',
                                id : 'settings_roommatesList',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0)',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true
                            }
                        ]
        
                    },
                    {
                        xtype : 'toolbar',
                        style:'background-color:rgba(0,0,0,0)',
                        styleHtmlCls:'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3>Group Chores</h3>',
                        flex : 1,
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                action : 'addGroupChores',
                                id : 'settings_addGroupChores'
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4, 
                        items : [
                            {
                                xtype : 'onlyChoresList',
                                id : 'onlyChoresList',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0)',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 1
                    }
                ]
            }   
        ]
    }
});
