var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./views/menuView", "./models/contextModel", "../../common"], function(require, exports, __menuVw__, __ctxMdl__, __common__) {
    var menuVw = __menuVw__;

    var ctxMdl = __ctxMdl__;

    var common = __common__;

    var Facade = (function (_super) {
        __extends(Facade, _super);
        function Facade(context, container) {
            this._id = common.Util.guid();
            this._context = context;
            this._container = container;
                _super.call(this);
        }
        Facade.prototype.initialize = function () {
            var view = new menuVw.Menu(this._context.domService, this._id, this._container);
            var model = new ctxMdl.Context();
            model.set("isAuthenticated", this._context.isAuthenticated);
            model.set("email", this._context.email);
            view.model = model;
            view.render();
        };
        return Facade;
    })(common.BaseFacade);
    exports.Facade = Facade;    
})
//@ sourceMappingURL=facade.js.map
