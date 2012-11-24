import loginVw = module("./views/loginView");
import registerVw = module("./views/registerView");
import loginServices = module("./services/login");
import registerServices = module("./services/register");
import common = module("../../common");
import core = module("../../core");

export class Facade extends common.BaseFacade { 

    private _context: common.Context;
    private _container: string;

    constructor (context: common.Context, container: string) { 
        this._id = common.Util.guid();
        this._context = context;
        this._container = container;
        super();
    }

    public initialize(action: string, ...args: string[]) { 
        if (this._context.isAuthenticated) { 
            core.events.trigger("module:login:ok");
            return;
        }

        if (action == 'register') { 
            var register = new registerVw.Register(this._context.domService, this._id, this._container, new registerServices.RegisterService());
            register.render();
        }
        else /*if (action == 'login')*/ { 
            var login = new loginVw.Login(this._context.domService, this._id, this._container, new loginServices.LoginService());
            login.render();

        }
    }
}
