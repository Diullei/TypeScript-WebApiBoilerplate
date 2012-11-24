import router = module("router");
import core = module("core");
import response = module("response");
import dom = module("dom");
import common = module("common");

declare var require: any;

export var root: string = "/";

export var initialize = function () { 

    core.events.on("account:account:init", (action: string) => { 
        require(["modules/menu/facade", "modules/account/facade", "json!/Account/Context"], (menu, account, data) => { 

            if (!data.isAuthenticated && action != "login" && action != "register") { 
                core.events.trigger("account:account:init", "login");
                return;
            }

            var context = new common.Context();
            context.domService = new dom.DOMService();
            context.isAuthenticated = data.isAuthenticated;
            context.email = data.email;

            new menu.Facade(context, "head").initialize();
            new account.Facade(context, "container").initialize(action);
        });
    });

    core.events.on("module:home:init", (arg) => { 
        require(["modules/menu/facade", "modules/home/facade", "json!/Account/Context"], (menu, home, data) => { 

            if (!data.isAuthenticated) { 
                core.events.trigger("account:account:init", "login");
                return;
            }

            var context = new common.Context();
            context.domService = new dom.DOMService();
            context.isAuthenticated = data.isAuthenticated;
            context.email = data.email;

            new menu.Facade(context, "head").initialize();
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
