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
            this.registerResourceUri('polymita', guaraiba.path.join(
                guaraiba.appRoot, '..', 'node_modules', 'polymita-server', 'source', 'resource')
            );
        }

        this.setSessionSecret('a3d68565c5bd86c8d13af3b98c23e6bb');
        this.setDefaultFormat('json');
        this.setAllowCORS(false);

        // Include postgresql jdbc driver.
        guaraiba.javaClassPath('guaraiba/java/postgresql-9.3-1102.jdbc4.jar');

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

        }

    }
});