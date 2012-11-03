var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    
    var ActionFilterArgument = (function () {
        function ActionFilterArgument() { }
        return ActionFilterArgument;
    })();
    exports.ActionFilterArgument = ActionFilterArgument;    
    var AppRouter = (function (_super) {
        __extends(AppRouter, _super);
        function AppRouter() {
            _super.apply(this, arguments);

            this._index = 0;
        }
        AppRouter.prototype.bindRoute = function (route, response) {
            var filters = [];
            for (var _i = 0; _i < (arguments.length - 2); _i++) {
                filters[_i] = arguments[_i + 2];
            }
            var cancel = false;
            for(var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                var arg = new ActionFilterArgument();
                arg.route = route;
                arg.instance = this;
                filter.onBefore(arg);
                cancel = arg.cancel;
            }
            if(!cancel) {
                this.route(route, "rote" + (this._index++), response);
            }
            for(var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                filter.onAfter();
            }
        };
        return AppRouter;
    })(Backbone.Router);
    exports.AppRouter = AppRouter;    
})

