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
import { Application } from "../../../core/application";
import { DOMTestCase } from "../../cases/dom_test_case";
var mockCallback = function (label) {
    mockCallback.lastCall = label;
};
mockCallback.lastCall = null;
var TestApplicationWithCustomBehavior = (function (_super) {
    __extends(TestApplicationWithCustomBehavior, _super);
    function TestApplicationWithCustomBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestApplicationWithCustomBehavior.prototype.registerActionOption = function (name, filter) {
        mockCallback("registerActionOption:".concat(name));
        _super.prototype.registerActionOption.call(this, name, filter);
    };
    return TestApplicationWithCustomBehavior;
}(Application));
var ExtendingApplicationTests = (function (_super) {
    __extends(ExtendingApplicationTests, _super);
    function ExtendingApplicationTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendingApplicationTests.prototype.runTest = function (testName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        this.application = TestApplicationWithCustomBehavior.start(this.fixtureElement);
                        return [4, _super.prototype.runTest.call(this, testName)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        this.application.stop();
                        return [7];
                    case 3: return [2];
                }
            });
        });
    };
    ExtendingApplicationTests.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                mockCallback.lastCall = null;
                return [2];
            });
        });
    };
    ExtendingApplicationTests.prototype.teardown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                mockCallback.lastCall = null;
                return [2];
            });
        });
    };
    ExtendingApplicationTests.prototype["test extended class method is supported when using MyApplication.start()"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mockTrue, mockFalse;
            return __generator(this, function (_a) {
                this.assert.equal(mockCallback.lastCall, null);
                mockTrue = function () { return true; };
                this.application.registerActionOption("kbd", mockTrue);
                this.assert.equal(this.application.actionDescriptorFilters["kbd"], mockTrue);
                this.assert.equal(mockCallback.lastCall, "registerActionOption:kbd");
                mockFalse = function () { return false; };
                this.application.registerActionOption("xyz", mockFalse);
                this.assert.equal(this.application.actionDescriptorFilters["xyz"], mockFalse);
                this.assert.equal(mockCallback.lastCall, "registerActionOption:xyz");
                return [2];
            });
        });
    };
    return ExtendingApplicationTests;
}(DOMTestCase));
export default ExtendingApplicationTests;