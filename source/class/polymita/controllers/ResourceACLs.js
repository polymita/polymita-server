qx.Class.define("polymita.controllers.ResourceACLs", {
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
        this.setRecordClass(polymita.models.ResourceACL);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ createdAt: 'desc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
        this.beforeOnly('findOrCreateResourceType', ['create', 'index', 'count']);
    },

    members: {
        /**
         * Hook, fired before execute the 'create', 'index' or 'count' actions.
         * Find or create ResourceType.
         *
         * @param proceed {Function} Callback function to continue with normal workflow.
         */
        findOrCreateResourceType: function (proceed) {
            var params = this.getParams(),
                model = this.getModel(polymita.models.ResourceType),
                data, items;

            items = (params.action == 'create') ? params.items : params.filters;

            data = { name: items.resourceType };
            delete items.resourceType;

            model.findOrCreate(data, function (err, record) {
                items.resourceTypeId = record.getId();
                proceed();
            }, this);
        }

    }
});
