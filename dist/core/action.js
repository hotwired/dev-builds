import { parseActionDescriptorString, stringifyEventTarget } from "./action_descriptor";
import { camelize } from "./string_helpers";
var Action = (function () {
    function Action(element, index, descriptor, schema) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
        this.keyFilter = descriptor.keyFilter || "";
        this.schema = schema;
    }
    Action.forToken = function (token, schema) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    };
    Action.prototype.toString = function () {
        var eventFilter = this.keyFilter ? ".".concat(this.keyFilter) : "";
        var eventTarget = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
        return "".concat(this.eventName).concat(eventFilter).concat(eventTarget, "->").concat(this.identifier, "#").concat(this.methodName);
    };
    Action.prototype.isFilterTarget = function (event) {
        if (!this.keyFilter) {
            return false;
        }
        var filteres = this.keyFilter.split("+");
        var modifiers = ["meta", "ctrl", "alt", "shift"];
        var _a = modifiers.map(function (modifier) { return filteres.includes(modifier); }), meta = _a[0], ctrl = _a[1], alt = _a[2], shift = _a[3];
        if (event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift) {
            return true;
        }
        var standardFilter = filteres.filter(function (key) { return !modifiers.includes(key); })[0];
        if (!standardFilter) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(this.keyMappings, standardFilter)) {
            error("contains unknown key filter: ".concat(this.keyFilter));
        }
        return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    };
    Object.defineProperty(Action.prototype, "params", {
        get: function () {
            var params = {};
            var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"), "i");
            for (var _i = 0, _a = Array.from(this.element.attributes); _i < _a.length; _i++) {
                var _b = _a[_i], name_1 = _b.name, value = _b.value;
                var match = name_1.match(pattern);
                var key = match && match[1];
                if (key) {
                    params[camelize(key)] = typecast(value);
                }
            }
            return params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return stringifyEventTarget(this.eventTarget);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "keyMappings", {
        get: function () {
            return this.schema.keyMappings;
        },
        enumerable: false,
        configurable: true
    });
    return Action;
}());
export { Action };
var defaultEventNames = {
    a: function () { return "click"; },
    button: function () { return "click"; },
    form: function () { return "submit"; },
    details: function () { return "toggle"; },
    input: function (e) { return (e.getAttribute("type") == "submit" ? "click" : "input"); },
    select: function () { return "change"; },
    textarea: function () { return "input"; },
};
export function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    }
    catch (o_O) {
        return value;
    }
}
