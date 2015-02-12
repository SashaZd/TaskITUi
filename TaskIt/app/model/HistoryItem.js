Ext.define('TaskIt.model.HistoryItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'users', type: 'auto' },
            { name: 'user_first_name', type: 'auto' },
            { name: 'user_last_name', type: 'auto' },
            { name: 'email', type: 'auto' },
            { name: 'todays_chores', type: 'auto' },
            { name: 'chore_id', type: 'auto' },
            { name: 'chore_name', type: 'auto' },
            { name: 'is_done', type: 'boolean'},
            { name : 'completed_on', type: 'date', format:'d.m.Y'}
        ]
    }
});
