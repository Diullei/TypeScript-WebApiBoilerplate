/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/underscore-1.4.1.d.ts"/>

import Backbone = module("Backbone");

export interface IContextModelInterface { 
    isAuthenticated: bool;
    email: string;
}

export class Context extends Backbone.Model implements IHasEvents { 

    public on: (event: string, callback: (model: Context, error: any) => any) => any;

    public off: (event: string) => any;

    public isValid: () => bool;

    public initialize() {
        console.log("LoginModel init.");
    };

    public defaults(): IContextModelInterface {
        return {
            isAuthenticated: null,
            email: null
        };
    };
}