qx.Class.define("polymita.models.ResourceACL", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: "polymita_resource_acls",

        // Add options.
        PERMISSION: {
            NONE: 0,                //0000
            READ: 1,                //0001
            READ_AND_EXECUTE: 3,    //0011
            READ_AND_WRITE: 5,      //0101
            READ_AND_DELETE: 9,     //1001
            ALL: 15                 //1111
        }
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        resourceTypeId: {
            check: guaraiba.orm.DBSchema.Integer
        },

        resourceId: {
            check: guaraiba.orm.DBSchema.Integer
        },

        roleId: {
            check: guaraiba.orm.DBSchema.Integer
        },

        permission: {
            check: guaraiba.orm.DBSchema.Integer
        }
    }
});