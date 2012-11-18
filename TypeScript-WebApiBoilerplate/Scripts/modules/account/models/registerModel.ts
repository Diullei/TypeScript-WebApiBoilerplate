/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/underscore-1.4.1.d.ts"/>

import Backbone = module("Backbone");

export interface IRegisterModelInterface { 
    user: string;
    password: string;
    confirmPassword: string;
}

export class Register extends Backbone.Model implements IHasEvents { 

    public on: (event: string, callback: (model: Register, error: any) => any) => any;

    public off: (event: string) => any;

    public isValid: () => bool;

    public initialize() {
        console.log("RegisterModel init.");
    };

    public defaults(): IRegisterModelInterface {
        return {
            user: null,
            password: null,
            confirmPassword: null
        };
    };

    public validate(attrs: IRegisterModelInterface) {
       
       if (_.isEmpty(attrs.user)) {
            return "User name is required.";
       }
       
       if (_.isEmpty(attrs.password)) {
            return "Password is required.";
       }

       if (attrs.password.length < 6) {
            return "The password must be at least 6 characters long.";
       }
       
       if (attrs.password != attrs.confirmPassword) {
            return "The password and confirmation password do not match.";
       }

       return "";
    }
}