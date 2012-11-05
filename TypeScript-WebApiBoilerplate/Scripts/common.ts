/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import mediator = module("Mediator");

export class ActionFilterArgument { 
    public route: string;
    public instance: any;
    public cancel: bool;
}

export interface IActionFilter { 
    onBefore: (arg: ActionFilterArgument) => void;
    onAfter: () => void;
}

export class AppRouter extends Backbone.Router { 
    private _index: number = 0;

    public bindRoute(route: string, response: () => void, ...filters: IActionFilter[]) {
        var cancel = false;

        for (var i = 0; i < filters.length; i++) { 
            var filter = filters[i];
            var arg = new ActionFilterArgument();
            arg.route = route;
            arg.instance = this;
            filter.onBefore(arg);
            cancel = arg.cancel;
        }

        if(!cancel)
            this.route(route, "rote" + (this._index++), response);

        for (var i = 0; i < filters.length; i++) { 
            var filter = filters[i];
            filter.onAfter();
        }
    }
}

export interface IAsyncCallback { 
    onSuccess: (result) => void;
    onFailure: (caught) => void;
}
