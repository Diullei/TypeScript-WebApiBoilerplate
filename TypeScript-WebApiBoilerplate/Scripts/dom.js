define(["require", "exports", "common"], function(require, exports, __common__) {
    var common = __common__;

    var DOMService = (function () {
        function DOMService() { }
        DOMService.prototype.elementById = function (id) {
            return $("#" + id);
        };
        return DOMService;
    })();
    exports.DOMService = DOMService;    
})
//@ sourceMappingURL=dom.js.map
