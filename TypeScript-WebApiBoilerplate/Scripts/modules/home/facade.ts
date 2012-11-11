import homeVw = module("./views/homeView");
import common = module("../../common");

export class Facade extends common.BaseFacade { 

    private _dom: common.IDOMService;

    constructor (dom: common.IDOMService, container: string) { 
        this._dom = dom;
        this._id = common.Util.guid();
        this._container = container;
        super();
    }

    public initialize() { 
        var view = new homeVw.Home(this._dom, this._id, this._container);
        view.render();
    }
}
