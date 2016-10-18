qx.Class.define("polymita.models.NomenclatureItem", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: 'polymita_nomenclature_items'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        label: {
            check: guaraiba.orm.DBSchema.String
        },

        value: {
            check: guaraiba.orm.DBSchema.String
        },

        parentId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: true
        },

        nomenclatureId: {
            check: guaraiba.orm.DBSchema.Integer
        }
    }
});
