/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import core = module("core");
import common = module("common");

export class Config extends common.AppRouter {

    constructor () {
        super();

        this.bindRoute("", this.index);
        this.bindRoute("account/:action", this.account);
    }

    public index() {
        core.events.trigger("module:home:init");
    }

    public account(action: string) {
        core.events.trigger("account:account:init", action);
    }
}