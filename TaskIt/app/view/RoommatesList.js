var showDetails = new Ext.Panel({
    styleHtmlContent : true,
    //floating configs
    left : 0, 
    right : 0, 
    modal : true, 
    hideOnMaskTap : true, 
    width : '90%',
    // height : '30%',

    layout : {
        type : 'vbox'
    },
    defaults : {
        margin : '0 0 5 0'
    },
    items : [
        {
            xtype : 'textfield', 
            label : 'First Name',
            name : 'first_name',
            disabled : true,
            id : 'showUserDetails_firstName'
        },
        {
            xtype : 'textfield', 
            label : 'Last Name',
            name : 'last_name',
            disabled : true,
            id : 'showUserDetails_lastName'
        },
        {
            xtype : 'textfield', 
            label : 'Email',
            name : 'email',
            disabled : true,
            id : 'showUserDetails_email'
        },
        {
            xtype : 'button',
            id : 'showUserDetails_Leave',
            text : 'Leave This Group',
            hidden : true
        },
        {
            xtype : 'button',
            text : 'Edit',
            id : 'showUserDetails_Edit',
            hidden : true,
            handler : function(button){
                if(button.getText()=="Edit"){
                    Ext.getCmp('showUserDetails_firstName').enable();
                    Ext.getCmp('showUserDetails_lastName').enable();
                    Ext.getCmp('showUserDetails_email').enable();
                    Ext.getCmp('showUserDetails_Leave').show();

                    button.setText("Done");
                }
                else{
                    var tempURL = base_URL.concat('user/',USER_ID.toString(), '/edit/');
                    console.log(tempURL);

                    Ext.Ajax.request({
                        method : 'POST',
                        url: tempURL,
                        params: {
                            email : Ext.getCmp('showUserDetails_email').getValue(),
                            first_name: Ext.getCmp('showUserDetails_firstName').getValue(),
                            last_name: Ext.getCmp('showUserDetails_lastName').getValue()
                        },
                        success: function(response){  
                            var r = JSON.parse(response.responseText);
                            if(r.success==true){
                                console.log("Editted User");
                                button.setText("Edit");

                                TaskIt.app.getController('Login').doAllGroupIDFunctions();
                                Ext.getCmp('showUserDetails_firstName').disable();
                                Ext.getCmp('showUserDetails_lastName').disable();
                                Ext.getCmp('showUserDetails_email').disable();
                                Ext.getCmp('showUserDetails_Leave').hide();

                            }
                        }
                    });
                    setTimeout(function() {TaskIt.app.getController('Login').doAllGroupIDFunctions();},1000);



                    
                }
            }
        }
    ]
});
Ext.define('TaskIt.view.RoommatesList', {
    extend: 'Ext.List',
    xtype: 'roommatesList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Roommates',
        styleHtmlContent : true,
        itemTpl : roommatesTpl,
        iconCls : 'list',
        listeners : {
            itemtap : function(t, index, target, record, e, eOpts){
                console.log(record.data);

                Ext.getCmp('showUserDetails_firstName').setValue(record.get('first_name'));
                Ext.getCmp('showUserDetails_lastName').setValue(record.get('last_name'));
                Ext.getCmp('showUserDetails_email').setValue(record.get('email'));

                if(record.get('email') == userEmail){
                    Ext.getCmp('showUserDetails_Edit').show();
                }

                showDetails.showBy(target);
                setTimeout(function(){t.deselect(index);},1000);

            }

        }
        
    }
    
});