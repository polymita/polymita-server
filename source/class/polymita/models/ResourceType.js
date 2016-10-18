qx.Class.define("polymita.models.ResourceType", {
    extend: guaraiba.orm.Record,

    statics: {
        tableName: "polymita_resource_types"
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String
        }
    }
});