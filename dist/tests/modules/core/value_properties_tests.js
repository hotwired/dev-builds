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
import { ValueController } from "../../controllers/value_controller";
import { ControllerTestCase } from "../../cases/controller_test_case";
import { parseValueTypeDefault, parseValueTypeConstant, parseValueTypeObject, parseValueTypeDefinition, defaultValueForDefinition, } from "../../../core/value_properties";
var ValuePropertiesTests = (function (_super) {
    __extends(ValuePropertiesTests, _super);
    function ValuePropertiesTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValuePropertiesTests.prototype["test parseValueTypeConstant"] = function () {
        this.assert.equal(parseValueTypeConstant(String), "string");
        this.assert.equal(parseValueTypeConstant(Boolean), "boolean");
        this.assert.equal(parseValueTypeConstant(Array), "array");
        this.assert.equal(parseValueTypeConstant(Object), "object");
        this.assert.equal(parseValueTypeConstant(Number), "number");
        this.assert.equal(parseValueTypeConstant(""), undefined);
        this.assert.equal(parseValueTypeConstant({}), undefined);
        this.assert.equal(parseValueTypeConstant([]), undefined);
        this.assert.equal(parseValueTypeConstant(true), undefined);
        this.assert.equal(parseValueTypeConstant(false), undefined);
        this.assert.equal(parseValueTypeConstant(0), undefined);
        this.assert.equal(parseValueTypeConstant(1), undefined);
        this.assert.equal(parseValueTypeConstant(null), undefined);
        this.assert.equal(parseValueTypeConstant(undefined), undefined);
    };
    ValuePropertiesTests.prototype["test parseValueTypeDefault"] = function () {
        this.assert.equal(parseValueTypeDefault(""), "string");
        this.assert.equal(parseValueTypeDefault("Some string"), "string");
        this.assert.equal(parseValueTypeDefault(true), "boolean");
        this.assert.equal(parseValueTypeDefault(false), "boolean");
        this.assert.equal(parseValueTypeDefault([]), "array");
        this.assert.equal(parseValueTypeDefault([1, 2, 3]), "array");
        this.assert.equal(parseValueTypeDefault([true, false, true]), "array");
        this.assert.equal(parseValueTypeDefault([{}, {}, {}]), "array");
        this.assert.equal(parseValueTypeDefault({}), "object");
        this.assert.equal(parseValueTypeDefault({ one: "key" }), "object");
        this.assert.equal(parseValueTypeDefault(-1), "number");
        this.assert.equal(parseValueTypeDefault(0), "number");
        this.assert.equal(parseValueTypeDefault(1), "number");
        this.assert.equal(parseValueTypeDefault(-0.1), "number");
        this.assert.equal(parseValueTypeDefault(0.0), "number");
        this.assert.equal(parseValueTypeDefault(0.1), "number");
        this.assert.equal(parseValueTypeDefault(null), undefined);
        this.assert.equal(parseValueTypeDefault(undefined), undefined);
    };
    ValuePropertiesTests.prototype["test parseValueTypeObject"] = function () {
        var _this = this;
        var typeObject = function (object) {
            return parseValueTypeObject({
                controller: _this.controller.identifier,
                token: "url",
                typeObject: object,
            });
        };
        this.assert.equal(typeObject({ type: String, default: "" }), "string");
        this.assert.equal(typeObject({ type: String, default: "123" }), "string");
        this.assert.equal(typeObject({ type: String }), "string");
        this.assert.equal(typeObject({ default: "" }), "string");
        this.assert.equal(typeObject({ default: "123" }), "string");
        this.assert.equal(typeObject({ type: Number, default: 0 }), "number");
        this.assert.equal(typeObject({ type: Number, default: 1 }), "number");
        this.assert.equal(typeObject({ type: Number, default: -1 }), "number");
        this.assert.equal(typeObject({ type: Number }), "number");
        this.assert.equal(typeObject({ default: 0 }), "number");
        this.assert.equal(typeObject({ default: 1 }), "number");
        this.assert.equal(typeObject({ default: -1 }), "number");
        this.assert.equal(typeObject({ type: Array, default: [] }), "array");
        this.assert.equal(typeObject({ type: Array, default: [1] }), "array");
        this.assert.equal(typeObject({ type: Array }), "array");
        this.assert.equal(typeObject({ default: [] }), "array");
        this.assert.equal(typeObject({ default: [1] }), "array");
        this.assert.equal(typeObject({ type: Object, default: {} }), "object");
        this.assert.equal(typeObject({ type: Object, default: { some: "key" } }), "object");
        this.assert.equal(typeObject({ type: Object }), "object");
        this.assert.equal(typeObject({ default: {} }), "object");
        this.assert.equal(typeObject({ default: { some: "key" } }), "object");
        this.assert.equal(typeObject({ type: Boolean, default: true }), "boolean");
        this.assert.equal(typeObject({ type: Boolean, default: false }), "boolean");
        this.assert.equal(typeObject({ type: Boolean }), "boolean");
        this.assert.equal(typeObject({ default: false }), "boolean");
        this.assert.throws(function () { return typeObject({ type: Boolean, default: "something else" }); }, {
            name: "Error",
            message: "The specified default value for the Stimulus Value \"test.url\" must match the defined type \"boolean\". The provided default value of \"something else\" is of type \"string\".",
        });
        this.assert.throws(function () { return typeObject({ type: Boolean, default: "true" }); }, {
            name: "Error",
            message: "The specified default value for the Stimulus Value \"test.url\" must match the defined type \"boolean\". The provided default value of \"true\" is of type \"string\".",
        });
    };
    ValuePropertiesTests.prototype["test parseValueTypeDefinition booleans"] = function () {
        var _this = this;
        var typeDefinition = function (definition) {
            return parseValueTypeDefinition({
                controller: _this.controller.identifier,
                token: "url",
                typeDefinition: definition,
            });
        };
        this.assert.equal(typeDefinition(Boolean), "boolean");
        this.assert.equal(typeDefinition(true), "boolean");
        this.assert.equal(typeDefinition(false), "boolean");
        this.assert.equal(typeDefinition({ type: Boolean, default: false }), "boolean");
        this.assert.equal(typeDefinition({ type: Boolean }), "boolean");
        this.assert.equal(typeDefinition({ default: true }), "boolean");
        this.assert.equal(typeDefinition({ default: null }), "object");
        this.assert.equal(typeDefinition({ default: undefined }), "object");
        this.assert.equal(typeDefinition({}), "object");
        this.assert.equal(typeDefinition(""), "string");
        this.assert.equal(typeDefinition([]), "array");
        this.assert.throws(function () { return typeDefinition(null); });
        this.assert.throws(function () { return typeDefinition(undefined); });
    };
    ValuePropertiesTests.prototype["test defaultValueForDefinition"] = function () {
        this.assert.deepEqual(defaultValueForDefinition(String), "");
        this.assert.deepEqual(defaultValueForDefinition(Boolean), false);
        this.assert.deepEqual(defaultValueForDefinition(Object), {});
        this.assert.deepEqual(defaultValueForDefinition(Array), []);
        this.assert.deepEqual(defaultValueForDefinition(Number), 0);
        this.assert.deepEqual(defaultValueForDefinition({ type: String }), "");
        this.assert.deepEqual(defaultValueForDefinition({ type: Boolean }), false);
        this.assert.deepEqual(defaultValueForDefinition({ type: Object }), {});
        this.assert.deepEqual(defaultValueForDefinition({ type: Array }), []);
        this.assert.deepEqual(defaultValueForDefinition({ type: Number }), 0);
        this.assert.deepEqual(defaultValueForDefinition({ type: String, default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ type: Boolean, default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ type: Object, default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ type: Array, default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ type: Number, default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ type: String, default: "some string" }), "some string");
        this.assert.deepEqual(defaultValueForDefinition({ type: Boolean, default: true }), true);
        this.assert.deepEqual(defaultValueForDefinition({ type: Object, default: { some: "key" } }), { some: "key" });
        this.assert.deepEqual(defaultValueForDefinition({ type: Array, default: [1, 2, 3] }), [1, 2, 3]);
        this.assert.deepEqual(defaultValueForDefinition({ type: Number, default: 99 }), 99);
        this.assert.deepEqual(defaultValueForDefinition("some string"), "some string");
        this.assert.deepEqual(defaultValueForDefinition(true), true);
        this.assert.deepEqual(defaultValueForDefinition({ some: "key" }), { some: "key" });
        this.assert.deepEqual(defaultValueForDefinition([1, 2, 3]), [1, 2, 3]);
        this.assert.deepEqual(defaultValueForDefinition(99), 99);
        this.assert.deepEqual(defaultValueForDefinition({ default: "some string" }), "some string");
        this.assert.deepEqual(defaultValueForDefinition({ default: true }), true);
        this.assert.deepEqual(defaultValueForDefinition({ default: { some: "key" } }), { some: "key" });
        this.assert.deepEqual(defaultValueForDefinition({ default: [1, 2, 3] }), [1, 2, 3]);
        this.assert.deepEqual(defaultValueForDefinition({ default: 99 }), 99);
        this.assert.deepEqual(defaultValueForDefinition({ default: null }), null);
        this.assert.deepEqual(defaultValueForDefinition({ default: undefined }), undefined);
    };
    return ValuePropertiesTests;
}(ControllerTestCase(ValueController)));
export default ValuePropertiesTests;
