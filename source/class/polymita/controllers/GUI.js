/**
 * This class offers the properties and features of polymita application GUI controller.
 */
qx.Class.define('polymita.controllers.GUI', {
    extend: guaraiba.Controller,

    members: {

        /**
         * @param request {guaraiba.Request}
         * @param response {guaraiba.Response}
         * @param params {Object?} Params hash.
         */
        indexAction: function (request, response, params) {
            params.format = 'html';
            this.respond("");
        }
    }
});