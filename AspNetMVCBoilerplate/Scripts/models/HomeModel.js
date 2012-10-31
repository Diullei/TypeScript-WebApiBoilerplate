var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var HomeModel = (function (_super) {
        __extends(HomeModel, _super);
        function HomeModel() {
            _super.apply(this, arguments);

        }
        HomeModel.prototype.initialize = function () {
            console.log("HomeModel init.");
        };
        HomeModel.prototype.defaults = function () {
            return {
                title: 'Welcome!',
                text: 'Enjoy coding! - TypeScript AspNetMVC-Boilerplate'
            };
        };
        HomeModel.prototype.validate = function (attrs) {
            if(_.isEmpty(attrs.title)) {
                return "Title is required.";
            }
            if(_.isEmpty(attrs.text)) {
                return "Text is required.";
            }
            return "";
        };
        return HomeModel;
    })(Backbone.Model);
    exports.HomeModel = HomeModel;    
})

