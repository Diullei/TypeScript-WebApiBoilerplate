import loginVw = module("./views/LoginView");

var view: loginVw.Home;

export function initialize() { 
    view = new loginVw.Home();
    view.render();
}