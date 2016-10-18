qx.Class.define("polymita.controllers.Components", {
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
        this.setRecordClass(polymita.models.Component);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ place: 'asc', createdAt: 'desc', id: 'asc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
    }
});
