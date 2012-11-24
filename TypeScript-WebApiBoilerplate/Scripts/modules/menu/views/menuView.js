var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!./template/menu.html", "../../../common"], function(require, exports, __template__, __common__) {
    var template = __template__;

    
    var common = __common__;

    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu(dom, id, contaierId, options) {
            this._id = id;
                _super.call(this, dom, contaierId, options);
        }
        Menu.prototype.initialize = function () {
            console.log("menu view init.");
        };
        Menu.prototype.render = function () {
            var tmpl = _.template(template, this.model.toJSON());
            this.el.innerHTML = tmpl;
        };
        return Menu;
    })(common.BaseView);
    exports.Menu = Menu;    
})
//@ sourceMappingURL=menuView.js.map
