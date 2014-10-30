Ext.define('TaskIt.model.OnlyChore', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'group_id', type: 'int' },
            { name: 'groupName', type: 'auto' },
            { name: 'chore_id', type: 'auto' },
            { name: 'chore_name', type: 'auto' }
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});
