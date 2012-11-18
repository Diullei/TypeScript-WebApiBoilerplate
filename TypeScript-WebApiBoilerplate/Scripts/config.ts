/// <reference path="d.ts/requirejs.d.ts"/>

require.config({

    paths: {
    // paths
    libs: "/Scripts/libs",
    plugins: "/Scripts/plugins",

    // plugins
    text: "/Scripts/plugins/text",
    json: "/Scripts/plugins/json",

    // libs
    jquery: "/Scripts/libs/jquery",
    lodash: "/Scripts/libs/lodash",
    Backbone: "/Scripts/libs/backbone"
    },

    shim: {
        Backbone: {
            deps: ["lodash", "jquery"],
            exports: "Backbone"
        }
    },
    deps: ["main"]
});
