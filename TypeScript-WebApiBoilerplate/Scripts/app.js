define(["require", "exports", "router", "Mediator"], function(require, exports, __router__, __mediator__) {
    
    var router = __router__;

    var mediator = __mediator__;

    exports.root = "/";
    exports.initialize = function () {
        mediator.subscribe("module:home:init", function (arg) {
            require([
                "modules/home/facade"
            ], function (home) {
                home.initialize();
            });
        });
        mediator.subscribe("module:login:init", function (arg) {
            require([
                "modules/login/facade"
            ], function (login) {
                login.initialize();
            });
        });
        var cfg = new router.Config();
    };
})

