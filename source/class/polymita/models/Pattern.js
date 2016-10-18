qx.Class.define("polymita.models.Pattern", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_patterns'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        pattern: {
            check: guaraiba.orm.DBSchema.String
        },

        description: {
            check: guaraiba.orm.DBSchema.Text
        }
    }
});