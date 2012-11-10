declare var require: any;

import Backbone = module("Backbone");
import router = module("router");
import mediator = module("Mediator");
import response = module("response");

export var root: string = "/";

export var initialize = function () { 

    mediator.subscribe("module:home:init", (arg) => { 
        require(["modules/home/facade"], (home) => { 
            new home.Facade("#container").initialize();
        });
    });

    mediator.subscribe("module:login:init", (arg) => { 
        require(["modules/login/facade"], (login) => { 
            new login.Facade("#container").initialize();
        });
    });

    mediator.subscribe("module:login:ok", (arg) => { 
        new response.ResponseService().redirect('/');
    });

    var cfg = new router.Config();
}
