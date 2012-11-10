import loginVw = module("./views/loginView");
import services = module("./services/login");
import common = module("../../common");

export class Facade extends common.BaseFacade { 

    constructor (container: string) { 
        this._id = common.Util.guid();
        this._container = container;
        super();
    }

    public initialize() { 
        var view = new loginVw.Login(this._id, this._container, new services.LoginService());
        view.render();
    }
}
