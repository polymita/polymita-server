qx.Class.define("polymita.models.Place", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: "polymita_places"
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String,
            nullable: false
        },

        description: {
            check: guaraiba.orm.DBSchema.Text,
            nullable: false
        },

        latitude: {
            check: guaraiba.orm.DBSchema.Float,
            nullable: false
        },

        longitude: {
            check: guaraiba.orm.DBSchema.Float,
            nullable: false
        },

        zoom: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: false
        }
    }
});