var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./views/homeView", "../../common"], function(require, exports, __homeVw__, __common__) {
    var homeVw = __homeVw__;

    var common = __common__;

    var Facade = (function (_super) {
        __extends(Facade, _super);
        function Facade(dom, container) {
            this._dom = dom;
            this._id = common.Util.guid();
            this._container = container;
                _super.call(this);
        }
        Facade.prototype.initialize = function () {
            var view = new homeVw.Home(this._dom, this._id, this._container);
            view.render();
        };
        return Facade;
    })(common.BaseFacade);
    exports.Facade = Facade;    
})
//@ sourceMappingURL=facade.js.map
