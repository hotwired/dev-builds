export var defaultActionDescriptorFilters = {
    stop: function (_a) {
        var event = _a.event, value = _a.value;
        if (value)
            event.stopPropagation();
        return true;
    },
    prevent: function (_a) {
        var event = _a.event, value = _a.value;
        if (value)
            event.preventDefault();
        return true;
    },
    self: function (_a) {
        var event = _a.event, value = _a.value, element = _a.element;
        if (value) {
            return element === event.target;
        }
        else {
            return true;
        }
    },
};
var descriptorPattern = /^(?:(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
export function parseActionDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    var eventName = matches[1];
    var keyFilter = matches[2];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
        eventName += ".".concat(keyFilter);
        keyFilter = "";
    }
    return {
        eventTarget: parseEventTarget(matches[3]),
        eventName: eventName,
        eventOptions: matches[6] ? parseEventOptions(matches[6]) : {},
        identifier: matches[4],
        methodName: matches[5],
        keyFilter: keyFilter,
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
function parseEventOptions(eventOptions) {
    return eventOptions
        .split(":")
        .reduce(function (options, token) {
        var _a;
        return Object.assign(options, (_a = {}, _a[token.replace(/^!/, "")] = !/^!/.test(token), _a));
    }, {});
}
export function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}
