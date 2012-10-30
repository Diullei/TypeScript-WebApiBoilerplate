define(["require", "exports", "Backbone", "views/HomeView"], function(require, exports, __Backbone__, __homeView__) {
    var Backbone = __Backbone__;

    var homeView = __homeView__;

    var Router = (function () {
        function Router() {
            this.routes = {
                "": "index"
            };
        }
        Router.prototype.index = function () {
            var view = new homeView.Home();
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

