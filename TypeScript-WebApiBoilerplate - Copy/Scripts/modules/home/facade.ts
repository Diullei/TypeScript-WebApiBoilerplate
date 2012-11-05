import homeVw = module("./views/HomeView");

var view: homeVw.Home;

export function initialize() { 
    view = new homeVw.Home();
    view.render();
}