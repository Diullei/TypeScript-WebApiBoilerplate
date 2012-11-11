/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../login.d.ts"/>

import template = module("text!./template/login.html");
import loginMdl = module("../models/loginModel");
import services = module("../services/login");
import mediator = module("../../../Mediator");
import common = module("../../../common");

export class Login extends common.BaseView { 

    public model: loginMdl.Login;

    private _alertPanel: JQuery;
    private _btnSignIn: JQuery;
    private _txtEmail: JQuery;
    private _txtPassword: JQuery;
    private _ckbRememberMe: JQuery;
    private _service: services.LoginService;

    constructor (dom: common.IDOMService, id: string, contaierId: string, service: services.LoginService, options?: any) {
        this._id = id;
        this._service = service;

        this.bindClick("_btn", "signIn");

        super(dom, contaierId, options);
    }

    private updateModel(model: loginMdl.Login) {
        this.model = model;
        this.model.off("error");
        this.model.on("error", () => { this.onError.apply(this, arguments) });
    }

    private onError(model: loginMdl.Login, error: any) { 
        console.log("On error: " + error);

        this._alertPanel = this.elementById("_alert");
        this._alertPanel.hide();
        this._alertPanel.text(error);
        this._alertPanel.show();
    }

    private signIn() {
        this._alertPanel.hide();

        this.bindForm();
        if (this.model.isValid()) { 
            var credentials = this.model.toJSON();
            credentials.id = null;
            this.login();
        }
    }

    private desableSignInButton() { 
        this._btnSignIn.text("waiting...");
        this._btnSignIn.attr("disabled", "disabled");
    }

    private enableSignInButton() { 
        this._btnSignIn.text("Sign in");
        this._btnSignIn.removeAttr("disabled");
    }

    private login() { 
        this.desableSignInButton();
        var postData = <{ user: string; password: string; rememberMe: bool; }><any>this.model.toJSON();
        this._service.doPost(postData, {
            onSuccess: (result) => { 
                this.enableSignInButton();
                mediator.publish("module:login:ok");
            },
            onFailure: (caught) => { 
                this.enableSignInButton();
                this.onError(this.model, caught.message);
            }
        });
    }

    private bindForm() { 
        this.model.set(<loginMdl.ILoginModelInterface>{
            user: this._txtEmail.val(),
            password: this._txtPassword.val(),
            rememberMe: <bool><any>this._ckbRememberMe.is(":checked")
        });
    }

    public initialize() {
        console.log("Login view init.");
        _.bindAll(this, "signIn");
    }

    public render() {
        this.updateModel(this.model || new loginMdl.Login());

        var model = this.model.toJSON();
        model.guid = this._id;
        var tmpl = _.template(<string>template, model);
        
        this.el.innerHTML = <string><any>tmpl;

        this._alertPanel = this.elementById("_alert");
        this._btnSignIn = this.elementById("_btn");
        this._txtEmail = this.elementById("_inputEmail");
        this._txtPassword = this.elementById("_inputPassword");
        this._ckbRememberMe = this.elementById("_ckb");

        this._alertPanel.hide();
    }
}
