exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_components', function (table) {
        table.integer('id').primary();
        table.string('widget_class').notNullable();
        table.integer('place').notNullable();
        table.boolean('disabled').notNullable();
        table.text('properties').notNullable();
        table.integer('module_id')
            .references('id').inTable('polymita_modules').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('parent_id');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_components')
};
