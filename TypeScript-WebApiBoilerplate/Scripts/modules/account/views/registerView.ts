/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../account.d.ts"/>

import template = module("text!./template/register.html");
import registerMdl = module("../models/registerModel");
import services = module("../services/register");
import core = module("../../../core");
import common = module("../../../common");

export class Register extends common.BaseView {
    
    public model: registerMdl.Register;

    private _alertPanel: JQuery;
    private _btnRegister: JQuery;
    private _txtEmail: JQuery;
    private _txtPassword: JQuery;
    private _txtConfirmPassword: JQuery;
    private _service: services.RegisterService;

    constructor (dom: common.IDOMService, id: string, contaierId: string, service: services.RegisterService, options?: any) {
        this._id = id;
        this._service = service;

        this.bindClick("_btn", "register");

        super(dom, contaierId, options);
    }

    private updateModel(model: registerMdl.Register) {
        this.model = model;
        this.model.off("error");
        this.model.on("error", () => { this.onError.apply(this, arguments) });
    }

    private onError(model: registerMdl.Register, error: any) { 
        console.log("On error: " + error);

        this._alertPanel = this.elementById("_alert");
        this._alertPanel.hide();
        this._alertPanel.text(error);
        this._alertPanel.show();
    }

    public initialize() {
        console.log("Login view init.");
        _.bindAll(this, "register");
    }

    private register() {
        this._alertPanel.hide();

        this.bindForm();
        if (this.model.isValid()) { 
            this.doRegister();
        }
    }

    private desableRegisterButton() { 
        this._btnRegister.text("waiting...");
        this._btnRegister.attr("disabled", "disabled");
    }

    private enableRegisterButton() { 
        this._btnRegister.text("Sign in");
        this._btnRegister.removeAttr("disabled");
    }

    private doRegister() { 
        this.desableRegisterButton();
        var postData = <{ user: string; password: string; confirmPassword: string; }><any>this.model.toJSON();
        this._service.doPost(postData, {
            onSuccess: (result) => { 
                this.enableRegisterButton();
                core.events.trigger("account:register:ok");
            },
            onFailure: (caught) => { 
                this.enableRegisterButton();
                this.onError(this.model, caught.message);
            }
        });
    }

    private bindForm() { 
        this.model.set(<registerMdl.IRegisterModelInterface>{
            user: this._txtEmail.val(),
            password: this._txtPassword.val(),
            confirmPassword: this._txtConfirmPassword.val()
        });
    }

    public render() {
        this.updateModel(this.model || new registerMdl.Register());

        var model = this.model.toJSON();
        model.guid = this._id;
        var tmpl = _.template(<string>template, model);
        
        this.el.innerHTML = <string><any>tmpl;

        this._alertPanel = this.elementById("_alert");
        this._btnRegister = this.elementById("_btn");
        this._txtEmail = this.elementById("_inputEmail");
        this._txtPassword = this.elementById("_inputPassword");
        this._txtConfirmPassword = this.elementById("_inputConfirmPassword");

        this._alertPanel.hide();
    }
}