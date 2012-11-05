var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            _super.apply(this, arguments);

        }
        Login.prototype.initialize = function () {
            console.log("LoginModel init.");
        };
        Login.prototype.defaults = function () {
            return {
                user: null,
                password: null,
                rememberMe: false
            };
        };
        Login.prototype.validate = function (attrs) {
            if(_.isEmpty(attrs.user)) {
                return "User name is required.";
            }
            if(_.isEmpty(attrs.password)) {
                return "Password is required.";
            }
            return "";
        };
        return Login;
    })(Backbone.Model);
    exports.Login = Login;    
})

