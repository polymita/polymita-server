exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_fields', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.boolean('show_in_grid').notNullable().default(true);
        table.string('access_in_add_form').notNullable().default('W');
        table.string('access_in_edit_form').notNullable().default('W');
        table.string('widget_class');
        table.string('properties');
        table.string('validator_class');
        table.boolean('include_in_search').notNullable().default(true);
        table.integer('place').notNullable().default(0);
        table.integer('component_id').notNullable()
            .references('id').inTable('polymita_components').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_fields')
};
