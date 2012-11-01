define(["require", "exports", "./views/HomeView"], function(require, exports, __homeVw__) {
    var homeVw = __homeVw__;

    var view;
    function initialize() {
        view = new homeVw.Home();
        view.render();
    }
    exports.initialize = initialize;
})

