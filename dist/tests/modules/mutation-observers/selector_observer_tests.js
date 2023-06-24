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
import { SelectorObserver } from "../../../mutation-observers/selector_observer";
import { ObserverTestCase } from "../../cases/observer_test_case";
var SelectorObserverTests = (function (_super) {
    __extends(SelectorObserverTests, _super);
    function SelectorObserverTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributeName = "data-test";
        _this.selector = "div[data-test~=two]";
        _this.details = { some: "details" };
        _this.fixtureHTML = "\n    <div id=\"container\" ".concat(_this.attributeName, "=\"one two\">\n      <div id=\"div1\" ").concat(_this.attributeName, "=\"one\"></div>\n      <div id=\"div2\" ").concat(_this.attributeName, "=\"two\"></div>\n      <span id=\"span1\" ").concat(_this.attributeName, "=\"one\"></span>\n      <span id=\"span2\" ").concat(_this.attributeName, "=\"two\"></span>\n    </div>\n  ");
        _this.observer = new SelectorObserver(_this.fixtureElement, _this.selector, _this, _this.details);
        return _this;
    }
    SelectorObserverTests.prototype["test should match when observer starts"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.assert.deepEqual(this.calls, [
                    ["selectorMatched", this.element, this.selector, this.details],
                    ["selectorMatched", this.div2, this.selector, this.details],
                ]);
                return [2];
            });
        });
    };
    SelectorObserverTests.prototype["test should match when element gets appended"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element1, element2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element1 = document.createElement("div");
                        element2 = document.createElement("div");
                        element1.dataset.test = "one two";
                        element2.dataset.test = "three four";
                        this.element.appendChild(element1);
                        this.element.appendChild(element2);
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.calls, [
                            ["selectorMatched", this.element, this.selector, this.details],
                            ["selectorMatched", this.div2, this.selector, this.details],
                            ["selectorMatched", element1, this.selector, this.details],
                        ]);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should not match/unmatch when the attribute gets updated and matching selector persists"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.element.setAttribute(this.attributeName, "two three");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, []);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should match when attribute gets updated and start to matche selector"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.div1.setAttribute(this.attributeName, "updated two");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [["selectorMatched", this.div1, this.selector, this.details]]);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should unmatch when attribute gets updated but matching attribute value gets removed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.div2.setAttribute(this.attributeName, "updated");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [["selectorUnmatched", this.div2, this.selector, this.details]]);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should unmatch when attribute gets removed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.element.removeAttribute(this.attributeName);
                        this.div2.removeAttribute(this.attributeName);
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["selectorUnmatched", this.element, this.selector, this.details],
                            ["selectorUnmatched", this.div2, this.selector, this.details],
                        ]);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should unmatch when element gets removed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element, div1, div2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.element;
                        div1 = this.div1;
                        div2 = this.div2;
                        element.remove();
                        div1.remove();
                        div2.remove();
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, [
                            ["selectorUnmatched", element, this.selector, this.details],
                            ["selectorUnmatched", div2, this.selector, this.details],
                        ]);
                        return [2];
                }
            });
        });
    };
    SelectorObserverTests.prototype["test should not match/unmatch when observer is paused"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.observer.pause(function () {
                            _this.div2.remove();
                            var element = document.createElement("div");
                            element.dataset.test = "one two";
                            _this.element.appendChild(element);
                        });
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.deepEqual(this.testCalls, []);
                        return [2];
                }
            });
        });
    };
    Object.defineProperty(SelectorObserverTests.prototype, "element", {
        get: function () {
            return this.findElement("#container");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectorObserverTests.prototype, "div1", {
        get: function () {
            return this.findElement("#div1");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectorObserverTests.prototype, "div2", {
        get: function () {
            return this.findElement("#div2");
        },
        enumerable: false,
        configurable: true
    });
    SelectorObserverTests.prototype.selectorMatched = function (element, selector, details) {
        this.recordCall("selectorMatched", element, selector, details);
    };
    SelectorObserverTests.prototype.selectorUnmatched = function (element, selector, details) {
        this.recordCall("selectorUnmatched", element, selector, details);
    };
    return SelectorObserverTests;
}(ObserverTestCase));
export default SelectorObserverTests;
