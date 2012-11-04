/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../login.d.ts"/>

import Backbone = module("Backbone");
import template = module("text!./template/login.html");
import loginMdl = module("../models/loginModel");

export class Home extends Backbone.View { 

    public el: HTMLElement;

    public model: loginMdl.Login;

    constructor(options?: any) {
        super(options);
        this.tagName = "div"; 
        this.el = <HTMLElement><any>$("#container");
    };

    public initialize() {
        console.log("Home view init.");
    };

    public render() {
        var model = new loginMdl.Login();
        
        var tmpl = _.template(<string>template, model.toJSON());
        
        // TODO: d.ts file to underscore have problem!    
        $(this.el).html(<string><any>tmpl);
    }
}
