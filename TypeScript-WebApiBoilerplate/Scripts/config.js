require.config({
    paths: {
        libs: "/Scripts/libs",
        plugins: "/Scripts/plugins",
        text: "/Scripts/plugins/text",
        json: "/Scripts/plugins/json",
        jquery: "/Scripts/libs/jquery",
        lodash: "/Scripts/libs/lodash",
        Backbone: "/Scripts/libs/backbone"
    },
    shim: {
        Backbone: {
            deps: [
                "lodash", 
                "jquery"
            ],
            exports: "Backbone"
        }
    },
    deps: [
        "main"
    ]
});
//@ sourceMappingURL=config.js.map
