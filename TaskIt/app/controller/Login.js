var USER_ID;
Ext.define('TaskIt.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginButton : 'login button[action=doLogin]',
            signUpButton: 'login button[action=goToSignUp]'
        },
        control: {
            loginButton : {
                tap : 'doLogin'
            },
            signUpButton: {
                tap: 'goToSignUp'
            }
        }
    },

    newUserAlreadyCreated : function(t, testVar){
        Ext.Msg.confirm(
            'Welcome to TaskIt',
            "This Email ID has not been used with TaskIt before. Please set up your user account to continue.",
            function(button){
                if(button=='yes'){
                    GroupFlag=true;
                    Ext.getCmp('startScreen').getLayout().setAnimation({
                        type: 'slide',
                        duration: 300,
                        reverse: true,
                        direction:'right'
                    });
                    Ext.getCmp('signup_email').setValue(testVar.email);

                    Ext.Ajax.request({
                        method: 'GET',
                        url: base_URL.concat('group/',testVar.group_ids[0],'/'),
                        success: function(response){
                                Ext.getCmp('signup_groupname').setValue(JSON.parse(response.responseText).group_name);
                            }

                    });
                    Ext.getCmp('startScreen').setActiveItem(3, {type : 'slide', direction:'right'});
                }
        });
    },


    doLogin : function(){

        userEmail = Ext.getCmp('loginEmail').getValue();

        Ext.Ajax.request({
            type : 'POST',
            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/login/',
            params: {
                email : userEmail
            },
            // withCredentials : true,
            useDefaultXhrHeader: false,
            success: function(response){
                console.log(response.responseText);
                var testVar= JSON.parse(response.responseText);
                USER_ID = testVar.user_id;
                if (JSON.parse(response.responseText).email){       //existing user
                    if(JSON.parse(response.responseText).first_name=='Unverified'){     //first time login

                        TaskIt.app.getController('Login').newUserAlreadyCreated(this, testVar);
                        return;

                    } //transition to setup screen

                    var tempGroupID = JSON.parse(response.responseText).group_ids;      //check if belongs to a group

                    if (tempGroupID.length == 0){       //doesn't belong to a group yet

                        Ext.Msg.alert(
                            'Not in a Group',
                            'You are not currently a member of any group. Set up a new group or join an existing group to continue.',
                            Ext.emptyFn()
                        );

                        // GroupFlag=true;

                        Ext.getCmp('signup_email').setValue(testVar.email);
                        Ext.getCmp('signup_firstname').setValue(testVar.first_name);
                        Ext.getCmp('signup_lastname').setValue(testVar.last_name);

                        //Allow change only after login
                        Ext.getCmp('signup_email').disable();
                        Ext.getCmp('signup_firstname').disable();
                        Ext.getCmp('signup_lastname').disable();

                        Ext.getCmp('startScreen').setActiveItem(3, {type : 'slide', direction:'right'});
                    }

                    else {                  //belongs to a group, logging in now

                        GROUP_ID =  tempGroupID[0]; //Need to change once the server passes us the Group_IDs the User Belongs To
                        TaskIt.app.getController('Login').doAllGroupIDFunctions();
                        setTimeout(function() {
                            Ext.getCmp('startScreen').getLayout().setAnimation({
                                type: 'slide',
                                duration: 300,
                                reverse: true,
                                direction:'right'
                            });
                            Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'right'});

                        });
                    }

                }

                else {
                    Ext.Msg.alert(
                        'Incorrect Email/Password',
                        'This user was not found. Please check the entered Email/Password.',
                        Ext.emptyFn()
                    );
                }
            }
        });
    },

    doAllGroupIDFunctions : function(){
        // console.log("inside do all group id functions");

             setInterval(function() {
                  this.setChores();
                }, 300000);

        this.setChores();
        this.setAllTpls();
        this.setAllURLs();
    },

    setAllURLs: function(){

        console.log("inside do all group id functions", GROUP_ID);
        //Resets all the URLs for the Stores that depend on Group IDs

        //For Settings Store
        settingsStore_URL = base_URL.concat('group/',GROUP_ID,'/');
        // console.log("Settings URL Updated :: ", settingsStore_URL);
        Ext.getStore('Settings').getProxy().setUrl(settingsStore_URL);
        Ext.getStore('Settings').load();

        //For OnlyChores Store
        onlyChoresStore_URL = base_URL.concat('group/',GROUP_ID.toString(),'/chore/');
        Ext.getStore('OnlyChores').getProxy().setUrl(onlyChoresStore_URL);
        Ext.getStore('OnlyChores').load();

        //For Roommates Store
        // Ext.getStore('OnlyChores').load();
        this.loadRoommatesStore();

        //For Groceries Store
        groceriesStore_URL = base_URL.concat('group/',GROUP_ID.toString(),'/grocery/');
        Ext.getStore('Groceries').getProxy().setUrl(groceriesStore_URL);
        Ext.getStore('Groceries').load();

    },

    loadRoommatesStore : function(){
        if(Ext.getStore('Settings').getData().all.length>0){

            Ext.getStore('Roommates').setData(Ext.getStore('Settings').getData().all[0].raw.users);
            groupSettingsTpl.overwrite(Ext.getCmp('householdDetails').element, Ext.getStore('Settings').getData().all[0].raw);

        }
    },

    setAllTpls: function(){

        //Roommates for Settings
        roommatesTpl = new Ext.XTemplate(
            '<tpl if="first_name==\'Unverified\' || first_name==\'\'">',
                '<tpl if="email==\'',userEmail,'\'">',
                    '<div class="myTaskText">Invited: {email}</div>',
                '<tpl else>',
                    '<div class="otherTaskText">Invited: {email}</div>',
                '</tpl>',
            '<tpl else>',
                '<tpl if="email==\'',userEmail,'\'">',
                    '<div class="myTaskText">{first_name} {last_name}</div>',
                '<tpl else>',
                    '<div class="otherTaskText">{first_name} {last_name}</div>',
                '</tpl>',
            '</tpl>'
        );

        Ext.getCmp('settings_roommatesList').setItemTpl(roommatesTpl);
        Ext.getCmp('setup_roommatesList').setItemTpl(roommatesTpl);

        //Chores List for Settings
            onlyChoresTpl = new Ext.XTemplate(
                "<table width='100%'>",
                    "<tr width='100%'>",
                        "<td class='alignleft'>{chore_name}</td>",
                        "<td class='alignright'>{frequency}</td>",
                    "</tr>",
                "</table>"
            );

            Ext.getCmp('onlyChoresList').setItemTpl(onlyChoresTpl);
            Ext.getCmp('setup_onlyChoresList').setItemTpl(onlyChoresTpl);

        //Daily Chores List for Home Screen
            chorelisttpl = new Ext.XTemplate(
                "<tpl if='email == \"",userEmail,"\" '>",
                    "<tpl if='is_done==true'>",
                        "<div class='taskTextCompleted'>{chore_name}</div>",
                    "<tpl else>",
                        "<div class='myTaskText'>{chore_name} </div>",
                    "</tpl>",
                "<tpl else>",
                "<tpl if='is_done==true'>",
                        "<div class='taskTextCompleted'>{first_name}: {chore_name}</div>",
                    "<tpl else>",
                        "<div class='otherTaskText'>{first_name}: {chore_name}</div>",
                    "</tpl>",
                "</tpl>"
            );

            Ext.getCmp('myChoreList').setItemTpl(chorelisttpl);

        //Grocery List for the Group
            grocerytpl = new Ext.XTemplate(
                '<center>',
                "<tpl if='is_done==true'>",
                        "<div class='taskTextCompleted'>{name}</div>",
                    "<tpl else>",
                        "<div class='myTaskText'>{name}</div>",
                    "</tpl>",
                '<center>'
            );

            Ext.getCmp('myGroceryList').setItemTpl(grocerytpl);
    },

    goToSignUp: function() {
        var email = Ext.getCmp('loginEmail').getValue();
        setTimeout(function() {
            Ext.getCmp('startScreen').getLayout().setAnimation({
                type: 'slide',
                duration: 300,
                reverse: true,
                direction:'right'
            });
            Ext.getCmp('startScreen').setActiveItem(3, {type : 'slide', direction:'right'});
        });
    },

    setChores: function(){
        var tempURL = base_URL.concat('group/', GROUP_ID.toString(), '/');
        console.log(tempURL);
        Ext.Ajax.request({
            method : 'GET',
            url: tempURL,
            success: function(response){
                myVar = JSON.parse(response.responseText);
                // console.log(myVar);
                var x=0;
                for (var i = 0; i< myVar.users.length; i++) {
                    for(var j=0; j<myVar.users[i].todays_chores.length; j++) {

                        myChoreStore[x]={};
                        myChoreStore[x].chore_name = myVar.users[i].todays_chores[j].chore_name;
                        myChoreStore[x].chore_id = myVar.users[i].todays_chores[j].chore_id;
                        myChoreStore[x].is_done = myVar.users[i].todays_chores[j].is_done;
                        myChoreStore[x].first_name = myVar.users[i].first_name;
                        myChoreStore[x].last_name = myVar.users[i].last_name;
                        myChoreStore[x].email = myVar.users[i].email;
                        x++;
                    }
                }

                Ext.getStore('Chores').removeAll();

                for(var y in myChoreStore) {
                    Ext.getStore('Chores').add(myChoreStore[y]);
                }
            }

        });
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        // this.setChores();

        // GroceryStore.getProxy().clear();
        Ext.getStore('Groceries').removeAll();

    }
});
