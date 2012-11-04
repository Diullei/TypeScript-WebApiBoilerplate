var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Mediator", "common"], function(require, exports, __mediator__, __common__) {
    
    var mediator = __mediator__;

    var common = __common__;

    var Auth = (function () {
        function Auth() { }
        Auth.prototype.onBefore = function (arg) {
            var router = arg.instance;
        };
        Auth.prototype.onAfter = function () {
        };
        return Auth;
    })();
    exports.Auth = Auth;    
    var Config = (function (_super) {
        __extends(Config, _super);
        function Config() {
                _super.call(this);
            this.bindRoute("", this.index, new Auth());
            this.bindRoute("login", this.login);
        }
        Config.prototype.index = function () {
            console.log('index');
            mediator.publish("module:home:init");
        };
        Config.prototype.login = function () {
            console.log('login');
            mediator.publish("module:login:init");
        };
        return Config;
    })(common.AppRouter);
    exports.Config = Config;    
})

