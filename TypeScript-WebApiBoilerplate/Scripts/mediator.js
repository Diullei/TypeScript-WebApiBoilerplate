define(["require", "exports"], function(require, exports) {
    exports.channels = {
    };
    function publish(channel) {
        console.log("publish: " + channel);
        if(!exports.channels[channel]) {
            return;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < exports.channels[channel].length; i++) {
            var subscription = exports.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
    }
    exports.publish = publish;
    function subscribe(channel, fn) {
        console.log("subscribe: " + channel);
        if(!exports.channels[channel]) {
            exports.channels[channel] = [];
        }
        exports.channels[channel].push({
            context: this,
            callback: fn
        });
    }
    exports.subscribe = subscribe;
})

