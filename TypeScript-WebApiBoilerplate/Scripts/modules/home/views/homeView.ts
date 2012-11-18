/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../home.d.ts"/>

import template = module("text!./template/home.html");
import homeMdl = module("../models/homeModel");
import common = module("../../../common");

export class Home extends common.BaseView { 

    public el: HTMLElement;
    public model: homeMdl.Home;

    constructor(dom: common.IDOMService, id: string, contaierId: string, options?: any) {
        this._id = id;
        super(dom, contaierId, options);
    };

    public initialize() {
        console.log("Home view init.");
    };

    public render() {
        var model = new homeMdl.Home();
        var tmpl = _.template(<string>template, model.toJSON());

        this.el.innerHTML = <string><any>tmpl;
    }
}
