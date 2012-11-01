declare var require: any;

import Backbone = module("Backbone");
import router = module("Router");
import mediator = module("Mediator");

export var root: string = "/";

export var initialize = function () { 

    mediator.subscribe("module:home:init", (arg) => { 
        require(["modules/home/Facade"], (home) => { 
            home.initialize();
        });
    });

    new (Backbone.Router.extend(new router.Router()))();
}
