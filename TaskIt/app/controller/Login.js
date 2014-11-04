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
                if (JSON.parse(response.responseText).success){

                    GROUP_ID = 20; //Need to change once the server passes us the Group_IDs the User Belongs To

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
                else {
                    console.log("Login Error");
                }


            }
        });
    },

    doAllGroupIDFunctions : function(){
        this.setAllURLs();
        this.setChores();
        this.setAllTpls();
    },

    setAllURLs: function(){

        //Resets all the URLs for the Stores that depend on Group IDs 

        //For Settings Store
        settingsStore_URL = base_URL.concat('group/',GROUP_ID,'/');
        console.log("Settings URL Updated :: ", settingsStore_URL);
        Ext.getStore('Settings').getProxy().setUrl(settingsStore_URL); 
        Ext.getStore('Settings').load();

    },

    setAllTpls: function(){

        roommatesTpl = new Ext.XTemplate(
            '<tpl if="first_name==\'Unverified\'">',
                '<tpl if="email==\'',userEmail,'\'">',
                    '<div class="myTaskText">Invited : {email}</div>',
                '<tpl else>',
                    '<div class="otherTaskText">Invited : {email}</div>',
                '</tpl>',
            '<tpl else>',
                '<tpl if="email==\'',userEmail,'\'">',
                    '<div class="myTaskText">{first_name}</div>',
                '<tpl else>',
                    '<div class="otherTaskText">{first_name}</div>',
                '</tpl>',
            '</tpl>'
        );

        Ext.getCmp('settings_roommatesList').setItemTpl(roommatesTpl);

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

        //Daily Chores List for Home Screen
            chorelisttpl = new Ext.XTemplate(
                "<tpl if='email == \"",userEmail,"\" '>",
                    "<tpl if='is_done==true'>",
                        "<div class='taskTextCompleted'>You are {chore_name}</div>",
                    "<tpl else>",
                        "<div class='myTaskText'>You are {chore_name} </div>",
                    "</tpl>",
                "<tpl else>",
                "<tpl if='is_done==true'>",
                        "<div class='taskTextCompleted'>{first_name} : {chore_name}</div>",
                    "<tpl else>",
                        "<div class='otherTaskText'>{first_name} : {chore_name}</div>",
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
                        "<div class='myTaskText'> {name} </div>",
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
        console.log('Setting Chores');
        
        Ext.Ajax.request({
            method : 'GET',
            url: base_URL.concat('group/', GROUP_ID.toString(), '/'),   //'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/',
            success: function(response){
                myVar = JSON.parse(response.responseText);
                var x=0;
                GROUP_ID = myVar.group_id;
                console.log("set Chores Group ID : ", GROUP_ID);
                for (var i = 0; i< myVar.users.length; i++) {
                    for(var j=0; j<myVar.users[i].todays_chores.length; j++) {

                        myChoreStore[x]={};
                        myChoreStore[x].chore_name = myVar.users[i].todays_chores[j].chore_name;
                        myChoreStore[x].chore_id = myVar.users[i].todays_chores[j].chore_id;
                        myChoreStore[x].is_done = myVar.users[i].todays_chores[j].is_done;
                        myChoreStore[x].first_name = myVar.users[i].first_name;
                        myChoreStore[x].last_name = myVar.users[i].last_name;
                        myChoreStore[x].email = myVar.users[i].email;
                        console.log(myVar.users[i].email);
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
