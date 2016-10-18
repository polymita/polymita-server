qx.Class.define("polymita.models.ServiceACL", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: "polymita_service_acls"
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        serviceId: {
            check: guaraiba.orm.DBSchema.Integer
        },

        roleId: {
            check: guaraiba.orm.DBSchema.Integer
        }
    }
});