/**
 * This class offers the common properties and features to configure the polymita application.
 *
 * @require(guaraiba.Passport)
 */
qx.Class.define('polymita.AbstractConfiguration', {
    type: 'abstract',
    extend: guaraiba.Configuration,

    construct: function () {
        this.base(arguments);

        // Set base path for polymita resources.
        if (guaraiba.fs.existsSync(guaraiba.path.join(guaraiba.appResourcePath, 'polymita'))) {
            this.registerResourceUri('polymita', guaraiba.appResourcePath)
        } else {
            var module = require('module'),
                polymitaPath = guaraiba.path.dirname(module._resolveFilename('polymita'));

            this.registerResourceUri('polymita', guaraiba.path.join(polymitaPath, 'node_modules/polymita-server/source/resource'));
        }

        this.setSessionSecret('a3d68565c5bd86c8d13af3b98c23e6bb');
        this.setDefaultFormat('json');
        this.setAllowCORS(false);

        // Include postgresql jdbc driver.
        guaraiba.javaClasspath('guaraiba/java/postgresql-9.3-1102.jdbc4.jar');

        // Configure profile map for local passport authentication.
        this.getPassport('local').setProfileMap({
            username: 'username',
            name: 'name',
            lastAccessDate: 'lastAccessDate',
            lastAccessAddress: 'lastAccessAddress'
        });
    },

    members: {

        // override
        init: function () {
            // Register database schemas.
            var knexSetting = {
                    client: 'pg',
                    connection: 'postgres://polymita:polymita@127.0.0.1:5432/polymita',
                    debug: true
                },

                jdbcSettings = {
                    driver: 'org.postgresql.Driver',
                    connectString: 'jdbc:postgresql://127.0.0.1:5432/polymita',
                    username: 'polymita',
                    password: 'polymita'
                };

            this.registerDBSchema(new polymita.schemas.Default(knexSetting, jdbcSettings));
        }

    }
});