/**
 * This class offers the specific properties and features to configure the data base schemas of polymita application.
 */
qx.Class.define('polymita.schemas.Default', {
    extend: guaraiba.orm.DBSchema,

    /**
     * Constructor
     *
     * @param knexSetting {Object}
     * @param JdbcSettings {Object?}
     */
    construct: function (knexSetting, jdbcSettings) {
        this.setModelPrefixName('polymita.models');
        this.base(arguments, 'polymita', knexSetting, jdbcSettings);
    },

    members: {
        /**
         * Initialize data base schemas of polymita application.
         *
         * This method is called immediately after construction of the schemes and
         * in this must be registered each of the model classes.
         */
        init: function () {
            // BEGIN REGISTER RECORD CLASS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
            this.register(polymita.models.Module);
            this.register(polymita.models.Component);
            this.register(polymita.models.Action);
            this.register(polymita.models.Field);
            this.register(polymita.models.I18n);
            this.register(polymita.models.Nomenclature);
            this.register(polymita.models.NomenclatureItem);
            this.register(polymita.models.Role);
            this.register(polymita.models.User);
            this.register(polymita.models.MembersOfRole);
            this.register(polymita.models.Place);
            this.register(polymita.models.ResourceType);
            this.register(polymita.models.ResourceACL);
            this.register(polymita.models.Service);
            this.register(polymita.models.ServiceACL);
            // END REGISTER RECORD CLASS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
        },

        driverSettings: function (driver) {
            // Setting driver to convert int8 (oid=20) DB field type into a result javascript integer type.
            driver.types && driver.types.setTypeParser(20, parseInt);
        }

    }
});