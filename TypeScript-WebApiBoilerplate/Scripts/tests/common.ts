import common = module("../common");

export class FakeDOMService implements common.IDOMService { 
    private _obj: Object;

    public els: any[] = [];

    constructor (obj: Object) { 
        this._obj = obj;
    }

    public elementById(id: string): any { 
        var $this = this;
        var ret = function(...args: any[]) { 
            return this._obj;
        };

        this.els.push(ret);

        return ret;
    }
}
