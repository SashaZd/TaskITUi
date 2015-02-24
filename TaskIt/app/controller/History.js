Ext.define('TaskIt.controller.History', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            backToHome : 'history button[action=backToHome]',
            historyButton : 'home button[action=historyButton]',
            toggleFilter : 'history segmentedbutton'
        },
        control: {
            toggleFilter : {
                toggle : 'toggleFilter'
            },

            backToHome : {
                tap : 'goBackHome'
            },

            historyButton : {
                tap: 'showHistory'
            },

        }
    },

    toggleFilter : function(container, button, pressed) {
        var buttonToggled = container.getPressedButtons()[0].getText()

        switch(buttonToggled){
            case "By Person":
                profGroupBy = 'HISTORY_GROUPBY_NAME'
                Ext.getStore('History').sort('user_first_name', 'ASC');
                break;
            case "By Date": 
                profGroupBy = 'HISTORY_GROUPBY_DATE'
                Ext.getStore('History').sort('completed_on', 'DESC');
                break;
        }

    },

    goBackHome : function(){
        Ext.getCmp('startScreen').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'up'
        });
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
            "{user_first_name} - {chore_name} - {completed_on:date('d/m/Y')}"
        );

        Ext.getCmp('historyList').setItemTpl(historyTpl);

        Ext.getCmp('startScreen').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });
        Ext.getCmp('startScreen').setActiveItem(4, {type : 'slide', direction:'down', duration:300});
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});