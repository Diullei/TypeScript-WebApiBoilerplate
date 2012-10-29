define(["require", "exports", "Backbone", "template/homeTmpl"], function(require, exports, __Backbone__, __template__) {
    var Backbone = __Backbone__;

    var template = __template__;

    var ClassImpl = (function () {
        function ClassImpl() {
            this.el = $("#container");
        }
        ClassImpl.prototype.render = function () {
            $(this.el).html(template.html);
        };
        return ClassImpl;
    })();
    exports.ClassImpl = ClassImpl;    
    exports.Class = Backbone.View.extend(new ClassImpl());
})

