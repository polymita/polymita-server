exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_patterns', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('pattern').notNullable();
        table.string('description').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_patterns')
};
