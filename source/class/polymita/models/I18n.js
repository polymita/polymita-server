qx.Class.define("polymita.models.I18n", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_i18ns'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        locale: {
            check: guaraiba.orm.DBSchema.String
        },

        catalog: {
            check: guaraiba.orm.DBSchema.String
        },

        subCatalog: {
            check: guaraiba.orm.DBSchema.String
        },

        value: {
            check: guaraiba.orm.DBSchema.Text
        }
    }
});
