/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import HomeViewModule = module("views/HomeView");

var HomeView = HomeViewModule.Class;

export class Router { 
    public routes: any = {
        "": "index"
    }

    public index() { 
        var view = <HomeViewModule.ClassImpl>new HomeView();
        view.render();
    }
}

export var root: string = "/";
export var initialize = function () { 
    new (Backbone.Router.extend(new Router()))();
}
