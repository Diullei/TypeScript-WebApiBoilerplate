define(["require", "exports", "router", "core", "response", "dom", "common"], function(require, exports, __router__, __core__, __response__, __dom__, __common__) {
    var router = __router__;

    var core = __core__;

    var response = __response__;

    var dom = __dom__;

    var common = __common__;

    exports.root = "/";
    exports.initialize = function () {
        core.events.on("account:account:init", function (action) {
            require([
                "modules/menu/facade", 
                "modules/account/facade", 
                "json!/Account/Context"
            ], function (menu, account, data) {
                if(!data.isAuthenticated && action != "login" && action != "register") {
                    core.events.trigger("account:account:init", "login");
                    return;
                }
                var context = new common.Context();
                context.domService = new dom.DOMService();
                context.isAuthenticated = data.isAuthenticated;
                context.email = data.email;
                new menu.Facade(context, "head").initialize();
                new account.Facade(context, "container").initialize(action);
            });
        });
        core.events.on("module:home:init", function (arg) {
            require([
                "modules/menu/facade", 
                "modules/home/facade", 
                "json!/Account/Context"
            ], function (menu, home, data) {
                if(!data.isAuthenticated) {
                    core.events.trigger("account:account:init", "login");
                    return;
                }
                var context = new common.Context();
                context.domService = new dom.DOMService();
                context.isAuthenticated = data.isAuthenticated;
                context.email = data.email;
                new menu.Facade(context, "head").initialize();
                new home.Facade(new dom.DOMService(), "container").initialize();
            });
        });
        core.events.on("module:login:ok", function (arg) {
            new response.ResponseService().redirect('/');
        });
        core.events.on("account:register:ok", function (arg) {
            new response.ResponseService().redirect('/');
        });
        var cfg = new router.Config();
    };
})
//@ sourceMappingURL=app.js.map
