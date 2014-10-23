Ext.define('TaskIt.model.Chore', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'group_id', type: 'int' },
            { name: 'groupName', type: 'auto' },
            { name: 'users', type: 'auto' },
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'email', type: 'auto' },
            { name: 'todays_chores', type: 'auto' },
            { name: 'chore_id', type: 'auto' },
            { name: 'chore_name', type: 'auto' }
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});
