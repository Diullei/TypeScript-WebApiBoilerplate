/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import mediator = module("Mediator");

/* *****************************************************
    Router
****************************************************** */

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

/* *****************************************************
    View
****************************************************** */

export class BaseView extends Backbone.View { 

    _id: string;

    public el: HTMLElement;

    public trigger: (event: string, data: any) => any;

    constructor (options?: any) { 
        this.tagName = "div"; 
        super(options);
    }

    public elementById(id: string) { 
        return $(this.el).find("#" + this._id + id);
    }

    public element(id: string) { 
        return $(id, this.el);
    }

    public bindClick(id: string, fn: string) { 
        if(!this.events)
            this.events = {};

        this.events["click #" + this._id + id] = fn;
    }
}

/* *****************************************************
    Facade
****************************************************** */

export class BaseFacade { 
    _id;
    _container;
}

/* *****************************************************
    Services
****************************************************** */

export interface IAsyncCallback { 
    onSuccess: (result) => void;
    onFailure: (caught) => void;
}

/* *****************************************************
    Util
****************************************************** */

export class Util { 
    public static guid(): string { 
        var S4 = function () {
            return Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16);
        };

        return "_" + (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }
}
