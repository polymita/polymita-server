/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

/**
 * This is the main application class of your custom application "polymita" server.
 *
 * @asset(*)
 *
 * @ignore(environment)
 * @ignore(process)
 */
qx.Class.define("polymita.Application", {
    extend: guaraiba.Application,

    /**
     * Constructor
     */
    construct: function () {
        this.base(arguments);
        this.setConfiguration(polymita.Configuration.getInstance());
        this.setRouter(polymita.Router.getInstance());
    },

    members: {
        // override
        getServerStaticPaths: function () {
            var path = require('path'),
                paths = this.base(arguments);

            if (this.itIsProduction()) {
                qx.lang.Array.append(paths, [
                    { urlPattern: '/gui', resourcePath: guaraiba.appRoot },
                    { urlPattern: '/gui/qx', resourcePath: path.join(guaraiba.appRoot, 'resource', 'qx') },
                    { urlPattern: '/gui/polymita', resourcePath: path.join(guaraiba.appRoot, 'resource', 'polymita') },
                ]);
            } else {
                var guiSourcePath = path.join(guaraiba.appRoot, '..', '..', 'polymita-gui', 'source'),
                    guiResourcePath = path.join(guiSourcePath, 'resource', 'polymita'),
                    qxSourcePath = path.join(guaraiba.appRoot,
                        '..', 'node_modules', 'qooxdoo-sdk', 'framework', 'source', 'resource', 'qx'
                    );

                qx.lang.Array.append(paths, [
                    { urlPattern: '/gui', resourcePath: path.resolve(guiSourcePath) },
                    { urlPattern: '/gui/qx', resourcePath: path.resolve(qxSourcePath) },
                    { urlPattern: '/gui/polymita', resourcePath: path.resolve(guiResourcePath) },
                    { urlPattern: '/source', resourcePath: path.resolve(guiSourcePath) }
                ]);
            }

            return paths;
        }
    }
});
