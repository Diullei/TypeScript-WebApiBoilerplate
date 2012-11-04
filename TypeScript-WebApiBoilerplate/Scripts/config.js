var CustomRequirePathConfig = (function () {
    function CustomRequirePathConfig() {
        this.libs = "/Scripts/libs";
        this.plugins = "/Scripts/plugins";
        this.text = "/Scripts/plugins/text";
        this.jquery = "/Scripts/libs/jquery";
        this.lodash = "/Scripts/libs/lodash";
        this.Backbone = "/Scripts/libs/backbone";
    }
    return CustomRequirePathConfig;
})();
var CustomRequireShimConfig = (function () {
    function CustomRequireShimConfig() {
        this.Backbone = {
            deps: [
                "lodash", 
                "jquery"
            ],
            exports: "Backbone"
        };
    }
    return CustomRequireShimConfig;
})();
require.config({
    deps: [
        "main"
    ],
    paths: new CustomRequirePathConfig(),
    shim: new CustomRequireShimConfig()
});
