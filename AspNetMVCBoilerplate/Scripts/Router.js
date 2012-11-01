define(["require", "exports", "Mediator"], function(require, exports, __mediator__) {
    var mediator = __mediator__;

    var Config = (function () {
        function Config() {
            this.routes = {
                "": "index"
            };
        }
        Config.prototype.index = function () {
            mediator.publish("module:home:init");
        };
        return Config;
    })();
    exports.Config = Config;    
})

