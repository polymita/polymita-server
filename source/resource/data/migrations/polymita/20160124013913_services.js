exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('polymita_services', function (table) {
            table.integer('id').primary();
            table.string('action').notNullable().unique();
        }),

        knex.schema.createTable('polymita_service_acls', function (table) {
            table.integer('id').primary();
            table.integer('service_id').notNullable().index().references('id').inTable('polymita_services')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('role_id').notNullable().index().references('id').inTable('polymita_roles')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.timestamps();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('polymita_service_acls'),
        knex.schema.dropTable('polymita_services')
    ])
};
