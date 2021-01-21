var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        while (_) try {
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
import { ValueListObserver } from "../..";
import { ObserverTestCase } from "../observer_test_case";
var ValueListObserverTests = /** @class */ (function (_super) {
    __extends(ValueListObserverTests, _super);
    function ValueListObserverTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributeName = "data-test";
        _this.fixtureHTML = "<div " + _this.attributeName + "=\"one\"></div>";
        _this.observer = new ValueListObserver(_this.fixtureElement, _this.attributeName, _this);
        _this.lastValueId = 0;
        return _this;
    }
    ValueListObserverTests.prototype["test elementMatchedValue"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.assert.deepEqual(this.calls, [
                    ["elementMatchedValue", this.element, 1, "one"]
                ]);
                return [2 /*return*/];
            });
        });
    };
    ValueListObserverTests.prototype["test adding a token to the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test adding a token to the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "two one";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementMatchedValue", this.element, 3, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing a token from the right"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementUnmatchedValue", this.element, 2, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing a token from the left"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "one two";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "two";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementMatchedValue", this.element, 2, "two"],
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementUnmatchedValue", this.element, 2, "two"],
                            ["elementMatchedValue", this.element, 3, "two"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing the only token"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ValueListObserverTests.prototype["test removing and re-adding a token produces a new value"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.valueString = "";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.valueString = "one";
                        return [4 /*yield*/, this.nextFrame];
                    case 2:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["elementUnmatchedValue", this.element, 1, "one"],
                            ["elementMatchedValue", this.element, 2, "one"]
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ValueListObserverTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValueListObserverTests.prototype, "valueString", {
        set: function (value) {
            this.element.setAttribute(this.attributeName, value);
        },
        enumerable: false,
        configurable: true
    });
    // Value observer delegate
    ValueListObserverTests.prototype.parseValueForToken = function (token) {
        return { id: ++this.lastValueId, token: token };
    };
    ValueListObserverTests.prototype.elementMatchedValue = function (element, value) {
        this.recordCall("elementMatchedValue", element, value.id, value.token.content);
    };
    ValueListObserverTests.prototype.elementUnmatchedValue = function (element, value) {
        this.recordCall("elementUnmatchedValue", element, value.id, value.token.content);
    };
    return ValueListObserverTests;
}(ObserverTestCase));
export default ValueListObserverTests;
//# sourceMappingURL=value_list_observer_tests.js.map