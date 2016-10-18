qx.Class.define("polymita.controllers.Modules", {
    extend: guaraiba.controllers.RestModelController,
    implement: [
        guaraiba.controllers.IAccessControlListToActions,
        guaraiba.controllers.IAccessControlListToResources
    ],
    include: [
        polymita.controllers.MAccessControlListToActions,
        polymita.controllers.MAccessControlListToResources
    ],

    /**
     * @param request {guaraiba.Request}
     * @param response {guaraiba.Response}
     * @param params {Object?} Params hash.
     */
    construct: function (request, response, params) {
        this.base(arguments, request, response, params);
        this.setRecordClass(polymita.models.Module);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ place: 'asc', createdAt: 'desc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
    }
});
