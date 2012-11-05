/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/underscore-1.4.1.d.ts"/>

import Backbone = module("Backbone");

export interface ILoginModelInterface { 
    user: string;
    password: string;
}

export class Login extends Backbone.Model implements IHasEvents { 

    public on: (event: string, callback: (model: Login, error: any) => any) => any;

    public off: (event: string) => any;

    public isValid: () => bool;

    public initialize() {
        console.log("LoginModel init.");
    };

    public defaults(): ILoginModelInterface {
        return {
            user: null,
            password: null,
        };
    };

    public validate(attrs: ILoginModelInterface) {
       
       if (_.isEmpty(attrs.user)) {
            return "User name is required.";
       }
       
       if (_.isEmpty(attrs.password)) {
            return "Password is required.";
       }
       
       return "";
    }
}