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
            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
        }
    };
    ValueObserver.prototype.stringMapValueChanged = function (value, name, oldValue) {
        var descriptor = this.valueDescriptorNameMap[name];
        if (value === null)
            return;
        if (oldValue === null) {
            oldValue = descriptor.writer(descriptor.defaultValue);
        }
        this.invokeChangedCallback(name, value, oldValue);
    };
    ValueObserver.prototype.stringMapKeyRemoved = function (key, attributeName, oldValue) {
        var descriptor = this.valueDescriptorNameMap[key];
        if (this.hasValue(key)) {
            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
        }
        else {
            this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
        }
    };
    ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
        for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b.key, name_1 = _b.name, defaultValue = _b.defaultValue, writer = _b.writer;
            if (defaultValue != undefined && !this.controller.data.has(key)) {
                this.invokeChangedCallback(name_1, writer(defaultValue), undefined);
            }
        }
    };
    ValueObserver.prototype.invokeChangedCallback = function (name, rawValue, rawOldValue) {
        var changedMethodName = name + "Changed";
        var changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            var descriptor = this.valueDescriptorNameMap[name];
            var value = descriptor.reader(rawValue);
            var oldValue = rawOldValue;
            if (rawOldValue) {
                oldValue = descriptor.reader(rawOldValue);
            }
            changedMethod.call(this.receiver, value, oldValue);
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