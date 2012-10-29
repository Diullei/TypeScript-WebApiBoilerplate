define(["require", "exports", "Backbone", "views/HomeView"], function(require, exports, __Backbone__, __HomeViewModule__) {
    var Backbone = __Backbone__;

    var HomeViewModule = __HomeViewModule__;

    var HomeView = HomeViewModule.Class;
    var Router = (function () {
        function Router() {
            this.routes = {
                "": "index"
            };
        }
        Router.prototype.index = function () {
            var view = new HomeView();
            view.render();
        };
        return Router;
    })();
    exports.Router = Router;    
    exports.root = "/";
    exports.initialize = function () {
        new (Backbone.Router.extend(new Router()))();
    };
})

