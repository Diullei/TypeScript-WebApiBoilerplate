define(["require", "exports", "../facade", "../../../tests/common", "../models/homeModel"], function(require, exports, __home__, __commonTest__, __modelMdl__) {
    
    var home = __home__;

    var commonTest = __commonTest__;

    var modelMdl = __modelMdl__;

    exports.test;
    QUnit.test("test module html", function () {
        var domMock = {
            text: function () {
            },
            attr: function () {
            },
            removeAttr: function () {
            }
        };
        var fakeDom = new commonTest.FakeDOMService(domMock);
        new home.Facade(fakeDom, "container").initialize();
        QUnit.ok(fakeDom.els[0].innerHTML.indexOf('Welcome!') != -1);
        QUnit.ok(fakeDom.els[0].innerHTML.indexOf('Enjoy coding! - TypeScript AspNetMVC-Boilerplate') != -1);
    });
    QUnit.test('test model attributes', function () {
        var model = new modelMdl.Home();
        QUnit.ok(!model.set('title', null), 'Title cant be numm');
        QUnit.ok(!model.set('text', null), 'Text cant be numm');
        QUnit.equal(model.validate({
            title: null
        }), 'Title is required.');
        QUnit.equal(model.validate({
            title: 'foo',
            text: null
        }), 'Text is required.');
    });
})
//@ sourceMappingURL=main.js.map
