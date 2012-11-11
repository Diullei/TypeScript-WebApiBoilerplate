define(["require", "exports", "router", "Mediator", "response", "dom"], function(require, exports, __router__, __mediator__, __response__, __dom__) {
    var router = __router__;

    var mediator = __mediator__;

    var response = __response__;

    var dom = __dom__;

    exports.root = "/";
    exports.initialize = function () {
        mediator.subscribe("module:home:init", function (arg) {
            require([
                "modules/home/facade"
            ], function (home) {
                new home.Facade(new dom.DOMService(), "container").initialize();
            });
        });
        mediator.subscribe("module:login:init", function (arg) {
            require([
                "modules/login/facade"
            ], function (login) {
                new login.Facade(new dom.DOMService(), "container").initialize();
            });
        });
        mediator.subscribe("module:login:ok", function (arg) {
            new response.ResponseService().redirect('/');
        });
        var cfg = new router.Config();
    };
})
