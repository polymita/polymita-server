qx.Class.define("polymita.controllers.Users", {
    extend: guaraiba.controllers.RestModelController,
    implement: [
        guaraiba.controllers.IAccessControlListToActions
    ],
    include: [
        polymita.controllers.MAccessControlListToActions
    ],

    /**
     * @param request {guaraiba.Request}
     * @param response {guaraiba.Response}
     * @param params {Object?} Params hash.
     */
    construct: function (request, response, params) {
        this.base(arguments, request, response, params);
        this.setRecordClass(polymita.models.User);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ name: 'asc', createdAt: 'desc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
        this.beforeOnly('encryptCredentials', ['create', 'update']);
    },

    members: {
        /**
         * Hook, fired before execute the create or update actions.
         * Encrypt credentials before save new user or old user with new password or username.
         *
         * @param proceed {Function} Function to continue normal workflow.
         */
        encryptCredentials: function (proceed) {
            var items = this.getParams().items,
                action = this.getActionName();

            if (action == 'create' || items.password != 'HIDDEN-WITHOUT-CHANGES') {
                items.password = polymita.models.User.encryptedCredentials(items.username, items.password);
            } else {
                delete items.password;
            }

            // Continue normal workflow.
            proceed();
        },

        // override
        _prepareItem: function (record, done) {
            this.base(arguments, record, function (err, item) {
                item.password = 'HIDDEN-WITHOUT-CHANGES';
                done.call(this, err, item);
            });
        }
    }
});