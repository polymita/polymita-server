qx.Class.define("polymita.models.Filter", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_filters'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        filter: {
            check: guaraiba.orm.DBSchema.String
        },

        description: {
            check: guaraiba.orm.DBSchema.Text
        }
    }
});