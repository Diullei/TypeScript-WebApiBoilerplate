define(["require", "exports", "./views/LoginView"], function(require, exports, __loginVw__) {
    var loginVw = __loginVw__;

    var view;
    function initialize() {
        view = new loginVw.Home();
        view.render();
    }
    exports.initialize = initialize;
})
