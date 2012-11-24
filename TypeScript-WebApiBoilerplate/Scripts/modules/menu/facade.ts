import menuVw = module("./views/menuView");
import ctxMdl = module("./models/contextModel");
import common = module("../../common");

export class Facade extends common.BaseFacade { 

    private _context: common.Context;
    private _container: string;

    constructor (context: common.Context, container: string) { 
        this._id = common.Util.guid();
        this._context = context;
        this._container = container;
        super();
    }

    public initialize() { 
        var view = new menuVw.Menu(this._context.domService, this._id, this._container);
        var model = new ctxMdl.Context();
        model.set("isAuthenticated", this._context.isAuthenticated);
        model.set("email", this._context.email);
        view.model = model;
        view.render();
    }
}
