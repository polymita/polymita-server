exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('polymita_resource_types', function (table) {
            table.integer('id').primary();
            table.string('name').notNullable().unique();
        }),

        knex.schema.createTable('polymita_resource_acls', function (table) {
            table.integer('id').primary();
            table.integer('resource_type_id').notNullable().index().references('id').inTable('polymita_resource_types')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('resource_id').notNullable().index();
            table.integer('role_id').notNullable().index().references('id').inTable('polymita_roles')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('permission').notNullable();
            table.timestamps();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('polymita_resource_acls'),
        knex.schema.dropTable('polymita_resource_types')
    ]);
};
