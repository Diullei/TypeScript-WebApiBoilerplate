/// <reference path="../../../d.ts/backbone-0.9.d.ts"/>
/// <reference path="../../../d.ts/qunit-1.10.d.ts"/>

import Backbone = module("Backbone");
import home = module("../facade");
import commonTest = module("../../../tests/common");
import modelMdl = module("../models/HomeModel");

export var test: any;

QUnit.test("test module html", function () { 
    var domMock = {
        text: function () { },
        attr: function () { },
        removeAttr: function () { },
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

    QUnit.equal(model.validate(<any>{title: null}), 'Title is required.');
    QUnit.equal(model.validate(<any>{title: 'foo', text: null}), 'Text is required.');
});