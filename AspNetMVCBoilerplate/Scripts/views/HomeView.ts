/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/jquery-1.8.d.ts"/>

declare var require: any;

import Backbone = module("Backbone");
import template = module("template/homeTmpl");

export class ClassImpl {
    public el = $("#container");

    public render() {
        $(this.el).html(template.html);
    }
}

export var Class = Backbone.View.extend(new ClassImpl());
