var HomeCustomRequirePathConfig = (function () {
    function HomeCustomRequirePathConfig() {
        this.libs = "/Scripts/libs";
        this.plugins = "/Scripts/plugins";
        this.text = "/Scripts/plugins/text";
        this.jquery = "/Scripts/libs/jquery";
        this.lodash = "/Scripts/libs/lodash";
        this.Backbone = "/Scripts/tests/libs/backbone-test";
    }
    return HomeCustomRequirePathConfig;
})();
var HomeCustomRequireShimConfig = (function () {
    function HomeCustomRequireShimConfig() {
        this.Backbone = {
            deps: [
                "lodash", 
                "jquery"
            ],
            exports: "Backbone"
        };
    }
    return HomeCustomRequireShimConfig;
})();
require.config({
    deps: [
        "main"
    ],
    paths: new HomeCustomRequirePathConfig(),
    shim: new HomeCustomRequireShimConfig()
});
