exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_nomenclatures', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.integer('parent_id').nullable();
        table.string('description').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_nomenclatures')
};
