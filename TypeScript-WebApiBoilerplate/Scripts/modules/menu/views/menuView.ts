/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../menu.d.ts"/>

import template = module("text!./template/menu.html");
import ctxMdl = module("../models/contextModel");
import common = module("../../../common");

export class Menu extends common.BaseView { 

    public model: ctxMdl.Context;

    constructor(dom: common.IDOMService, id: string, contaierId: string, options?: any) {
        this._id = id;
        super(dom, contaierId, options);
    };

    public initialize() {
        console.log("menu view init.");
    };

    public render() {
        var tmpl = _.template(<string>template, this.model.toJSON());
        this.el.innerHTML = <string><any>tmpl;
    }
}

