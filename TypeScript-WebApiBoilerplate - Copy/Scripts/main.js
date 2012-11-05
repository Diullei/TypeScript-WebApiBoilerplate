define(["require", "exports", "Backbone", "app"], function(require, exports, __Backbone__, __App__) {
    var Backbone = __Backbone__;

    var App = __App__;

    (function (Main) {
        App.initialize();
        Backbone.history.start({
            root: App.root
        });
        $(document).on("click", "a:not([data-bypass])", function (evt) {
            var href = $(this).prop("href");
            var root = location.protocol + "//" + location.host + App.root;
            if(href && href.slice(root.length) === root) {
                evt.preventDefault();
                Backbone.history.navigate(href.slice(root.length), true);
            }
        });
    })(exports.Main || (exports.Main = {}));

})

