var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var Register = (function (_super) {
        __extends(Register, _super);
        function Register() {
            _super.apply(this, arguments);

        }
        Register.prototype.initialize = function () {
            console.log("RegisterModel init.");
        };
        Register.prototype.defaults = function () {
            return {
                user: null,
                password: null,
                confirmPassword: null
            };
        };
        Register.prototype.validate = function (attrs) {
            if(_.isEmpty(attrs.user)) {
                return "User name is required.";
            }
            if(_.isEmpty(attrs.password)) {
                return "Password is required.";
            }
            if(attrs.password.length < 6) {
                return "The password must be at least 6 characters long.";
            }
            if(attrs.password != attrs.confirmPassword) {
                return "The password and confirmation password do not match.";
            }
            return "";
        };
        return Register;
    })(Backbone.Model);
    exports.Register = Register;    
})
//@ sourceMappingURL=registerModel.js.map
