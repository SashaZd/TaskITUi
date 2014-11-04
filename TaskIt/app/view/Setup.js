var mytemp;

Ext.define('TaskIt.view.Setup', {
    extend: 'Ext.Panel',
    xtype: 'setup',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.MessageBox'
    ],
    config: {
        style:'background-color: white; background-image:radial-gradient(circle at top left,rgba(176,18,60,0.5),rgba(255,255,255,0)),radial-gradient(circle at top right,rgba(247,159,16,0.5),rgba(255,255,255,0)),radial-gradient(circle at bottom right,rgba(73,173,2,0.5),rgba(255,255,255,0)),radial-gradient(circle at bottom left,rgba(24,84,162,0.5),rgba(255,255,255,0));',
        styleHtmlContent : true,
          
        // scrollable : true,
        listeners : {
            show : function(){
                Ext.getCmp('setup_groupname').setValue(Ext.getCmp('signup_groupname').getValue());
            }
        },
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
                docked: 'top',
                width:'100%',
                title: '<font size=3>Setup the Group</font>'
            },
            {
                xtype : 'panel',
                flex : 1,
                id : 'addMembersAndChoresPanel',
                height : '40%',
                layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
                defaults : {
                    width : '100%',
                    margin : '5 5 5 5'
                },

                items : [
                    {
                        xtype : 'panel',
                        flex : 1
                    },
                    {
                        xtype : 'textfield',
                        label : '<p color=black>Group Name</p>',
                        labelWidth : '1',
                        id : 'setup_groupname',
                        disabled : true,
                        flex : 1
                    },
                    {
                        xtype :'toolbar',
                        flex : 1,
                        styleHtmlContent : true,
                        style:'background-color:rgba(0,0,0,0);',
                        styleHtmlCls:'myInAppToolbar',
                        title : '<h3> Group Members </h3>',
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                id : 'addGroupMembersButton',
                                action : 'addGroupMembers',
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4,
                        // height : '40%',
                        items : [
                             {
                                xtype : 'defaultTaskList',
                                // flex : 3,
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0);',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true

                              },
                        ]
        
                    },
                    {
                        xtype : 'toolbar',
                        styleHtmlContent : true,
                        style:'background-color:rgba(0,0,0,0);',
                        styleHtmlCls:'myInAppToolbar',
                        title : '<h3>Group Chores</h3>',
                        flex : 1,
                        items : [
                            {
                                xtype : 'button',
                                iconCls : 'add',
                                id : 'addGroupChoresButton',
                                action : 'addGroupChores'
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 4,
                        style:'background-color:rgba(0,0,0,0);',
                        styleHtmlCls:'mySemiTransparentList',
                        items : [
                            {
                                xtype : 'defaultTaskList',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0);',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true  
                            }
                        ]
                    },
                    {
                        xtype : 'panel',
                        flex : 1,
                        items : [
                            {
                                xtype : 'button',
                                text : 'Finish',
                                styleHtmlContent : true,
                                id : 'SetupFinish',
                                handler : function(){
                                    // TaskIt.app.getController('Login').doLogin();
                                    TaskIt.app.getController('Login').setChores();
                                    TaskIt.app.getController('Login').setGroceryStore();
                                    setTimeout(function() {
                                        Ext.getCmp('startScreen').getLayout().setAnimation({
                                            type: 'slide',
                                            duration: 300,
                                            reverse: true,
                                            direction:'right'
                                        });
                                        Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'right'});
                                    });
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    }
});
