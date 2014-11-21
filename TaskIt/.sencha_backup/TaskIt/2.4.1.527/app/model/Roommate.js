Ext.define('TaskIt.model.Roommate', {
    extend: 'Ext.data.Model',  

    config: {
        fields: [
           { name: 'users', type: 'auto' },
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'email', type: 'auto' }
        ]
    }
});
