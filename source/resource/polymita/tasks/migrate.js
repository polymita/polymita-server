namespace('db', function () {
    namespace('polymita', function () {
        try {
            desc('Copy all migration file from polymita to your application.\n');
            task('install-migration', { async: true }, function () {
                console.log('--------------INSTALING POLYMITA MIGRATIONS--------------');
                var path = require('path'),
                    fse = require('fs-extra'),
                    dbSchema = qx.core.BaseInit.getApplication().getDBSchema('polymita'),
                    targetPath = dbSchema.getKNex().client.config.migrations.directory,
                    polymitaServerPath = path.join(guaraiba.appRoot, '../', 'node_modules', 'polymita-server'),
                    sourcePath = path.join(polymitaServerPath, 'source', 'resource', 'polymita', 'data', 'migrations', 'polymita');

                fse.copy(sourcePath, targetPath, function (err) {
                    if (err) console.error(err.toString());
                    complete();
                });
            });
        } catch (ex) {
            console.log('----------------------------------------------------------------------');
            console.log(ex.getComment ? ex.getComment() : ex.toString());
            console.log('----------------------------------------------------------------------');
        }
    });
});