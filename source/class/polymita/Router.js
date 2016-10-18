/**
 * Singleton instance class for define any route for application action.
 */
qx.Class.define("polymita.Router", {
    extend: guaraiba.routes.Router,

    statics: {
        /**
         * Helper method to handle singletons
         *
         * @internal
         * @return {Object} The singleton instance
         */
        getInstance: function () {
            if (!this.$$instance) {
                this.$$instance = new this();
            }

            return this.$$instance;
        }
    },

    members: {
        /**
         * Initialise the routes for any action.
         */
        init: function () {
            this.get('/').to(polymita.controllers.GUI);

            this.get('/modules/tree(.:format)').to(polymita.controllers.Modules, 'tree');
            this.get('/modules/:mId/components(.:format)').to(polymita.controllers.Components, 'items');

            this.get('/login(.:format)').to(polymita.controllers.Session, 'start');
            this.post('/login(.:format)').to(polymita.controllers.Session, 'login');
            this.get('/logout(.:format)').to(polymita.controllers.Session, 'logout');

            // BEGIN REGISTER RESOURCE ROUTERS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
            this.resource(polymita.controllers.Modules);
            this.resource(polymita.controllers.Components);
            this.resource(polymita.controllers.Fields);
            this.resource(polymita.controllers.Actions);
            this.resource(polymita.controllers.I18ns);
            this.resource(polymita.controllers.Nomenclatures);
            this.resource(polymita.controllers.NomenclatureItems);
            this.resource(polymita.controllers.Roles);
            this.resource(polymita.controllers.Users);
            this.resource(polymita.controllers.MembersOfRoles);
            this.resource(polymita.controllers.Patterns);
            this.resource(polymita.controllers.Places);
            this.resource(polymita.controllers.Filters);
            this.resource(polymita.controllers.ResourceACLs);
            this.resource(polymita.controllers.Services);
            this.resource(polymita.controllers.ServiceACLs);
            // END REGISTER RESOURCE ROUTERS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
        }
    }
});