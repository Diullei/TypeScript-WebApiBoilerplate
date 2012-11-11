var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!./template/login.html", "../models/loginModel", "../../../Mediator", "../../../common"], function(require, exports, __template__, __loginMdl__, __mediator__, __common__) {
    var template = __template__;

    var loginMdl = __loginMdl__;

    
    var mediator = __mediator__;

    var common = __common__;

    var Login = (function (_super) {
        __extends(Login, _super);
        function Login(dom, id, contaierId, service, options) {
            this._id = id;
            this._service = service;
            this.bindClick("_btn", "signIn");
                _super.call(this, dom, contaierId, options);
        }
        Login.prototype.updateModel = function (model) {
            var _this = this;
            this.model = model;
            this.model.off("error");
            this.model.on("error", function () {
                _this.onError.apply(_this, arguments);
            });
        };
        Login.prototype.onError = function (model, error) {
            console.log("On error: " + error);
            this._alertPanel = this.elementById("_alert");
            this._alertPanel.hide();
            this._alertPanel.text(error);
            this._alertPanel.show();
        };
        Login.prototype.signIn = function () {
            this._alertPanel.hide();
            this.bindForm();
            if(this.model.isValid()) {
                var credentials = this.model.toJSON();
                credentials.id = null;
                this.login();
            }
        };
        Login.prototype.desableSignInButton = function () {
            this._btnSignIn.text("waiting...");
            this._btnSignIn.attr("disabled", "disabled");
        };
        Login.prototype.enableSignInButton = function () {
            this._btnSignIn.text("Sign in");
            this._btnSignIn.removeAttr("disabled");
        };
        Login.prototype.login = function () {
            var _this = this;
            this.desableSignInButton();
            var postData = this.model.toJSON();
            this._service.doPost(postData, {
                onSuccess: function (result) {
                    _this.enableSignInButton();
                    mediator.publish("module:login:ok");
                },
                onFailure: function (caught) {
                    _this.enableSignInButton();
                    _this.onError(_this.model, caught.message);
                }
            });
        };
        Login.prototype.bindForm = function () {
            this.model.set({
                user: this._txtEmail.val(),
                password: this._txtPassword.val(),
                rememberMe: this._ckbRememberMe.is(":checked")
            });
        };
        Login.prototype.initialize = function () {
            console.log("Login view init.");
            _.bindAll(this, "signIn");
        };
        Login.prototype.render = function () {
            this.updateModel(this.model || new loginMdl.Login());
            var model = this.model.toJSON();
            model.guid = this._id;
            var tmpl = _.template(template, model);
            this.el.innerHTML = tmpl;
            this._alertPanel = this.elementById("_alert");
            this._btnSignIn = this.elementById("_btn");
            this._txtEmail = this.elementById("_inputEmail");
            this._txtPassword = this.elementById("_inputPassword");
            this._ckbRememberMe = this.elementById("_ckb");
            this._alertPanel.hide();
        };
        return Login;
    })(common.BaseView);
    exports.Login = Login;    
})
