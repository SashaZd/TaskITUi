
Ext.define('TaskIt.controller.MainTabs', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainTabs : 'main'
        },
        control: {
            main : {
                activeitemchange : 'checkWhichPanel'
            }
        }
    },

    checkWhichPanel: function(tabPanel, tab, oldTab){
        
        if(tab.getId() == 'settingsPanel'){
            this.settingsPanelFns();
        }
    },

    settingsPanelFns: function(){
        groupSettingsTpl.overwrite(Ext.getCmp('householdDetails').element, Ext.getStore('Settings').getData().all[0].raw);
        
        Ext.getStore('Roommates').setData(Ext.getStore('Settings').getData().all[0].raw.users);
        console.log('Settings Panel is active');



    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
