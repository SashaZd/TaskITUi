Ext.define('TaskIt.model.Chore', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user-id', type: 'int' },
            { name: 'name', type: 'auto' }
        ],

        belongsTo : {
        	model : 'Roommate'
        }
    }
});
