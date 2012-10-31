/// <reference path="../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../d.ts/underscore-1.4.1.d.ts"/>

import Backbone = module("Backbone");

export interface HomeModelInterface { 
    title: string;
    text: string;
}

export class Home extends Backbone.Model implements IHasEvents { 

    public on: (event: string, callback: (model: Home, error: any) => any) => any;

    public off: (event: string) => any;

    public isValid: () => bool;

    public initialize() {
        console.log("HomeModel init.");
    };

    public defaults(): HomeModelInterface {
        return {
            title: 'Welcome!',
            text: 'Enjoy coding! - TypeScript AspNetMVC-Boilerplate',
        };
    };

    public validate(attrs: HomeModelInterface) {
       
       if (_.isEmpty(attrs.title)) {
            return "Title is required.";
       }
       
       if (_.isEmpty(attrs.text)) {
            return "Text is required.";
       }
       
       return "";
    }
}