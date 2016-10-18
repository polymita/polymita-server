qx.Class.define("polymita.models.Nomenclature", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: 'polymita_nomenclatures'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.Text
        },

        parentId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: true
        },

        description: {
            check: guaraiba.orm.DBSchema.Text
        }
    }
});
