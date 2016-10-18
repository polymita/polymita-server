exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_filters', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('filter').notNullable();
        table.text('description').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_filters')
};
