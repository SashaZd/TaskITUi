Ext.define('TaskIt.model.Roommate', {
    extend: 'Ext.data.Model',  

    config: {
        fields: [
            { name: 'groupid', type: 'int' },
            { name: 'groupName', type: 'auto' },
            { name: 'users', type: 'auto' },
            { name: 'firstName', type: 'auto' },
            { name: 'lastName', type: 'auto' },
            { name: 'email', type: 'auto' },
            { name: 'chores', type: 'auto' },
            { name: 'choreID', type: 'auto' },
            { name: 'choreName', type: 'auto' },
        ]
    }
});
