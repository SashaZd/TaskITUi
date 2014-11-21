Ext.define('TaskIt.model.Setting', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'group_id', type: 'int' },
            { name: 'group_name', type: 'auto' },
            { name: 'users', type: 'auto' },
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'email', type: 'auto' },
            { name: 'chores', type: 'auto' },
            { name: 'chore_id', type: 'auto' },
            { name: 'chore_name', type: 'auto' },
            { name: 'frequency', type: 'auto' }
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});

//Ext.getStore('Settings').getData().all[0].raw