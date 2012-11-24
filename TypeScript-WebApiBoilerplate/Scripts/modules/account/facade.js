var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./views/loginView", "./views/registerView", "./services/login", "./services/register", "../../common", "../../core"], function(require, exports, __loginVw__, __registerVw__, __loginServices__, __registerServices__, __common__, __core__) {
    var loginVw = __loginVw__;

    var registerVw = __registerVw__;

    var loginServices = __loginServices__;

    var registerServices = __registerServices__;

    var common = __common__;

    var core = __core__;

    var Facade = (function (_super) {
        __extends(Facade, _super);
        function Facade(context, container) {
            this._id = common.Util.guid();
            this._context = context;
            this._container = container;
                _super.call(this);
        }
        Facade.prototype.initialize = function (action) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if(this._context.isAuthenticated) {
                core.events.trigger("module:login:ok");
                return;
            }
            if(action == 'register') {
                var register = new registerVw.Register(this._context.domService, this._id, this._container, new registerServices.RegisterService());
                register.render();
            } else {
                var login = new loginVw.Login(this._context.domService, this._id, this._container, new loginServices.LoginService());
                login.render();
            }
        };
        return Facade;
    })(common.BaseFacade);
    exports.Facade = Facade;    
})
//@ sourceMappingURL=facade.js.map
