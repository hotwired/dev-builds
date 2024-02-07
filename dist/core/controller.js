import { ClassPropertiesBlessing } from "./class_properties";
import { OutletPropertiesBlessing } from "./outlet_properties";
import { TargetPropertiesBlessing } from "./target_properties";
import { ValuePropertiesBlessing } from "./value_properties";
export var Controller = (function () {
    function Controller(context) {
        this.context = context;
    }
    Object.defineProperty(Controller, "shouldLoad", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Controller.afterLoad = function (_identifier, _application) {
        return;
    };
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "outlets", {
        get: function () {
            return this.scope.outlets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "classes", {
        get: function () {
            return this.scope.classes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.initialize = function () {
    };
    Controller.prototype.connect = function () {
    };
    Controller.prototype.disconnect = function () {
    };
    Controller.prototype.dispatch = function (eventName, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.target, target = _c === void 0 ? this.element : _c, _d = _b.detail, detail = _d === void 0 ? {} : _d, _e = _b.prefix, prefix = _e === void 0 ? this.identifier : _e, _f = _b.bubbles, bubbles = _f === void 0 ? true : _f, _g = _b.cancelable, cancelable = _g === void 0 ? true : _g;
        var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
        var event = new CustomEvent(type, { detail: detail, bubbles: bubbles, cancelable: cancelable });
        target.dispatchEvent(event);
        return event;
    };
    Controller.blessings = [
        ClassPropertiesBlessing,
        TargetPropertiesBlessing,
        ValuePropertiesBlessing,
        OutletPropertiesBlessing,
    ];
    Controller.targets = [];
    Controller.outlets = [];
    Controller.values = {};
    return Controller;
}());
