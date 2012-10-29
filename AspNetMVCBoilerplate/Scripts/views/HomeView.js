define(["require", "exports", "Backbone"], function(require, exports, __Backbone__) {
    var Backbone = __Backbone__;

    var $ = require('jquery');
    var ClassImpl = (function () {
        function ClassImpl() {
            this.el = $("#container");
        }
        ClassImpl.prototype.render = function () {
            $(this.el).html('<div class="hero-unit"><h1>Welcome!</h1><div><p>Enjoy coding! - TypeScript AspNetMVC-Boilerplate</p></div></div>');
        };
        return ClassImpl;
    })();
    exports.ClassImpl = ClassImpl;    
    exports.Class = Backbone.View.extend(new ClassImpl());
})

