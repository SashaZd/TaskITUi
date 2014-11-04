var showChoreDetails = new Ext.Panel({
    styleHtmlContent : true,
    //floating configs
    left : 0, 
    right : 0, 
    modal : true, 
    hideOnMaskTap : true, 
    width : '90%',
    layout : {
        type : 'vbox'
    },
    defaults : {
        margin : '0 0 5 0'
    },
    items : [
        {
            xtype : 'textfield', 
            label : 'Chore',
            name : 'chore_name',
            disabled : true,
            id : 'showUserDetails_choreName'
        },
        {
            xtype : 'textfield', 
            label : 'Frequency',
            name : 'frequency',
            disabled : true,
            id : 'showUserDetails_frequency'
        },
        {
            xtype : 'button',
            id : 'showUserDetails_DeleteChore',
            text : 'Delete Chore From Group',
            hidden : true
        },
        {
            xtype : 'button',
            text : 'Edit',
            id : 'showUserDetails_EditChore',
            handler : function(button){
                if(button.getText()=="Edit"){
                    Ext.getCmp('showUserDetails_choreName').enable();
                    Ext.getCmp('showUserDetails_frequency').enable();
                    Ext.getCmp('showUserDetails_DeleteChore').show();

                    button.setText("Done");
                }
                else{
                    Ext.getCmp('showUserDetails_choreName').disable();
                    Ext.getCmp('showUserDetails_frequency').disable();
                    Ext.getCmp('showUserDetails_DeleteChore').hide();

                    button.setText("Edit");
                }
            }
        }
    ]
});

Ext.define('TaskIt.view.OnlyChoresList', {
    extend: 'Ext.List',
    xtype: 'onlyChoresList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'OnlyChores', 
        itemTpl : onlyChoresTpl,
        iconCls : 'list',
        styleHtmlContent : true,
        styleHtmlCls:'mySemiTransparentList',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data);

                Ext.getCmp('showUserDetails_choreName').setValue(record.get('chore_name'));
                Ext.getCmp('showUserDetails_frequency').setValue(record.get('frequency'));

                showChoreDetails.showBy(target);
                // setTimeout(function(){t.deselect(index);},1000);
            },

        }
        
    }
    
});
