/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../login.d.ts"/>

import Backbone = module("Backbone");
import template = module("text!./template/login.html");
import loginMdl = module("../models/loginModel");
import services = module("../services/login");
import response = module("../services/response");

export class Login extends Backbone.View { 

    private _alertPanel: JQuery;
    private _btnSignIn: JQuery;
    private _txtEmail: JQuery;
    private _txtPassword: JQuery;
    private _ckbRememberMe: JQuery;
    private _service: services.LoginService;
    private _response: response.ResponseService;

    public el: HTMLElement;
    public model: loginMdl.Login;
    public trigger: (event: string, data: any) => any;

    constructor(response: response.ResponseService, service: services.LoginService, options?: any) {
        this.tagName = "div"; 
        this.el = <HTMLElement><any>$("#container");
        this._service = service;
        this._response = response;

        this.events = {
            "click #btn": "signIn"
        };

        super(options);
    };

    private updateModel(model: loginMdl.Login) {
        this.model = model;
        this.model.off("error");
        this.model.on("error", this.onError);
    };

    private onError(model: loginMdl.Login, error: any) { 
        console.log("On error: " + error);

        this._alertPanel = $($(".alert", this.el)[0]);
        this._alertPanel.hide();
        this._alertPanel.text(error);
        this._alertPanel.show();
    }

    private signIn() {
        this._alertPanel.hide();

        this.bindForm();
        if (this.model.isValid()) { 
            var credentials = <Backbone.Model><any>this.model.toJSON();
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
                this._response.redirect('/');
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

        var tmpl = _.template(<string>template, this.model.toJSON());
        
        $(this.el).html(<string><any>tmpl);

        this._alertPanel = $($(".alert", this.el)[0]);
        this._btnSignIn = $($(".btn", this.el)[0]);
        this._txtEmail = $(this.el).find("#inputEmail");
        this._txtPassword = $(this.el).find("#inputPassword");
        this._ckbRememberMe = $("input[type='checkbox']", this.el);

        this._alertPanel.hide();
    }
}
