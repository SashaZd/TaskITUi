var userEmail='';
var myChoreStore={};
var myGroceryStore={};
var myVar;
var GROUP_ID;
var chorelisttpl, onlyChoresTpl, grocerytpl, roommatesTpl, facebookTpl, historyTpl;
var base_URL='http://api.task-it.me/api/';
var settingsStore_URL, onlyChoresStore_URL, groceriesStore_URL, historyStore_URL;
var GroupFlag= false;

/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'TaskIt',

    requires: [
        'Ext.MessageBox'
    ],

    controllers : [
        'Login', 'Signup', 'MainTabs', 'Settings', 'Groceries', 'Chores', 'History'
    ],

    models : [
        'Roommate', 'Chore','GroceryItem', 'Setting', 'OnlyChore', 'HistoryItem'
    ],

    stores : [

        'Roommates','Chores','Groceries', 'Settings', 'OnlyChores', 'History'
    ],

    views: [
        'Main', 'Settings', 'Home', 'Groceries', 'ChoreList', 'ChoreListPanel', 'GroceryList', 'Start', 'Login', 'Setup', 'Signup', 'RoommatesList', 'OnlyChoresList', 'DefaultTaskList', 'History'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        //This will need to be changed if we're using PhoneGap
        // '320x460': 'resources/startup/320x460.jpg',
        // '640x920': 'resources/startup/640x920.png',
        // '768x1004': 'resources/startup/768x1004.png',
        // '748x1024': 'resources/startup/748x1024.png',
        // '1536x2008': 'resources/startup/1536x2008.png',
        // '1496x2048': 'resources/startup/1496x2048.png'
        // '1280x800': 'resources/startup/SplashImage.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        //fix for box not dismissing
        Ext.Msg.defaultAllowedConfig.showAnimation = false;
        
        // Initialize the main view
        Ext.Viewport.add(Ext.create('TaskIt.view.Start'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
