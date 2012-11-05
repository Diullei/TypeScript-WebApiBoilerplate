import loginVw = module("./views/loginView");
import services = module("./services/login");
import response = module("./services/response");

var view: loginVw.Login;

export function initialize() { 
    view = new loginVw.Login(new response.ResponseService(), new services.LoginService());
    view.render();
}