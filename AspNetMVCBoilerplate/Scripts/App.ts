/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import homeView = module("views/HomeView");

export class Router { 
    public routes: any = {
        "": "index"
    }

    public index() { 
        var view = new homeView.Home();
        view.render();
    }
}

export var root: string = "/";
export var initialize = function () { 
    new (Backbone.Router.extend(new Router()))();
}
