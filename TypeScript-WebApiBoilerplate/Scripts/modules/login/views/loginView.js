var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
define(["require", "exports", "Backbone", "text!./template/login.html", "../models/loginModel"], function(require, exports, __Backbone__, __template__, __loginMdl__) {
    var Backbone = __Backbone__;

    var template = __template__;

    var loginMdl = __loginMdl__;

    
    
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login(response, service, options) {
            this.tagName = "div";
            this.el = $("#container");
            this._service = service;
            this._response = response;
            this.events = {
                "click #btn": "signIn"
            };
                _super.call(this, options);
        }
        Login.prototype.initialize = function () {
            console.log("Login view init.");
            _.bindAll(this, "signIn");
        };
        Login.prototype.updateModel = function (model) {
            this.model = model;
            this.model.off("error");
            this.model.on("error", this.onError);
        };
        Login.prototype.onError = function (model, error) {
            console.log("On error: " + error);
            this._alertPanel = $($(".alert", this.el)[0]);
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
                    _this._response.redirect('/');
                },
                onFailure: function (caught) {
                    _this.enableSignInButton();
                    _this.onError(_this.model, caught.message);
                }
            });
        };
        Login.prototype.bindForm = function () {
            this.model.set({
                user: $(this.el).find("#inputEmail").val(),
                password: $(this.el).find("#inputPassword").val()
            });
        };
        Login.prototype.render = function () {
            this.updateModel(this.model || new loginMdl.Login());
            var tmpl = _.template(template, this.model.toJSON());
            $(this.el).html(tmpl);
            this._alertPanel = $($(".alert", this.el)[0]);
            this._btnSignIn = $($(".btn", this.el)[0]);
            this._alertPanel.hide();
        };
        return Login;
    })(Backbone.View);
    exports.Login = Login;    
})

