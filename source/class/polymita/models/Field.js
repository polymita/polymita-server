qx.Class.define("polymita.models.Field", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: 'polymita_fields'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        },

        widgetClass: {
            check: guaraiba.orm.DBSchema.String,
            nullable: true
        },

        showInGrid: {
            check: guaraiba.orm.DBSchema.Boolean,
            init: true
        },

        includeInSearch: {
            check: guaraiba.orm.DBSchema.Boolean,
            init: true
        },

        accessInAddForm: {
            check: guaraiba.orm.DBSchema.Character,
            init: 'W'
        },

        accessInEditForm: {
            check: guaraiba.orm.DBSchema.Character,
            init: 'W'
        },

        properties: {
            check: guaraiba.orm.DBSchema.Text,
            init: '{}'
        },

        validatorClass: {
            check: guaraiba.orm.DBSchema.String,
            nullable: true
        },

        place: {
            check: guaraiba.orm.DBSchema.Integer,
            init: 100
        },

        componentId: {
            check: guaraiba.orm.DBSchema.Integer
        }
    }
});
