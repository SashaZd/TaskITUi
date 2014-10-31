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
        iconCls : 'list',
        listeners : {
            itemswipe : function(t, index, target, record, e, eOpts){
                if(record.data.email == userEmail){
                    var tempURL = base_URL.concat('chore/',record.data.chore_id,'/');
                    Ext.Ajax.request({
                        method : 'PUT',
                        url: tempURL,
                        success: function(response){
                            console.log(tempURL);
                            console.log(response.responseText);
                            console.log('Done the chore!');
                        }
                    });

                    
                }
                else {
                    console.log("Not your chore to do!!");
                }

                
            },
            activate : function(){
                


            }
        }
        
    }
    
});
