Ext.define('TaskIt.controller.History', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            backToHome : 'history button[action=backToHome]',
            historyButton : 'home button[action=historyButton]'
        },
        control: {
            backToHome : {
                tap : 'goBackHome'
            },

            historyButton : {
                tap: 'showHistory'
            },

        }
    },

    goBackHome : function(){
        Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'up', duration:300});
    },

    showHistory : function(argument) {
        console.log("showing history")

        //For History Store
        historyStore_URL = base_URL.concat('group/',GROUP_ID.toString(),'/history/');
        Ext.getStore('History').getProxy().setUrl(historyStore_URL);
        Ext.getStore('History').load();

        //History for Group
        historyTpl = new Ext.XTemplate(
            "{user_first_name} - {chore_name} - {completed_on}"
        );
        Ext.getCmp('historyList').setItemTpl(historyTpl);

        Ext.getCmp('startScreen').setActiveItem(4, {type : 'slide', direction:'up', duration:300});
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});