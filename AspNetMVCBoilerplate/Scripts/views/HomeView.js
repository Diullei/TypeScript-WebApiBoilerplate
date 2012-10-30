var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone", "template/homeTmpl"], function(require, exports, __Backbone__, __template__) {
    var Backbone = __Backbone__;

    var template = __template__;

    var Home = (function (_super) {
        __extends(Home, _super);
        function Home() {
            _super.apply(this, arguments);

            this.el = $("#container");
        }
        Home.prototype.render = function () {
            $(this.el).html(template.html);
        };
        return Home;
    })(Backbone.View);
    exports.Home = Home;    
})

