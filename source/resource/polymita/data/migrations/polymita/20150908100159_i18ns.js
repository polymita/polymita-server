exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_i18ns', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('locale').notNullable();
        table.string('catalog').notNullable();
        table.string('sub_catalog').notNullable();
        table.text('value').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_i18ns')
};
