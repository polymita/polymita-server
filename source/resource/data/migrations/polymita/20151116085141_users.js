exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_users', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('passport').notNullable().default('local');
        table.boolean('active').notNullable().default(false);
        table.date('last_access_date').nullable();
        table.string('last_access_address').nullable();
        table.date('expiration_date').notNullable();
        table.integer('default_role_id').notNullable()
            .references('id').inTable('polymita_roles').onUpdate('CASCADE').onDelete('RESTRICT');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_users');
};
