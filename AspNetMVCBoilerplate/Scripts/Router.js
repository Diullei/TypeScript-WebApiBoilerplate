define(["require", "exports", "Mediator"], function(require, exports, __mediator__) {
    var mediator = __mediator__;

    var Router = (function () {
        function Router() {
            this.routes = {
                "": "index"
            };
        }
        Router.prototype.index = function () {
            mediator.publish("module:home:init");
        };
        return Router;
    })();
    exports.Router = Router;    
})

