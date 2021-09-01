import { parseActionDescriptorString, stringifyEventTarget } from "./action_descriptor";
import { camelize } from "./string_helpers";
var Action = /** @class */ (function () {
    function Action(element, index, descriptor) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function (token) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content));
    };
    Action.prototype.toString = function () {
        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "params", {
        get: function () {
            if (this.eventTarget instanceof Element) {
                return this.getParamsFromEventTargetAttributes(this.eventTarget);
            }
            else {
                return {};
            }
        },
        enumerable: false,
        configurable: true
    });
    Action.prototype.getParamsFromEventTargetAttributes = function (eventTarget) {
        var params = {};
        var pattern = new RegExp("^data-" + this.identifier + "-(.+)-param$");
        var attributes = Array.from(eventTarget.attributes);
        attributes.forEach(function (_a) {
            var _b;
            var name = _a.name, value = _a.value;
            var match = name.match(pattern);
            var key = match && match[1];
            if (key) {
                Object.assign(params, (_b = {}, _b[camelize(key)] = typecast(value), _b));
            }
        });
        return params;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return stringifyEventTarget(this.eventTarget);
        },
        enumerable: false,
        configurable: true
    });
    return Action;
}());
export { Action };
var defaultEventNames = {
    "a": function (e) { return "click"; },
    "button": function (e) { return "click"; },
    "form": function (e) { return "submit"; },
    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "input"; },
    "select": function (e) { return "change"; },
    "textarea": function (e) { return "input"; }
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
//# sourceMappingURL=action.js.map