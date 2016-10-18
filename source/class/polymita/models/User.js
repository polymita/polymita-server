qx.Class.define("polymita.models.User", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: "polymita_users",

        encryptedCredentials: function (username, password) {
            var CryptoJS = require('crypto-js'),
                encrypted;

            encrypted = CryptoJS.AES.encrypt(username, password).toString();
            encrypted = CryptoJS.enc.Utf8.parse(encrypted);
            encrypted = CryptoJS.enc.Base64.stringify(encrypted);

            return encrypted;
        },

        decryptedCredentials: function (encrypted, password) {
            var CryptoJS = require('crypto-js'),
                decrypted;

            try {
                encrypted = CryptoJS.enc.Base64.parse(encrypted);
                encrypted = CryptoJS.enc.Utf8.stringify(encrypted);
                decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);

                return decrypted;
            } catch (ex) {
                return ''
            }
        }

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

        username: {
            check: guaraiba.orm.DBSchema.String,
            nullable: false
        },

        password: {
            check: guaraiba.orm.DBSchema.String,
            nullable: false
        },

        passport: {
            check: guaraiba.orm.DBSchema.String,
            nullable: false,
            init: 'local'
        },

        active: {
            check: guaraiba.orm.DBSchema.Boolean,
            nullable: false,
            init: false
        },

        lastAccessDate: {
            check: guaraiba.orm.DBSchema.Date,
            nullable: true
        },

        lastAccessAddress: {
            check: guaraiba.orm.DBSchema.String,
            nullable: true
        },

        expirationDate: {
            check: guaraiba.orm.DBSchema.Date,
            nullable: false
        },

        defaultRoleId: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: false
        }
    },

    members: {
        /**
         * Check if credentials is expired.
         *
         * @return {boolean}
         */
        isExpired: function () {
            var cD = new Date(),
                eD = this.getExpirationDate();

            return eD.getTime() <= cD.getTime();
        },

        /**
         * Check if given credentials match with the saved in db.
         *
         * @param username {string}
         * @param password {string}
         * @return {boolean}
         */
        isValidCredential: function (username, password) {
            var dbUsername = this.getUsername(),
                encrypted = this.getPassword(),
                decrypted = polymita.models.User.decryptedCredentials(encrypted, password);

            return username == dbUsername && username == decrypted;
        }
    }
});