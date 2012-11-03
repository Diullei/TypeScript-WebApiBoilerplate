declare var require: any;

import Backbone = module("Backbone");
import router = module("router");
import mediator = module("Mediator");

export var root: string = "/";

export var initialize = function () { 

    mediator.subscribe("module:home:init", (arg) => { 
        require(["modules/home/facade"], (home) => { 
            home.initialize();
        });
    });

    mediator.subscribe("module:login:init", (arg) => { 
        require(["modules/login/facade"], (login) => { 
            login.initialize();
        });
    });

    var cfg = new router.Config();
}
