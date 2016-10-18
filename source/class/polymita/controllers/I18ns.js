qx.Class.define("polymita.controllers.I18ns", {
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
        this.setRecordClass(polymita.models.I18n);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ catalog: 'asc', createdAt: 'desc' });

        // Add action hooks.
        this.beforeExcept('requireAuth', ['index', 'count']);
        this.beforeExcept('checkAccessControlListToActions', ['index', 'count']);
    }
});
