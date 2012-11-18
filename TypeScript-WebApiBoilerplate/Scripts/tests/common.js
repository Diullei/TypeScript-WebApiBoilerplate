define(["require", "exports", "../common"], function(require, exports, __common__) {
    var common = __common__;

    var FakeDOMService = (function () {
        function FakeDOMService(obj) {
            this.els = [];
            this._obj = obj;
        }
        FakeDOMService.prototype.elementById = function (id) {
            var $this = this;
            var ret = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                return this._obj;
            };
            this.els.push(ret);
            return ret;
        };
        return FakeDOMService;
    })();
    exports.FakeDOMService = FakeDOMService;    
})
//@ sourceMappingURL=common.js.map
