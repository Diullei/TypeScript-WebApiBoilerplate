var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!./template/home.html", "../models/HomeModel", "../../../common"], function(require, exports, __template__, __homeMdl__, __common__) {
    var template = __template__;

    var homeMdl = __homeMdl__;

    var common = __common__;

    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(dom, id, contaierId, options) {
            this._id = id;
                _super.call(this, dom, contaierId, options);
        }
        Home.prototype.initialize = function () {
            console.log("Home view init.");
        };
        Home.prototype.render = function () {
            var model = new homeMdl.Home();
            var tmpl = _.template(template, model.toJSON());
            this.el.innerHTML = tmpl;
        };
        return Home;
    })(common.BaseView);
    exports.Home = Home;    
})
