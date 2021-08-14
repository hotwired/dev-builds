var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ControllerTestCase } from "../cases/controller_test_case";
import { DefaultValueController } from "../controllers/default_value_controller";
var DefaultValueTests = /** @class */ (function (_super) {
    __extends(DefaultValueTests, _super);
    function DefaultValueTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-default-string-override-value=\"I am the expected value\"\n      data-" + _this.identifier + "-default-boolean-override-value=\"false\"\n      data-" + _this.identifier + "-default-number-override-value=\"42\"\n      data-" + _this.identifier + "-default-array-override-value=\"[9,8,7]\"\n      data-" + _this.identifier + "-default-object-override-value='{\"expected\":\"value\"}'\n    </div>\n  ";
        return _this;
    }
    // Booleans
    DefaultValueTests.prototype["test custom default boolean values"] = function () {
        this.assert.deepEqual(this.controller.defaultBooleanValue, false);
        this.assert.ok(this.controller.hasDefaultBooleanValue);
        this.assert.deepEqual(this.get("default-boolean-value"), null);
        this.assert.deepEqual(this.controller.defaultBooleanTrueValue, true);
        this.assert.ok(this.controller.hasDefaultBooleanTrueValue);
        this.assert.deepEqual(this.get("default-boolean-true-value"), null);
        this.assert.deepEqual(this.controller.defaultBooleanFalseValue, false);
        this.assert.ok(this.controller.hasDefaultBooleanFalseValue);
        this.assert.deepEqual(this.get("default-boolean-false-value"), null);
    };
    DefaultValueTests.prototype["test should be able to set a new value for custom default boolean values"] = function () {
        this.assert.deepEqual(this.get("default-boolean-true-value"), null);
        this.assert.deepEqual(this.controller.defaultBooleanTrueValue, true);
        this.assert.ok(this.controller.hasDefaultBooleanTrueValue);
        this.controller.defaultBooleanTrueValue = false;
        this.assert.deepEqual(this.get("default-boolean-true-value"), "false");
        this.assert.deepEqual(this.controller.defaultBooleanTrueValue, false);
        this.assert.ok(this.controller.hasDefaultBooleanTrueValue);
    };
    DefaultValueTests.prototype["test should override custom default boolean value with given data-attribute"] = function () {
        this.assert.deepEqual(this.get("default-boolean-override-value"), "false");
        this.assert.deepEqual(this.controller.defaultBooleanOverrideValue, false);
        this.assert.ok(this.controller.hasDefaultBooleanOverrideValue);
    };
    // Strings
    DefaultValueTests.prototype["test custom default string values"] = function () {
        this.assert.deepEqual(this.controller.defaultStringValue, "");
        this.assert.ok(this.controller.hasDefaultStringValue);
        this.assert.deepEqual(this.get("default-string-value"), null);
        this.assert.deepEqual(this.controller.defaultStringHelloValue, "Hello");
        this.assert.ok(this.controller.hasDefaultStringHelloValue);
        this.assert.deepEqual(this.get("default-string-hello-value"), null);
    };
    DefaultValueTests.prototype["test should be able to set a new value for custom default string values"] = function () {
        this.assert.deepEqual(this.get("default-string-value"), null);
        this.assert.deepEqual(this.controller.defaultStringValue, "");
        this.assert.ok(this.controller.hasDefaultStringValue);
        this.controller.defaultStringValue = "New Value";
        this.assert.deepEqual(this.get("default-string-value"), "New Value");
        this.assert.deepEqual(this.controller.defaultStringValue, "New Value");
        this.assert.ok(this.controller.hasDefaultStringValue);
    };
    DefaultValueTests.prototype["test should override custom default string value with given data-attribute"] = function () {
        this.assert.deepEqual(this.get("default-string-override-value"), "I am the expected value");
        this.assert.deepEqual(this.controller.defaultStringOverrideValue, "I am the expected value");
        this.assert.ok(this.controller.hasDefaultStringOverrideValue);
    };
    // Numbers
    DefaultValueTests.prototype["test custom default number values"] = function () {
        this.assert.deepEqual(this.controller.defaultNumberValue, 0);
        this.assert.ok(this.controller.hasDefaultNumberValue);
        this.assert.deepEqual(this.get("default-number-value"), null);
        this.assert.deepEqual(this.controller.defaultNumberThousandValue, 1000);
        this.assert.ok(this.controller.hasDefaultNumberThousandValue);
        this.assert.deepEqual(this.get("default-number-thousand-value"), null);
        this.assert.deepEqual(this.controller.defaultNumberZeroValue, 0);
        this.assert.ok(this.controller.hasDefaultNumberZeroValue);
        this.assert.deepEqual(this.get("default-number-zero-value"), null);
    };
    DefaultValueTests.prototype["test should be able to set a new value for custom default number values"] = function () {
        this.assert.deepEqual(this.get("default-number-value"), null);
        this.assert.deepEqual(this.controller.defaultNumberValue, 0);
        this.assert.ok(this.controller.hasDefaultNumberValue);
        this.controller.defaultNumberValue = 123;
        this.assert.deepEqual(this.get("default-number-value"), "123");
        this.assert.deepEqual(this.controller.defaultNumberValue, 123);
        this.assert.ok(this.controller.hasDefaultNumberValue);
    };
    DefaultValueTests.prototype["test should override custom default number value with given data-attribute"] = function () {
        this.assert.deepEqual(this.get("default-number-override-value"), "42");
        this.assert.deepEqual(this.controller.defaultNumberOverrideValue, 42);
        this.assert.ok(this.controller.hasDefaultNumberOverrideValue);
    };
    // Arrays
    DefaultValueTests.prototype["test custom default array values"] = function () {
        this.assert.deepEqual(this.controller.defaultArrayValue, []);
        this.assert.ok(this.controller.hasDefaultArrayValue);
        this.assert.deepEqual(this.get("default-array-value"), null);
        this.assert.deepEqual(this.controller.defaultArrayFilledValue, [1, 2, 3]);
        this.assert.ok(this.controller.hasDefaultArrayFilledValue);
        this.assert.deepEqual(this.get("default-array-filled-value"), null);
    };
    DefaultValueTests.prototype["test should be able to set a new value for custom default array values"] = function () {
        this.assert.deepEqual(this.get("default-array-value"), null);
        this.assert.deepEqual(this.controller.defaultArrayValue, []);
        this.assert.ok(this.controller.hasDefaultArrayValue);
        this.controller.defaultArrayValue = [1, 2];
        this.assert.deepEqual(this.get("default-array-value"), "[1,2]");
        this.assert.deepEqual(this.controller.defaultArrayValue, [1, 2]);
        this.assert.ok(this.controller.hasDefaultArrayValue);
    };
    DefaultValueTests.prototype["test should override custom default array value with given data-attribute"] = function () {
        this.assert.deepEqual(this.get("default-array-override-value"), "[9,8,7]");
        this.assert.deepEqual(this.controller.defaultArrayOverrideValue, [9, 8, 7]);
        this.assert.ok(this.controller.hasDefaultArrayOverrideValue);
    };
    // Objects
    DefaultValueTests.prototype["test custom default object values"] = function () {
        this.assert.deepEqual(this.controller.defaultObjectValue, {});
        this.assert.ok(this.controller.hasDefaultObjectValue);
        this.assert.deepEqual(this.get("default-object-value"), null);
        this.assert.deepEqual(this.controller.defaultObjectPersonValue, { name: "David" });
        this.assert.ok(this.controller.hasDefaultObjectPersonValue);
        this.assert.deepEqual(this.get("default-object-filled-value"), null);
    };
    DefaultValueTests.prototype["test should be able to set a new value for custom default object values"] = function () {
        this.assert.deepEqual(this.get("default-object-value"), null);
        this.assert.deepEqual(this.controller.defaultObjectValue, {});
        this.assert.ok(this.controller.hasDefaultObjectValue);
        this.controller.defaultObjectValue = { new: "value" };
        this.assert.deepEqual(this.get("default-object-value"), "{\"new\":\"value\"}");
        this.assert.deepEqual(this.controller.defaultObjectValue, { new: "value" });
        this.assert.ok(this.controller.hasDefaultObjectValue);
    };
    DefaultValueTests.prototype["test should override custom default object value with given data-attribute"] = function () {
        this.assert.deepEqual(this.get("default-object-override-value"), "{\"expected\":\"value\"}");
        this.assert.deepEqual(this.controller.defaultObjectOverrideValue, { expected: "value" });
        this.assert.ok(this.controller.hasDefaultObjectOverrideValue);
    };
    DefaultValueTests.prototype.has = function (name) {
        return this.element.hasAttribute(this.attr(name));
    };
    DefaultValueTests.prototype.get = function (name) {
        return this.element.getAttribute(this.attr(name));
    };
    DefaultValueTests.prototype.set = function (name, value) {
        return this.element.setAttribute(this.attr(name), value);
    };
    DefaultValueTests.prototype.attr = function (name) {
        return "data-" + this.identifier + "-" + name;
    };
    Object.defineProperty(DefaultValueTests.prototype, "element", {
        get: function () {
            return this.controller.element;
        },
        enumerable: false,
        configurable: true
    });
    return DefaultValueTests;
}(ControllerTestCase(DefaultValueController)));
export default DefaultValueTests;
//# sourceMappingURL=default_value_tests.js.map