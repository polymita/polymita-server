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
        this.base(arguments, polymita.Configuration.getInstance(), polymita.Router.getInstance());
    },

    members: {
        // override
        getServerStaticPaths: function () {
            var path = require('path'),
                paths = this.base(arguments);

            if (this.itIsProduction()) {
                qx.lang.Array.append(paths, [
                    { urlPattern: '/gui', resourcePath: guaraiba.appRoot },
                    { urlPattern: '/gui/qx', resourcePath: path.join(guaraiba.appRoot, 'resource/qx') },
                    { urlPattern: '/gui/polymita', resourcePath: path.join(guaraiba.appRoot, 'resource/polymita') },
                ]);
            } else {
                var module = require('module'),
                    guiSourcePath = path.resolve(path.join(guaraiba.appRoot, '../../polymita-gui/source')),
                    polymitaGuiResourcePath = path.join(guiSourcePath, 'resource/polymita'),
                    qxSourcePath = path.resolve(path.join(guaraiba.appRoot, '../bower_components/qooxdoo-5.0.1-sdk/framework/source/resource/qx'));

                qx.lang.Array.append(paths, [
                    { urlPattern: '/gui', resourcePath: guiSourcePath },
                    { urlPattern: '/gui/qx', resourcePath: qxSourcePath },
                    { urlPattern: '/gui/polymita', resourcePath: polymitaGuiResourcePath },
                    { urlPattern: '/source', resourcePath: guiSourcePath }
                ]);
            }

            return paths;
        }
    }
});
