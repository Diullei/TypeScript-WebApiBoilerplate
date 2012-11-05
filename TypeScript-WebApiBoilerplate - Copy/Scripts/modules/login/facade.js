define(["require", "exports", "./views/loginView", "./services/login", "./services/response"], function(require, exports, __loginVw__, __services__, __response__) {
    var loginVw = __loginVw__;

    var services = __services__;

    var response = __response__;

    var view;
    function initialize() {
        view = new loginVw.Login(new response.ResponseService(), new services.LoginService());
        view.render();
    }
    exports.initialize = initialize;
})

