import Backbone = module("Backbone");
import router = module("Router");

export var root: string = "/";
export var initialize = function () { 
    new (Backbone.Router.extend(new router.Router()))();
}
