/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/jquery-1.8.d.ts"/>

import Backbone = module("Backbone");
import template = module("template/homeTmpl");
import homeModel = module("../models/HomeModel");

export class Home extends Backbone.View { 
    public el: HTMLElement = <any>$("#container");

    public render() {
        var model = new homeModel.HomeModel();
        console.log(model);
        $(this.el).html(template.html);
    }
}
