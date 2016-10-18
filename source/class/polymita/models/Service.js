qx.Class.define("polymita.models.Service", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: "polymita_services"
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        action: {
            check: guaraiba.orm.DBSchema.String
        }
    }
});