define(["require", "exports", "Backbone", "Router", "Mediator"], function(require, exports, __Backbone__, __router__, __mediator__) {
    var Backbone = __Backbone__;

    var router = __router__;

    var mediator = __mediator__;

    exports.root = "/";
    exports.initialize = function () {
        mediator.subscribe("module:home:init", function (arg) {
            require([
                "modules/home/Facade"
            ], function (home) {
                home.initialize();
            });
        });
        new (Backbone.Router.extend(new router.Router()))();
    };
})

