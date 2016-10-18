qx.Class.define("polymita.controllers.NomenclatureItems", {
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
        this.setRecordClass(polymita.models.NomenclatureItem);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ label: 'asc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
        this.beforeOnly('checkValue', ['create', 'update']);
    },

    members: {
        checkValue: function (proceed) {
            var items = this.getParams().items;

            if (items.value == undefined) {
                items.value = items.label;
            }

            if (items.label == undefined) {
                items.label = items.value;
            }

            // Continue with normal workflow.
            proceed();
        }
    }
});
