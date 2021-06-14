import { StringMapObserver } from "@stimulus/mutation-observers";
import { capitalize } from "./string_helpers";
var ValueObserver = /** @class */ (function () {
    function ValueObserver(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
        this.invokeChangedCallbacksForDefaultValues();
    }
    ValueObserver.prototype.start = function () {
        this.stringMapObserver.start();
    };
    ValueObserver.prototype.stop = function () {
        this.stringMapObserver.stop();
    };
    Object.defineProperty(ValueObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueObserver.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: false,
        configurable: true
    });
    // String map observer delegate
    ValueObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
        if (attributeName in this.valueDescriptorMap) {
            return this.valueDescriptorMap[attributeName].name;
        }
    };
    ValueObserver.prototype.stringMapKeyAdded = function (key, attributeName) {
        var descriptor = this.valueDescriptorMap[attributeName];
        if (!this.hasValue(key)) {
            this.invokeChangedCallbackForValue(key, descriptor.defaultValue);
        }
    };
    ValueObserver.prototype.stringMapValueChanged = function (value, name, oldValue) {
        this.invokeChangedCallbackForValue(name, oldValue);
    };
    ValueObserver.prototype.stringMapKeyRemoved = function (key, attributeName, oldValue) {
        if (this.hasValue(key)) {
            this.invokeChangedCallbackForValue(key, oldValue);
        }
    };
    ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
        for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b.key, name_1 = _b.name, defaultValue = _b.defaultValue;
            if (defaultValue != undefined && !this.controller.data.has(key)) {
                this.invokeChangedCallbackForValue(name_1, null);
            }
        }
    };
    ValueObserver.prototype.invokeChangedCallbackForValue = function (name, oldValue) {
        var changedMethodName = name + "Changed";
        var changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            var value = this.receiver[name];
            var descriptor = this.valueDescriptorNameMap[name];
            if (oldValue) {
                changedMethod.call(this.receiver, value, descriptor.reader(oldValue));
            }
            else if (this.hasValue(name)) {
                changedMethod.call(this.receiver, value, descriptor.defaultValue);
            }
            else {
                changedMethod.call(this.receiver, value);
            }
        }
    };
    Object.defineProperty(ValueObserver.prototype, "valueDescriptors", {
        get: function () {
            var valueDescriptorMap = this.valueDescriptorMap;
            return Object.keys(valueDescriptorMap).map(function (key) { return valueDescriptorMap[key]; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueObserver.prototype, "valueDescriptorNameMap", {
        get: function () {
            var _this = this;
            var descriptors = {};
            Object.keys(this.valueDescriptorMap).forEach(function (key) {
                var descriptor = _this.valueDescriptorMap[key];
                descriptors[descriptor.name] = descriptor;
            });
            return descriptors;
        },
        enumerable: false,
        configurable: true
    });
    ValueObserver.prototype.hasValue = function (attributeName) {
        var descriptor = this.valueDescriptorNameMap[attributeName];
        var hasMethodName = "has" + capitalize(descriptor.name);
        return this.receiver[hasMethodName];
    };
    return ValueObserver;
}());
export { ValueObserver };
//# sourceMappingURL=value_observer.js.map