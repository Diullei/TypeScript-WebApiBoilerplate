import homeVw = module("./views/HomeView");
import common = module("../../common");

export class Facade extends common.BaseFacade { 

    constructor (container: string) { 
        this._id = common.Util.guid();
        this._container = container;
        super();
    }

    public initialize() { 
        var view = new homeVw.Home(this._id, this._container);
        view.render();
    }
}
