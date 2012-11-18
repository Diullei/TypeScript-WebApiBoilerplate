/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../account.d.ts"/>

import template = module("text!./template/404.html");
import common = module("../../../common");

export class P404 extends common.BaseView { 

    public el: HTMLElement;

    constructor(dom: common.IDOMService, id: string, contaierId: string, options?: any) {
        this._id = id;
        super(dom, contaierId, options);
    };

    public initialize() {
        console.log("404 view init.");
    };

    public render() {
        this.el.innerHTML = <string><any>template;
    }
}
