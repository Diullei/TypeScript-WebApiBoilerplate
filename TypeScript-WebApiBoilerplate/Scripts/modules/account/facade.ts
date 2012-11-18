import loginVw = module("./views/loginView");
import registerVw = module("./views/registerView");
import p404Vw = module("./views/p404View");
import loginServices = module("./services/login");
import registerServices = module("./services/register");
import common = module("../../common");
import core = module("../../core");

export class Facade extends common.BaseFacade { 

    private _context: common.Context;

    constructor (context: common.Context) { 
        this._id = common.Util.guid();
        this._context = context;
        super();
    }

    public initialize(action: string, ...args: string[]) { 
        if (this._context.isAuthenticated) { 
            core.events.trigger("module:login:ok");
            return;
        }

        if (action == 'login') { 
            var login = new loginVw.Login(this._context.domService, this._id, this._context.container, new loginServices.LoginService());
            login.render();

        } else if (action == 'register') { 
            var register = new registerVw.Register(this._context.domService, this._id, this._context.container, new registerServices.RegisterService());
            register.render();

        } else { 
            var p404 = new p404Vw.P404(this._context.domService, this._id, this._context.container);
            p404.render();
        }
    }
}
