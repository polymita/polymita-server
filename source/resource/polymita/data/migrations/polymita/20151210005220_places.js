exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_places', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        table.integer('zoom').notNullable().default(1);
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_places')
};
