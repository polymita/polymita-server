exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_modules', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('i18n_catalog').notNullable();
        table.integer('place').notNullable().default(0);
        table.boolean('vertical_layout').notNullable().default(false);
        table.boolean('disabled').notNullable().default(false);
        table.integer('parent_id')
            .references('id').inTable('polymita_modules').onUpdate('CASCADE').onDelete('RESTRICT');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_modules')
};
