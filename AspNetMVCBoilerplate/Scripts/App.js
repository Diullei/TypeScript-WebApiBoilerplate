define(["require", "exports", "Backbone", "Router"], function(require, exports, __Backbone__, __router__) {
    var Backbone = __Backbone__;

    var router = __router__;

    exports.root = "/";
    exports.initialize = function () {
        new (Backbone.Router.extend(new router.Router()))();
    };
})

