/// <reference path="d.ts/backbone-0.9.d.ts"/>

import mediator = module("Mediator");

export class Router { 
    public routes: any = {
        "": "index"
    }

    public index() { 
        mediator.publish("module:home:init");
    }
}