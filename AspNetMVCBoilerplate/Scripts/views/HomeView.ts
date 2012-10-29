/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/jquery-1.8.d.ts"/>

declare var require: any;

import Backbone = module("Backbone");
var $ = require('jquery');

export class ClassImpl {
    public el = $("#container");

    public render() {
        $(this.el).html('<div class="hero-unit"><h1>Welcome!</h1><div><p>Enjoy coding! - TypeScript AspNetMVC-Boilerplate</p></div></div>');
    }
}

export var Class = Backbone.View.extend(new ClassImpl());
