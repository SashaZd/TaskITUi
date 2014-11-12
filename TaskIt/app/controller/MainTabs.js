
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

        if(tab.getId() == 'homePanel'){
            this.homePanelFns();
        }
    },

    settingsPanelFns: function(){
        
        //Loading Roommates Store
        TaskIt.app.getController('Login').doAllGroupIDFunctions();

    },

    homePanelFns: function(){
        
        //Loading Roommates Store
        TaskIt.app.getController('Login').doAllGroupIDFunctions();

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
