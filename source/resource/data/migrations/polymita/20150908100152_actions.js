exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_actions', function (table) {
        table.integer('id').primary();
        table.string('widget_class').notNullable();
        table.integer('place').notNullable();
        table.integer('component_id').notNullable()
            .references('id').inTable('polymita_components').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_actions')
};
