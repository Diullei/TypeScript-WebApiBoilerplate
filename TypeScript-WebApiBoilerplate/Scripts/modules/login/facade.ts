import loginVw = module("./views/loginView");

var view: loginVw.Home;

export function initialize() { 
    view = new loginVw.Home();
    view.render();
}