define(["require", "exports"], function(require, exports) {
    var ResponseService = (function () {
        function ResponseService() { }
        ResponseService.prototype.redirect = function (url) {
            window.location = url;
        };
        return ResponseService;
    })();
    exports.ResponseService = ResponseService;    
})
