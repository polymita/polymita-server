exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_members_of_role', function (table) {
        table.integer('id').primary();
        table.integer('role_id').notNullable()
            .references('id').inTable('polymita_roles').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('user_id').notNullable()
            .references('id').inTable('polymita_users').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_members_of_role')
};
