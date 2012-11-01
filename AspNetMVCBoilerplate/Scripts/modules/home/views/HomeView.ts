/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../home.d.ts"/>

import Backbone = module("Backbone");
import template = module("text!./template/home.html");
import homeMdl = module("../models/HomeModel");

export class Home extends Backbone.View { 

    public el: HTMLElement;

    public model: homeMdl.Home;

    constructor(options?: any) {
        super(options);
        this.tagName = "div"; 
        this.el = <HTMLElement><any>$("#container");
    };

    public initialize() {
        console.log("Home view init.");
    };

    public render() {
        var model = new homeMdl.Home();
        
        var tmpl = _.template(<string>template, model.toJSON());
        
        // TODO: d.ts file to underscore have problem!    
        $(this.el).html(<string><any>tmpl);
    }
}
