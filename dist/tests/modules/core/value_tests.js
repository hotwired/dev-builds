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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ControllerTestCase } from "../../cases/controller_test_case";
import { ValueController } from "../../controllers/value_controller";
var ValueTests = (function (_super) {
    __extends(ValueTests, _super);
    function ValueTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"".concat(_this.identifier, "\"\n      data-").concat(_this.identifier, "-shadowed-boolean-value=\"true\"\n      data-").concat(_this.identifier, "-numeric-value=\"123\"\n      data-").concat(_this.identifier, "-string-value=\"ok\"\n      data-").concat(_this.identifier, "-ids-value=\"[1,2,3]\"\n      data-").concat(_this.identifier, "-options-value='{\"one\":[2,3]}'\n      data-").concat(_this.identifier, "-time-24hr-value=\"true\">\n    </div>\n  ");
        return _this;
    }
    ValueTests.prototype["test string values"] = function () {
        this.assert.deepEqual(this.controller.stringValue, "ok");
        this.controller.stringValue = "cool";
        this.assert.deepEqual(this.controller.stringValue, "cool");
        this.assert.deepEqual(this.get("string-value"), "cool");
    };
    ValueTests.prototype["test numeric values"] = function () {
        this.assert.deepEqual(this.controller.numericValue, 123);
        this.controller.numericValue = 456;
        this.assert.deepEqual(this.controller.numericValue, 456);
        this.assert.deepEqual(this.get("numeric-value"), "456");
        this.controller.numericValue = "789";
        this.assert.deepEqual(this.controller.numericValue, 789);
        this.controller.numericValue = 1.23;
        this.assert.deepEqual(this.controller.numericValue, 1.23);
        this.assert.deepEqual(this.get("numeric-value"), "1.23");
        this.controller.numericValue = Infinity;
        this.assert.deepEqual(this.controller.numericValue, Infinity);
        this.assert.deepEqual(this.get("numeric-value"), "Infinity");
        this.controller.numericValue = "garbage";
        this.assert.ok(isNaN(this.controller.numericValue));
        this.assert.equal(this.get("numeric-value"), "garbage");
        this.controller.numericValue = "";
        this.assert.equal(this.controller.numericValue, 0);
        this.assert.equal(this.get("numeric-value"), "");
    };
    ValueTests.prototype["test boolean values"] = function () {
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.controller.shadowedBooleanValue = false;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "false");
        this.controller.shadowedBooleanValue = "";
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "");
        this.controller.shadowedBooleanValue = 0;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "0");
        this.controller.shadowedBooleanValue = 1;
        this.assert.deepEqual(this.controller.shadowedBooleanValue, true);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "1");
        this.controller.shadowedBooleanValue = "False";
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
        this.assert.deepEqual(this.get("shadowed-boolean-value"), "False");
    };
    ValueTests.prototype["test array values"] = function () {
        var _this = this;
        this.assert.deepEqual(this.controller.idsValue, [1, 2, 3]);
        this.controller.idsValue.push(4);
        this.assert.deepEqual(this.controller.idsValue, [1, 2, 3]);
        this.controller.idsValue = [];
        this.assert.deepEqual(this.controller.idsValue, []);
        this.assert.deepEqual(this.get("ids-value"), "[]");
        this.controller.idsValue = null;
        this.assert.throws(function () { return _this.controller.idsValue; });
        this.controller.idsValue = {};
        this.assert.throws(function () { return _this.controller.idsValue; });
    };
    ValueTests.prototype["test object values"] = function () {
        var _this = this;
        this.assert.deepEqual(this.controller.optionsValue, { one: [2, 3] });
        this.controller.optionsValue["one"] = 0;
        this.assert.deepEqual(this.controller.optionsValue, { one: [2, 3] });
        this.controller.optionsValue = {};
        this.assert.deepEqual(this.controller.optionsValue, {});
        this.assert.deepEqual(this.get("options-value"), "{}");
        this.controller.optionsValue = null;
        this.assert.throws(function () { return _this.controller.optionsValue; });
        this.controller.optionsValue = [];
        this.assert.throws(function () { return _this.controller.optionsValue; });
    };
    ValueTests.prototype["test accessing a string value returns the empty string when the attribute is missing"] = function () {
        this.controller.stringValue = undefined;
        this.assert.notOk(this.has("string-value"));
        this.assert.deepEqual(this.controller.stringValue, "");
    };
    ValueTests.prototype["test accessing a numeric value returns zero when the attribute is missing"] = function () {
        this.controller.numericValue = undefined;
        this.assert.notOk(this.has("numeric-value"));
        this.assert.deepEqual(this.controller.numericValue, 0);
    };
    ValueTests.prototype["test accessing a boolean value returns false when the attribute is missing"] = function () {
        this.controller.shadowedBooleanValue = undefined;
        this.assert.notOk(this.has("shadowed-boolean-value"));
        this.assert.deepEqual(this.controller.shadowedBooleanValue, false);
    };
    ValueTests.prototype["test accessing an array value returns an empty array when the attribute is missing"] = function () {
        this.controller.idsValue = undefined;
        this.assert.notOk(this.has("ids-value"));
        this.assert.deepEqual(this.controller.idsValue, []);
        this.controller.idsValue.push(1);
        this.assert.deepEqual(this.controller.idsValue, []);
    };
    ValueTests.prototype["test accessing an object value returns an empty object when the attribute is missing"] = function () {
        this.controller.optionsValue = undefined;
        this.assert.notOk(this.has("options-value"));
        this.assert.deepEqual(this.controller.optionsValue, {});
        this.controller.optionsValue.hello = true;
        this.assert.deepEqual(this.controller.optionsValue, {});
    };
    ValueTests.prototype["test changed callbacks"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123]);
                        this.assert.deepEqual(this.controller.oldLoggedNumericValues, [0]);
                        this.controller.numericValue = 0;
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123, 0]);
                        this.assert.deepEqual(this.controller.oldLoggedNumericValues, [0, 123]);
                        this.set("numeric-value", "1");
                        return [4, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedNumericValues, [123, 0, 1]);
                        this.assert.deepEqual(this.controller.oldLoggedNumericValues, [0, 123, 0]);
                        return [2];
                }
            });
        });
    };
    ValueTests.prototype["test changed callbacks for object"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.deepEqual(this.controller.optionsValues, [{ one: [2, 3] }]);
                        this.assert.deepEqual(this.controller.oldOptionsValues, [{}]);
                        this.controller.optionsValue = { person: { name: "John", age: 42, active: true } };
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.optionsValues, [
                            { one: [2, 3] },
                            { person: { name: "John", age: 42, active: true } },
                        ]);
                        this.assert.deepEqual(this.controller.oldOptionsValues, [{}, { one: [2, 3] }]);
                        this.set("options-value", "{}");
                        return [4, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.optionsValues, [
                            { one: [2, 3] },
                            { person: { name: "John", age: 42, active: true } },
                            {},
                        ]);
                        this.assert.deepEqual(this.controller.oldOptionsValues, [
                            {},
                            { one: [2, 3] },
                            { person: { name: "John", age: 42, active: true } },
                        ]);
                        return [2];
                }
            });
        });
    };
    ValueTests.prototype["test default values trigger changed callbacks"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, [""]);
                        this.assert.deepEqual(this.controller.oldLoggedMissingStringValues, [undefined]);
                        this.controller.missingStringValue = "hello";
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, ["", "hello"]);
                        this.assert.deepEqual(this.controller.oldLoggedMissingStringValues, [undefined, ""]);
                        this.controller.missingStringValue = undefined;
                        return [4, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.controller.loggedMissingStringValues, ["", "hello", ""]);
                        this.assert.deepEqual(this.controller.oldLoggedMissingStringValues, [undefined, "", "hello"]);
                        return [2];
                }
            });
        });
    };
    ValueTests.prototype["test keys may be specified in kebab-case"] = function () {
        this.assert.equal(this.controller.time24hrValue, true);
    };
    ValueTests.prototype.has = function (name) {
        return this.element.hasAttribute(this.attr(name));
    };
    ValueTests.prototype.get = function (name) {
        return this.element.getAttribute(this.attr(name));
    };
    ValueTests.prototype.set = function (name, value) {
        return this.element.setAttribute(this.attr(name), value);
    };
    ValueTests.prototype.attr = function (name) {
        return "data-".concat(this.identifier, "-").concat(name);
    };
    Object.defineProperty(ValueTests.prototype, "element", {
        get: function () {
            return this.controller.element;
        },
        enumerable: false,
        configurable: true
    });
    return ValueTests;
}(ControllerTestCase(ValueController)));
export default ValueTests;
