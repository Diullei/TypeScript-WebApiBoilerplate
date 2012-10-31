var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone", "template/homeTmpl", "../models/HomeModel"], function(require, exports, __Backbone__, __template__, __homeModel__) {
    var Backbone = __Backbone__;

    var template = __template__;

    var homeModel = __homeModel__;

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
            var model = new homeModel.Home();
            var tmpl = _.template(template.html, model.toJSON());
            $(this.el).html(tmpl);
        };
        return Home;
    })(Backbone.View);
    exports.Home = Home;    
})

