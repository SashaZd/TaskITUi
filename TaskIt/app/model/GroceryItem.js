Ext.define('TaskIt.model.GroceryItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'grocery_item', type: 'auto' }
        ]

        // belongsTo : {
        // 	model : 'Roommate'
        // }
    }
});
