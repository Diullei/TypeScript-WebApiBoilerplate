var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var Context = (function (_super) {
        __extends(Context, _super);
        function Context() {
            _super.apply(this, arguments);

        }
        Context.prototype.initialize = function () {
            console.log("LoginModel init.");
        };
        Context.prototype.defaults = function () {
            return {
                isAuthenticated: null,
                email: null
            };
        };
        return Context;
    })(Backbone.Model);
    exports.Context = Context;    
})
//@ sourceMappingURL=contextModel.js.map
