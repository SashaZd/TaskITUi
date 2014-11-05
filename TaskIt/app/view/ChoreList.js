Ext.define('TaskIt.view.ChoreList', {
    extend: 'Ext.List',
    xtype: 'choreList',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView',
        'Ext.dataview.List'
    ],
    config: {
        store: 'Chores',
        id : 'myChoreList',
        styleHtmlContent : true, 
        itemTpl : chorelisttpl,
        grouped : true,
        iconCls : 'list',
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                console.log("swiping");
                if(record.data.email == userEmail){
                    var tempURL = base_URL.concat('chore/',record.data.chore_id,'/');
                    Ext.Ajax.request({
                        method : 'PUT',
                        url: tempURL,
                        success: function(response){
                            if(JSON.parse(response.responseText).success){
                                console.log(response.responseText); 
                                TaskIt.app.getController('Login').setChores();   
                            }
                            else {
                                Ext.Msg.alert(
                                    'Oh No!', 
                                    'There seems to be a network error. Try again later.', 
                                    Ext.emptyFn
                                );
                            }
                        }
                    });
                }
                else {
                    console.log("Not your chore to do!!");
                }
            }
        }
    }
    
});
