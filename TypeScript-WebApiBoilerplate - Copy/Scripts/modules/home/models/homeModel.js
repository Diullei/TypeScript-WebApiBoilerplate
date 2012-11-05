var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var Home = (function (_super) {
        __extends(Home, _super);
        function Home() {
            _super.apply(this, arguments);

        }
        Home.prototype.initialize = function () {
            console.log("HomeModel init.");
        };
        Home.prototype.defaults = function () {
            return {
                title: 'Welcome!',
                text: 'Enjoy coding! - TypeScript AspNetMVC-Boilerplate'
            };
        };
        Home.prototype.validate = function (attrs) {
            if(_.isEmpty(attrs.title)) {
                return "Title is required.";
            }
            if(_.isEmpty(attrs.text)) {
                return "Text is required.";
            }
            return "";
        };
        return Home;
    })(Backbone.Model);
    exports.Home = Home;    
})

