define(["require", "exports", "views/HomeView"], function(require, exports, __homeView__) {
    
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
})

