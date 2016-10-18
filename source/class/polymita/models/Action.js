qx.Class.define("polymita.models.Action", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: 'polymita_actions'
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

        componentId: {
            check: guaraiba.orm.DBSchema.Integer
        }
    }
});
