/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../home.d.ts"/>

import Backbone = module("Backbone");
import template = module("text!./template/home.html");
import homeMdl = module("../models/HomeModel");
import common = module("../../../common");

export class Home extends common.BaseView { 

    public el: HTMLElement;
    public model: homeMdl.Home;

    constructor(id: string, contaierId: string, options?: any) {
        this._id = id;
        this.el = <HTMLElement><any>$(contaierId);
        super(options);
    };

    public initialize() {
        console.log("Home view init.");
    };

    public render() {
        var model = new homeMdl.Home();
        var tmpl = _.template(<string>template, model.toJSON());

        $(this.el).html(<string><any>tmpl);
    }
}
