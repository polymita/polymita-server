/**
 * This class offers the properties and features of polymita application session controller.
 */
qx.Class.define('polymita.controllers.Session', {
    extend: guaraiba.controllers.AuthController,

    members: {

        // override
        _findFirstUser: function (username, proceed) {
            var model = this.getModel(polymita.models.User);

            model.first().where({ username: username }).then(function (err, user) {
                if (!this.respondError(err)) {
                    if (!user) {
                        this.respordWithStatusForbidden('Bad credential.');
                    } else {
                        // Continue with normal workflow of login action.
                        proceed(null, user);
                    }
                }
            }, this);
        }
    }
});
