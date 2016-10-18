qx.Mixin.define("polymita.controllers.MAccessControlListToActions", {
    members: {
        // override
        checkAccessControlListToActions: function (proceed) {
            this.requireAuth(qx.lang.Function.bind(function () {
                var currentUserId = this.getSession().getProfile().localId;

                if (currentUserId) {
                    var serviceModel = this.getModel(polymita.models.Service),
                        serviceACLModel = this.getModel(polymita.models.ServiceACL),
                        action = this.getControllerPath() + this.getActionName();

                    serviceModel.findOrCreate({action: action}, function (err, record) {
                        var serviceId = record.getId();

                        serviceACLModel.count('* AS count').where('service_id', serviceId).whereIn('role_id', function (knex) {
                            knex.distinct('role_id').from('polymita_members_of_role').where('user_id', currentUserId)
                        }).then(function (err, records) {
                            if (!this.respondError(err)) {
                                var count = records[0].count * 1;

                                if (count > 0) {
                                    proceed();
                                } else {
                                    this.respondWithStatusUnauthorized();
                                }
                            }
                        }, this)
                    }, this);
                } else {
                    this.respondWithStatusUnauthorized();
                }
            }, this));

        }
    }
});
