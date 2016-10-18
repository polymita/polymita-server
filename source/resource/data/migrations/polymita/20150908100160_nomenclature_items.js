exports.up = function (knex, Promise) {
    return knex.schema.createTable('polymita_nomenclature_items', function (table) {
        table.integer('id').primary();
        table.string('label').notNullable();
        table.string('value').notNullable();
        table.integer('nomenclature_id').notNullable()
            .references('id').inTable('polymita_nomenclatures').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('parent_id')
            .references('id').inTable('polymita_nomenclature_items').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamps();

        table.unique(['label', 'nomenclature_id'], 'nomenclature_item_unique_label');
        table.unique(['value', 'nomenclature_id'], 'nomenclature_item_unique_value');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('polymita_nomenclature_items')
};
