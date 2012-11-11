import router = module("router");
import mediator = module("Mediator");
import response = module("response");
import dom = module("dom");

declare var require: any;

export var root: string = "/";

export var initialize = function () { 

    mediator.subscribe("module:home:init", (arg) => { 
        require(["modules/home/facade"], (home) => { 
            new home.Facade(new dom.DOMService(), "container").initialize();
        });
    });

    mediator.subscribe("module:login:init", (arg) => { 
        require(["modules/login/facade"], (login) => { 
            new login.Facade(new dom.DOMService(), "container").initialize();
        });
    });

    mediator.subscribe("module:login:ok", (arg) => { 
        new response.ResponseService().redirect('/');
    });

    var cfg = new router.Config();
}
