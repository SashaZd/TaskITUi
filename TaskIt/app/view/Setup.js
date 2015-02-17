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
                    width : '98%'
                },
        items: [
            {
                xtype: 'titlebar',
                cls : 'myInAppToolbar',
                docked: 'top',
                width:'100%',
                title: '<font size=4><b>Setup Group</b></font>',
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
                },

                items : [
                    {
                        xtype : 'panel',
                        height : 15
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
                        cls : 'myInAppToolbar',
                        flex : 1,
                        styleHtmlContent : true,
                        title: '<font size=4 color="white">Group Members</font>',
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
                        items : [
                             {
                                xtype : 'roommatesList',
                                // flex : 3,
                                id : 'setup_roommatesList',
                                height : '100%',
                                style:'background-color:rgba(0,0,0,0);',
                                styleHtmlCls:'mySemiTransparentList',
                                styleHtmlContent : true

                              },
                        ]
        
                    },
                    {
                        xtype :'toolbar',
                        cls : 'myInAppToolbar',
                        flex : 1,
                        styleHtmlContent : true,
                        title: '<font size=4 color="white">Group Chores</font>',
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
                        items : [
                            {
                                xtype : 'onlyChoresList',
                                id : 'setup_onlyChoresList',
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
                                text : '<font size=4><b>Finish & Login</b></font>',
                                height : 50,
                                width : '100%',
                                centered : true,
                                styleHtmlContent : true,
                                id : 'SetupFinish',
                                handler : function(){
                                    console.log(GROUP_ID);
                                    TaskIt.app.getController('Login').doAllGroupIDFunctions();
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
                    },
                    {
                        xtype : 'panel',
                        height : 10
                    }
                ]
            }

        ]
    }
});
