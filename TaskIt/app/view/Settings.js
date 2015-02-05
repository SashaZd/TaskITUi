var groupSettingsTpl = new Ext.XTemplate(
    '<h2>Group Joined : <b>{group_name}</b></h2>'
)

Ext.define('TaskIt.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    requires: [
        'Ext.TitleBar',
        'Ext.List',
        'Ext.MessageBox',
        'Ext.field.DatePicker',
        'Ext.field.Toggle'
    ],
    config: {
        title: 'Settings',
        id: 'settingsPanel',
        style:'background-color:rgba(0,0,0,0);',
        iconCls: 'settings',
        layout : {
            type : 'vbox',
            align : 'stretch',
            pack : 'center'
        },
        defaults : {
            // width : '90%'
        },
        items: [
            {
                xtype: 'titlebar',
                cls : 'myInAppToolbar',
                width:'100%',
                docked: 'top',
                // ui : 'plain',
                title: '<font size=4><b>Settings</b></font>',
                items : [
                    {
                        xtype : 'button',
                        ui : 'plain',
                        iconCls : 'power',
                        // text : '<font color="white">Logout</font>',
                        handler : function(){
                            TaskIt.app.getController('Settings').logout();
                        }
                    }
                ]
            },
            {
                xtype : 'panel',
                id : 'settingsElements',
                flex : 1,
                // height : '40%',
                layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
                defaults : {
                    width : '99%',
                    // margin : '5 5 5 5'
                },
                items : [
                    // {
                    //     xtype : 'panel',
                    //     flex : 1
                    // },
                    {
                        xtype : 'panel',
                        // flex : 1,
                        layout : 'fit',
                        id : 'householdDetails',
                        styleHtmlContent : true,
                        tpl : groupSettingsTpl
                    },
                    {
                        xtype : 'panel',
                        layout : 'fit',
                        // pack : 'end',
                        items : [
                            {
                                xtype : 'togglefield',
                                name : 'vacation',
                                labelWidth : '85%',
                                label : 'On Vacation?',
                                listeners : {
                                    change : function(toggle, newValue, oldValue, eOpts) {
                                        if(newValue == 1){
                                            Ext.getCmp('startVacationDate').show();
                                            Ext.getCmp('endVacationDate').show();
                                        }
                                        else{
                                            Ext.getCmp('startVacationDate').hide();
                                            Ext.getCmp('endVacationDate').hide();
                                        }
                                    }
                                }
                            },
                            {
                                xtype : 'panel',
                                layout : {
                                    type : 'hbox'
                                },
                                items : [
                                    {
                                        xtype : 'datepickerfield',
                                        label : 'Start',
                                        flex : 1,
                                        id : 'startVacationDate',
                                        hidden : true,
                                        value : new Date()
                                    },
                                    {
                                        xtype : 'datepickerfield',
                                        label : 'End',
                                        flex : 1,
                                        id : 'endVacationDate',
                                        hidden : true,
                                        value : new Date()
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype :'titlebar',
                        cls : 'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3>Group Members</h3>',
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
                        cls : 'myInAppToolbar',
                        styleHtmlContent : true,
                        title : '<h3><b>Group Chores</b></h3>',
                        // flex : 1,
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
                        xtype : 'spacer',
                        height : '2%'
                    }
                ]
            }   
        ]
    }
});
