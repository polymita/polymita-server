qx.Class.define("polymita.models.Component", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_components'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        widgetClass: {
            check: guaraiba.orm.DBSchema.String
        },

        place: {
            check: guaraiba.orm.DBSchema.Integer
        },

        disabled: {
            check: guaraiba.orm.DBSchema.Boolean
        },

        properties: {
            check: guaraiba.orm.DBSchema.String,
            init: '{}'
        },

        moduleId: {
            check: guaraiba.orm.DBSchema.Integer
        },

        parentId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: true
        }
    }
});
