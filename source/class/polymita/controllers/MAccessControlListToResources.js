qx.Mixin.define("polymita.controllers.MAccessControlListToResources", {
    members: {
        // override
        applyAccessControlListWhereConditionsToResources: function (qb, permission, done) {
            var model = this.getModel(),
                resourceTypeModel = this.getModel(polymita.models.ResourceType),
                currentUserId = this.getSession().get('profile').localId,
                resourceTypeName = model.getShortModelName();

            if (qx.lang.Type.isFunction(permission)) {
                done = permission;
                permission = this.getDefaultPermissionToResources();
            }

            resourceTypeModel.findOrCreate({ name: resourceTypeName }, function (err, record) {
                var resourceTypeId = record.getId();

                qb.whereIn(model.getIdFieldName(), function (knex) {
                    knex.distinct('resource_id').from('polymita_resource_acls')
                        .whereRaw('permission & ? = ?', [permission, permission])
                        .where('resource_type_id', resourceTypeId)
                        .whereIn('role_id', function (knex) {
                            knex.distinct('role_id').from('polymita_members_of_role').where('user_id', currentUserId);
                        });
                });

                done(qb);

            }, this);

        },

        // override
        saveAccessControlListToResources: function (record, done) {
            var model = this.getModel(),
                resourceTypeModel = this.getModel(polymita.models.ResourceType),
                userModel = this.getModel(polymita.models.User),
                resourceId = record.getId(),
                resourceTypeName = model.getShortModelName();

            resourceTypeModel.findOrCreate({ name: resourceTypeName }, function (err, record) {
                if (!this.respondError(err)) {
                    var resourceTypeId = record.getId(),
                        currentUserId = this.getSession().get('profile').localId;

                    userModel.find(currentUserId, function (err, user) {
                        var acl = new polymita.models.ResourceACL({
                            resourceTypeId: resourceTypeId,
                            resourceId: resourceId,
                            roleId: user.getDefaultRoleId(),
                            permission: polymita.models.ResourceACL.PERMISSION.ALL
                        });

                        acl.save(function (err) {
                            this.respondError(err) || done();
                        }, this);
                    }, this);
                }
            }, this);
        },

        // override
        destroyAccessControlListToResources: function (record, done) {
            var model = this.getModel(),
                resourceTypeModel = this.getModel(polymita.models.ResourceType),
                resourceACLsModel = this.getModel(polymita.models.ResourceACL),
                resourceId = record.getId(),
                resourceTypeName = model.getShortModelName();

            resourceTypeModel.findOrCreate({ name: resourceTypeName }, function (err, record) {
                if (!this.respondError(err)) {
                    var resourceTypeId = record.getId();

                    resourceACLsModel.remove().where({
                        resource_type_id: resourceTypeId,
                        resource_id: resourceId
                    }).then(function (err, record) {
                        this.respondError(err) || done();
                    }, this);
                }
            }, this);
        },

        // override
        getDefaultPermissionToResources: function () {
            var params = this.getParams(),
                permission = polymita.models.ResourceACL.PERMISSION;

            switch (params.action) {
                case 'index':
                case 'count':
                case 'show':
                    return permission.READ;
                case 'update':
                    return permission.READ_AND_WRITE;
                case 'destroy':
                    return permission.READ_AND_DELETE;
            }
        }
    }
});
