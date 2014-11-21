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
            id : 'showChoreDetails_choreName'
        },
        {
            xtype: 'selectfield',
            label : 'Frequency',
            name : 'frequency',
            disabled : true,
            id : 'showChoreDetails_frequency',
            hidden : false,
            options: [
                {text: 'Daily',  value: 'd'},
                {text: 'Weekly', value: 'w'},
                {text: 'Monthly',  value: 'm'}
            ]
        },
        {
            xtype : 'textfield', 
            label : 'chore_id',
            name : 'chore_id',
            disabled : true,
            id : 'showChoreDetails_choreId',
            hidden : true
        },
        {
            xtype : 'button',
            id : 'showChoreDetails_DeleteChore',
            text : 'Delete Chore From Group',
            hidden : true,
            handler : function(){
                var passChoreId = Ext.getCmp('showChoreDetails_choreId').getValue();
                TaskIt.app.getController('Settings').deleteChoreFromGroup(this, passChoreId);
            }
        },
        {
            xtype : 'button',
            text : 'Edit',
            id : 'showUserDetails_EditChore',
            handler : function(button){
                if(button.getText()=="Edit"){
                    Ext.getCmp('showChoreDetails_choreName').enable();
                    Ext.getCmp('showChoreDetails_frequency').enable();
                    Ext.getCmp('showChoreDetails_DeleteChore').show();
                    button.setText("Done");
                }
                else{
                    var tempChoreId = Ext.getCmp('showChoreDetails_choreId').getValue();
                    var tempURL = base_URL.concat('chore/', tempChoreId, '/edit/')

                    Ext.Ajax.request({
                        method : 'POST',
                        url: tempURL,
                        params: {
                            chore_name: Ext.getCmp('showChoreDetails_choreName').getValue(), 
                            frequency: Ext.getCmp('showChoreDetails_frequency').getValue()
                        },
                        success: function(response){  
                            var r = JSON.parse(response.responseText);
                            if(r.success==true){
                                console.log("Editted Chore");
                                setTimeout(function() {TaskIt.app.getController('Login').doAllGroupIDFunctions();},1000);
                            }
                        }
                    });
                    Ext.getCmp('showChoreDetails_choreName').disable();
                    Ext.getCmp('showChoreDetails_frequency').disable();
                    Ext.getCmp('showChoreDetails_DeleteChore').hide();
                    button.setText("Edit");
                    TaskIt.app.getController('Login').doAllGroupIDFunctions();
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
        'Ext.dataview.List',
        'Ext.field.Select'
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

                Ext.getCmp('showChoreDetails_choreName').setValue(record.get('chore_name'));
                Ext.getCmp('showChoreDetails_frequency').setValue(record.get('frequency'));
                Ext.getCmp('showChoreDetails_choreId').setValue(record.get('chore_id'));

                showChoreDetails.showBy(target);
                setTimeout(function(){t.deselect(index);},1000);
            },

        }
        
    }
    
});
