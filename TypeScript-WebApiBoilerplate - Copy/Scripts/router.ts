/// <reference path="d.ts/backbone-0.9.d.ts"/>

import Backbone = module("Backbone");
import mediator = module("Mediator");
import common = module("common");

export class Auth implements common.IActionFilter {
    public onBefore(arg: common.ActionFilterArgument): void { 
        var router = <Config>arg.instance;
        //arg.cancel = true;
       // router.login();
    }

    public onAfter(): void { } 
}

export class Config extends common.AppRouter {

    constructor () {
        super();

        this.bindRoute("", this.index, new Auth());
        this.bindRoute("login", this.login);
    }

    public index() {
        console.log('index');
        mediator.publish("module:home:init");
    }

    public login() {
        console.log('login');
        mediator.publish("module:login:init");
    }
}