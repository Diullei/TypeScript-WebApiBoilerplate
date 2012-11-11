var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./views/loginView", "./services/login", "../../common"], function(require, exports, __loginVw__, __services__, __common__) {
    var loginVw = __loginVw__;

    var services = __services__;

    var common = __common__;

    var Facade = (function (_super) {
        __extends(Facade, _super);
        function Facade(dom, container) {
            this._dom = dom;
            this._id = common.Util.guid();
            this._container = container;
                _super.call(this);
        }
        Facade.prototype.initialize = function () {
            var view = new loginVw.Login(this._dom, this._id, this._container, new services.LoginService());
            view.render();
        };
        return Facade;
    })(common.BaseFacade);
    exports.Facade = Facade;    
})
