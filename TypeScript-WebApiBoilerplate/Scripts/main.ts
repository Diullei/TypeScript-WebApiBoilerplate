/// <reference path="d.ts/jquery-1.8.d.ts"/>
/// <reference path="d.ts/backbone-0.9.d.ts"/>

declare var require: any;

import Backbone = module("Backbone");
import App = module("app");

export module Main { 
    App.initialize();

    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({root: App.root});
    
    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass])", function (evt) {
        // Get the absolute anchor href.
        var href = $(this).prop("href");
        // Get the absolute root.
        var root = location.protocol + "//" + location.host + App.root;

        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href && href.slice(root.length) === root) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events. The Router's internal `navigate` method
            // calls this anyways.  The fragment is sliced from the root.
            Backbone.history.navigate(href.slice(root.length), true);
        }
    });
}