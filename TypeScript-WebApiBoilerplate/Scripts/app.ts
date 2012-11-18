import router = module("router");
import core = module("core");
import response = module("response");
import dom = module("dom");
import common = module("common");

declare var require: any;

export var root: string = "/";

export var initialize = function () { 

    core.events.on("account:account:init", (action: string) => { 
        require(["modules/account/facade", "json!/Account/Context"], (account, data) => { 

            var context = new common.Context();

            context.container = "container";
            context.domService = new dom.DOMService();
            context.isAuthenticated = data.isAuthenticated;

            new account.Facade(context).initialize(action);
        });
    });

    core.events.on("module:home:init", (arg) => { 
        require(["modules/home/facade"], (home) => { 
            new home.Facade(new dom.DOMService(), "container").initialize();
        });
    });

    core.events.on("module:login:ok", (arg) => { 
        new response.ResponseService().redirect('/');
    });

    core.events.on("account:register:ok", (arg) => { 
        new response.ResponseService().redirect('/');
    });

    var cfg = new router.Config();
}
