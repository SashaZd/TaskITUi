Ext.define('TaskIt.model.GroceryItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'grocery_id', type: 'int' },
            { name: 'name', type: 'auto' },
            {name: 'is_done', type: 'boolean'},
            {name: 'group_id', type: 'boolean'},
            {name: 'bought_date', type: 'auto'},
            {name:'first_name', type: 'auto'}
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});
