/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/jquery-1.8.d.ts"/>

import Backbone = module("Backbone");
import template = module("template/homeTmpl");
import homeModel = module("../models/HomeModel");

export class Home extends Backbone.View { 

    public el: HTMLElement;

    public model: homeModel.Home;

    constructor(options?: any) {
        super(options);
        this.tagName = "div"; 
        this.el = <HTMLElement><any>$("#container");
    };    

    initialize() {
        console.log("Home view init.");
    };

    public render() {
        var model = new homeModel.Home();
        
        var tmpl = _.template(template.html, model.toJSON());
        
        // TODO: d.ts file to unders core have problem!    
        $(this.el).html(<string><any>tmpl);
    }
}
