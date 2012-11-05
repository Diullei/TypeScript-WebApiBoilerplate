/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../login.d.ts"/>

import Backbone = module("Backbone");
import template = module("text!./template/login.html");
import loginMdl = module("../models/loginModel");
import services = module("../services/login");
import response = module("../services/response");

export class Login extends Backbone.View { 

    public el: HTMLElement;

    public model: loginMdl.Login;

    private _alertPanel: JQuery;

    private _btnSignIn: JQuery;

    private _service: services.LoginService;

    private _response: response.ResponseService;

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

    public trigger: (event: string, data: any) => any;

    public initialize() {
        console.log("Login view init.");
        _.bindAll(this, "signIn");
    };

    public updateModel(model: loginMdl.Login) {
        this.model = model;
        this.model.off("error");
        this.model.on("error", this.onError);
    };

    public onError(model: loginMdl.Login, error: any) { 
        console.log("On error: " + error);

        this._alertPanel = $($(".alert", this.el)[0]);
        this._alertPanel.hide();
        this._alertPanel.text(error);
        this._alertPanel.show();
    }

    public signIn() {
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

    public login() { 
        this.desableSignInButton();
        var postData = <{ user: string; password: string; }><any>this.model.toJSON();
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

    public bindForm() { 
        this.model.set(<loginMdl.ILoginModelInterface>{
            user: $(this.el).find("#inputEmail").val(),
            password: $(this.el).find("#inputPassword").val(),
        });
    }

    public render() {
        this.updateModel(this.model || new loginMdl.Login());

        var tmpl = _.template(<string>template, this.model.toJSON());
        
        // TODO: d.ts file to underscore have problem!    
        $(this.el).html(<string><any>tmpl);
        this._alertPanel = $($(".alert", this.el)[0]);
        this._btnSignIn = $($(".btn", this.el)[0]);

        this._alertPanel.hide();
    }
}
