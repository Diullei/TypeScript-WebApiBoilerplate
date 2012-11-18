/// <reference path="d.ts/backbone-0.9.d.ts"/>
/// <reference path="d.ts/lodash.d.ts"/>

import Backbone = module("Backbone");

export interface ICoreEvents { 
    on: (event: string, callback: (...args: any[]) => any) => any;
    off: (event: string) => any;
    trigger: (event: string, ...args: any[]) => any;
}

export var events: ICoreEvents = <ICoreEvents>{};

_.extend(events, Backbone.Events);
