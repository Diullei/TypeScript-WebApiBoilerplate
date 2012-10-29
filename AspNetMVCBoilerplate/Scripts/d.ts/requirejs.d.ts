interface IRequirePathConfig { 
    libs: string;
    plugins: string;
}

interface IRequireShimConfig { }

interface IRequireShimDefinition { 
    deps: string[];
    exports: string;
}

interface IRequireConfigOptions { 
    deps: string[];
    paths: IRequirePathConfig;
    shim: IRequireShimConfig;
}

interface IRequire {
    config(options: IRequireConfigOptions): void;
}

declare var require: IRequire;