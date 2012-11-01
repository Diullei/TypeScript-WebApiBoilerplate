/// <reference path="d.ts/requirejs.d.ts"/>

class CustomRequirePathConfig implements IRequirePathConfig { 

    // paths
    public libs: string = "/Scripts/libs";
    public plugins: string = "/Scripts/plugins";

    // plugins
    public text: string = "/Scripts/plugins/text";

    // libs
    public jquery: string = "/Scripts/libs/jquery";
    public lodash: string = "/Scripts/libs/lodash";
    public Backbone: string = "/Scripts/libs/backbone";
}

class CustomRequireShimConfig implements IRequireShimConfig { 
    Backbone: IRequireShimDefinition = <IRequireShimDefinition>{
        deps: ["lodash", "jquery"],
        exports: "Backbone"
    };
}

require.config(<IRequireConfigOptions> {
    deps: ["main"],
    paths: new CustomRequirePathConfig(),
    shim: new CustomRequireShimConfig()
});
