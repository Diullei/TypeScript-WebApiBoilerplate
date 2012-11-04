var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone", "text!./template/login.html", "../models/loginModel"], function(require, exports, __Backbone__, __template__, __loginMdl__) {
    var Backbone = __Backbone__;

    var template = __template__;

    var loginMdl = __loginMdl__;

    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(options) {
                _super.call(this, options);
            this.tagName = "div";
            this.el = $("#container");
        }
        Home.prototype.initialize = function () {
            console.log("Home view init.");
        };
        Home.prototype.render = function () {
            var model = new loginMdl.Login();
            var tmpl = _.template(template, model.toJSON());
            $(this.el).html(tmpl);
        };
        return Home;
    })(Backbone.View);
    exports.Home = Home;    
})

