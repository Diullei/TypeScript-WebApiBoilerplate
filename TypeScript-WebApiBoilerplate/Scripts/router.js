var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "core", "common"], function(require, exports, __core__, __common__) {
    
    var core = __core__;

    var common = __common__;

    var Config = (function (_super) {
        __extends(Config, _super);
        function Config() {
                _super.call(this);
            this.bindRoute("", this.index);
            this.bindRoute("account/:action", this.account);
        }
        Config.prototype.index = function () {
            core.events.trigger("module:home:init");
        };
        Config.prototype.account = function (action) {
            core.events.trigger("account:account:init", action);
        };
        return Config;
    })(common.AppRouter);
    exports.Config = Config;    
})
//@ sourceMappingURL=router.js.map
