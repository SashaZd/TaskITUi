
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
                    setTimeout(function() {
                        Ext.getCmp('startScreen').getLayout().setAnimation({
                            type: 'slide',
                            duration: 300,
                            reverse: true,
                            direction:'right'
                        });
                        Ext.getCmp('startScreen').setActiveItem(2, {type : 'slide', direction:'right'});
                    });

                    allChoresTpl = new Ext.XTemplate(
                        "<div width='100%' class='otherTaskText'><p class='alignleft'>{chore_name}</p><p class='alignright'>{frequency}</p></div>"
                    );

                    Ext.getCmp('onlyChoresList').setItemTpl(allChoresTpl);

                    chorelisttpl = new Ext.XTemplate(
                        "<tpl if='email == \"",userEmail,"\" '>",
                            "<tpl if='is_done==true'>",
                                "<div class='taskTextCompleted'>You are {chore_name}</div>",
                            "<tpl else>",
                                "<div class='myTaskText'>You are {chore_name} </div>",
                            "</tpl>",
                        "<tpl else>",
                        "<tpl if='is_done==true'>",
                                "<div class='myTaskTextCompleted'>{first_name} : {chore_name}</div>",
                            "<tpl else>",
                                "<div class='otherTaskText'>{first_name} : {chore_name}</div>",
                            "</tpl>",
                        "</tpl>"
                    );

                    Ext.getCmp('myChoreList').setItemTpl(chorelisttpl);
                }
                else {
                    console.log("Login Error");
                }


            }
        });
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
        Ext.getStore('Chores').removeAll();
        Ext.Ajax.request({
            type : 'GET',
            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/',
            success: function(response){
                myVar = JSON.parse(response.responseText);
                var x=0;
                GROUP_ID = myVar.group_id;
                for (var i = 0; i< myVar.users.length; i++) {
                    for(var j=0; j<myVar.users[i].todays_chores.length; j++) {
                        // myChoreStore[x] = myVar.users[i].todays_chores[j];
                          // console.log(i);
                        myChoreStore[x]={};
                        myChoreStore[x].chore_name = myVar.users[i].todays_chores[j].chore_name;
                        myChoreStore[x].chore_id = myVar.users[i].todays_chores[j].chore_id;
                        myChoreStore[x].is_done = myVar.users[i].todays_chores[j].is_done;
                        myChoreStore[x].first_name = myVar.users[i].first_name;
                        myChoreStore[x].last_name = myVar.users[i].last_name;
                        myChoreStore[x].email = myVar.users[i].email;
                        // console.log(myVar.users[i].email);
                        Ext.getStore('Chores').insert(x,myChoreStore[x]);
                        x++;
                    }
                }


            }
        });
    },

    setGroceryStore: function(){
        Ext.Ajax.request({
            type : 'GET',
            url: 'http://ec2-54-69-145-233.us-west-2.compute.amazonaws.com/api/group/1/grocery/',
            success: function(response){
                myVar = JSON.parse(response.responseText);
                var grocerystore = Ext.getStore('Groceries');
                var x=0;

                for (var i = 0; i< myVar.length; i++) {
                    // for(var j=0; j<myVar.users[i].todays_chores.length; j++) {
                        // myChoreStore[x] = myVar.users[i].todays_chores[j];
                    // console.log(i);
                    myGroceryStore[x]={};
                    myGroceryStore[x].id=myVar[i].grocery_id;
                    myGroceryStore[x].grocery_item=myVar[i].name;
                    // console.log(myVar[i].name);
                    grocerystore.insert(x,myGroceryStore[x]);
                    x++;
                }
            }
        });
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.setChores();

        this.setGroceryStore();

        // GroceryStore.getProxy().clear();
        Ext.getStore('Groceries').removeAll();


    }
});
