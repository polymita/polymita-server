qx.Class.define("polymita.models.Module", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_modules'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        title: {
            check: guaraiba.orm.DBSchema.String
        },

        place: {
            check: guaraiba.orm.DBSchema.Integer
        },

        verticalLayout: {
            check: guaraiba.orm.DBSchema.Boolean,
            init: false
        },

        disabled: {
            check: guaraiba.orm.DBSchema.Boolean,
            init: true
        },

        parentId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: true
        }
    }
});
