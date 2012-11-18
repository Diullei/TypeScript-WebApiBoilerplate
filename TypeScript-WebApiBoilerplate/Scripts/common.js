var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
    var BaseView = (function (_super) {
        __extends(BaseView, _super);
        function BaseView(dom, contaierId, options) {
            this._dom = dom;
            this.tagName = "div";
            this.el = this._dom.elementById(contaierId);
                _super.call(this, options);
        }
        BaseView.prototype.elementById = function (id) {
            return this._dom.elementById(this._id + id);
        };
        BaseView.prototype.bindClick = function (id, fn) {
            if(!this.events) {
                this.events = {
                };
            }
            this.events["click #" + this._id + id] = fn;
        };
        return BaseView;
    })(Backbone.View);
    exports.BaseView = BaseView;    
    var BaseFacade = (function () {
        function BaseFacade() { }
        return BaseFacade;
    })();
    exports.BaseFacade = BaseFacade;    
    var Util = (function () {
        function Util() { }
        Util.guid = function guid() {
            var S4 = function () {
                return Math.floor(Math.random() * 65536).toString(16);
            };
            return "_" + (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
        }
        return Util;
    })();
    exports.Util = Util;    
    var Context = (function () {
        function Context() { }
        return Context;
    })();
    exports.Context = Context;    
})
//@ sourceMappingURL=common.js.map
