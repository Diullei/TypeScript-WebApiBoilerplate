/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/jquery-1.8.d.ts"/>

import Backbone = module("Backbone");
import template = module("template/homeTmpl");

export class Home extends Backbone.View { 
    public el: HTMLElement = <any>$("#container");

    public render() {
        $(this.el).html(template.html);
    }
}
