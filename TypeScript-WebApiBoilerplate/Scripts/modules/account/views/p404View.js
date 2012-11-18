var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!./template/404.html", "../../../common"], function(require, exports, __template__, __common__) {
    var template = __template__;

    var common = __common__;

    var P404 = (function (_super) {
        __extends(P404, _super);
        function P404(dom, id, contaierId, options) {
            this._id = id;
                _super.call(this, dom, contaierId, options);
        }
        P404.prototype.initialize = function () {
            console.log("404 view init.");
        };
        P404.prototype.render = function () {
            this.el.innerHTML = template;
        };
        return P404;
    })(common.BaseView);
    exports.P404 = P404;    
})
//@ sourceMappingURL=p404View.js.map
