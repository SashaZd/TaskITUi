Ext.define("TaskIt.store.Roommates", {
    extend: "Ext.data.Store",
    config: {
    	storeId : 'Roommates',
        model: "TaskIt.model.Roommate",
        data: [
        	{
        		groupId : 1,
        		groupName : 'Apartment 203',
        		users : [
        			{
        				firstName : 'Sasha',
        				lastName : 'Azad',
        				email : 'sasha.azad@gatech.edu',

        				chores : [
        					{
        						choreId : 1,
        						choreName : 'Cooking'
        					}
        				]
        			}
        		]
        	},
        	{
        		groupId : 1,
        		groupName : 'Apartment 203',
        		users : [
        			{
        				firstName : 'Rahul',
        				lastName : 'Goel',
        				email : 'rahul.goel@gatech.edu',
        				chores : [
        					{
        						choreId : 2,
        						choreName : 'Cleaning'
        					}
        				]
        			}
        		]
        	},
        	{
        		groupId : 1,
        		groupName : 'Apartment 203',
        		users : [
        			{
        				firstName : 'Brandon',
        				lastName : 'Chastain',
        				email : 'brandon.chastain@gatech.edu',
        				chores : [
        					{
        						choreId : 3,
        						choreName : 'Out Buying Groceries'
        					}
        				]
        			}
        		]
        	}
        ]
    }
});