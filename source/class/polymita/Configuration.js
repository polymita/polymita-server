/**
 * This class offers the specific properties and features to configure the polymita application.
 */
qx.Class.define('polymita.Configuration', {
    type: 'singleton',
    extend: polymita.AbstractConfiguration,

    members: {

        init: function () {
            // Set default dbSchema name.
            process.env.dbSchema = 'polymita';

            var databasePath = guaraiba.path.join(guaraiba.appDataPath, 'app.db'),

                knexSetting = {
                    client: 'sqlite3',
                    connection: databasePath,
                    useNullAsDefault: true,
                    debug: true
                },

                jdbcSettings = {
                    driver: 'org.sqlite.JDBC',
                    connectString: 'jdbc:sqlite:' + databasePath
                },

                fs = guaraiba.fs;

            // Create database file if not exists.
            if (!fs.existsSync(databasePath)) {
                fs.closeSync(fs.openSync(databasePath, 'w'));
            }

            // Register database schemas.
            this.registerDBSchema(new polymita.schemas.Default(knexSetting, jdbcSettings));
        }

    }
});