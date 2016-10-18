qx.Class.define("polymita.models.Role", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_roles'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        description: {
            check: guaraiba.orm.DBSchema.String
        }
    }
});
