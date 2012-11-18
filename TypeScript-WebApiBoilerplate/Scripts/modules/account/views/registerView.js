var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!./template/register.html", "../models/registerModel", "../../../core", "../../../common"], function(require, exports, __template__, __registerMdl__, __core__, __common__) {
    var template = __template__;

    var registerMdl = __registerMdl__;

    
    var core = __core__;

    var common = __common__;

    var Register = (function (_super) {
        __extends(Register, _super);
        function Register(dom, id, contaierId, service, options) {
            this._id = id;
            this._service = service;
            this.bindClick("_btn", "register");
                _super.call(this, dom, contaierId, options);
        }
        Register.prototype.updateModel = function (model) {
            var _this = this;
            this.model = model;
            this.model.off("error");
            this.model.on("error", function () {
                _this.onError.apply(_this, arguments);
            });
        };
        Register.prototype.onError = function (model, error) {
            console.log("On error: " + error);
            this._alertPanel = this.elementById("_alert");
            this._alertPanel.hide();
            this._alertPanel.text(error);
            this._alertPanel.show();
        };
        Register.prototype.initialize = function () {
            console.log("Login view init.");
            _.bindAll(this, "register");
        };
        Register.prototype.register = function () {
            this._alertPanel.hide();
            this.bindForm();
            if(this.model.isValid()) {
                this.doRegister();
            }
        };
        Register.prototype.desableRegisterButton = function () {
            this._btnRegister.text("waiting...");
            this._btnRegister.attr("disabled", "disabled");
        };
        Register.prototype.enableRegisterButton = function () {
            this._btnRegister.text("Sign in");
            this._btnRegister.removeAttr("disabled");
        };
        Register.prototype.doRegister = function () {
            var _this = this;
            this.desableRegisterButton();
            var postData = this.model.toJSON();
            this._service.doPost(postData, {
                onSuccess: function (result) {
                    _this.enableRegisterButton();
                    core.events.trigger("account:register:ok");
                },
                onFailure: function (caught) {
                    _this.enableRegisterButton();
                    _this.onError(_this.model, caught.message);
                }
            });
        };
        Register.prototype.bindForm = function () {
            this.model.set({
                user: this._txtEmail.val(),
                password: this._txtPassword.val(),
                confirmPassword: this._txtConfirmPassword.val()
            });
        };
        Register.prototype.render = function () {
            this.updateModel(this.model || new registerMdl.Register());
            var model = this.model.toJSON();
            model.guid = this._id;
            var tmpl = _.template(template, model);
            this.el.innerHTML = tmpl;
            this._alertPanel = this.elementById("_alert");
            this._btnRegister = this.elementById("_btn");
            this._txtEmail = this.elementById("_inputEmail");
            this._txtPassword = this.elementById("_inputPassword");
            this._txtConfirmPassword = this.elementById("_inputConfirmPassword");
            this._alertPanel.hide();
        };
        return Register;
    })(common.BaseView);
    exports.Register = Register;    
})
//@ sourceMappingURL=registerView.js.map
