qx.Class.define("polymita.controllers.Patterns", {
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
        this.setRecordClass(polymita.models.Pattern);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ name: 'asc', createdAt: 'desc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
    }
});