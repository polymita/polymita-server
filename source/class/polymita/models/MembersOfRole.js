qx.Class.define("polymita.models.MembersOfRole", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: 'polymita_members_of_role'
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        roleId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: false
        },

        userId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: false
        }
    }
});