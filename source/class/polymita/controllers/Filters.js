qx.Class.define("polymita.controllers.Filters", {
    extend: polymita.controllers.I18ns,

    /**
     * @param request {guaraiba.Request}
     * @param response {guaraiba.Response}
     * @param params {Object?} Params hash.
     */
    construct: function (request, response, params) {
        this.base(arguments, request, response, params);
        this.setRecordClass(polymita.models.I18n);
        this.setAcceptFilters(true);
        this.setDefaultOrder({ name: 'asc', createdAt: 'desc' });

        // Add action hooks.
        this.beforeAll('requireAuth');
        this.beforeOnly('beforeSave', ['create', 'update']);
    },

    members: {
        // override
        applyCustomQueryConditions: function (qb, done) {
            qb.andWhere({ catalog: 'Filters', sub_catalog: 'Values' });
            done.call(this, qb);
        },

        /**
         * Set static params items value before save record.
         * @param done {Function} Callback function.
         */
        beforeSave: function(done){
            var params = this.getParams();

            params.items.catalog = 'Filters';
            params.items.sub_catalog = 'Values';

            done.call(this);
        }
    }
});