export var channels: Object = {};

export function publish(channel: string): void { 
    console.log("publish: " + channel);

    if(!channels[channel])
        return;

    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < channels[channel].length; i++) { 
        var subscription = channels[channel][i];
        subscription.callback.apply(subscription.context, args);
    }
}

export function subscribe(channel: string, fn: (arg: Object) => void ): void {
    console.log("subscribe: " + channel);

    if(!channels[channel])
        channels[channel] = [];

    channels[channel].push({ context: this, callback: fn });
}
