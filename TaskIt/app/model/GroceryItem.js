Ext.define('TaskIt.model.GroceryItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'grocery_item', type: 'auto' },
            {name: 'is_done', type: 'boolean'}
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});
