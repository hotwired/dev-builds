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
import { LogControllerTestCase } from "../cases/log_controller_test_case";
var ActionParamsTests = /** @class */ (function (_super) {
    __extends(ActionParamsTests, _super);
    function ActionParamsTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = ["c", "d"];
        _this.fixtureHTML = "\n    <div data-controller=\"c d\">\n      <button data-c-id-param=\"123\"\n              data-c-multi-word-example-param=\"/path\"\n              data-c-active-param=\"true\"\n              data-c-inactive-param=\"false\"\n              data-c-empty-param=\"\"\n              data-c-payload-param='" + JSON.stringify({ value: 1 }) + "'\n              data-c-param-something=\"not-reported\"\n              data-something-param=\"not-reported\"\n              data-d-id-param=\"234\">\n        <div id=\"nested\"></div>\n      </button>\n    </div>\n  ";
        _this.expectedParamsForC = {
            id: 123,
            multiWordExample: "/path",
            payload: {
                value: 1
            },
            active: true,
            empty: "",
            inactive: false
        };
        return _this;
    }
    ActionParamsTests.prototype["test clicking on the element does return its params"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "click->c#log";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ identifier: "c", params: this.expectedParamsForC });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionParamsTests.prototype["test passing params to namespaced controller"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "click->c#log click->d#log2";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ identifier: "c", params: this.expectedParamsForC }, { identifier: "d", params: { id: 234 } });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionParamsTests.prototype["test updating manually the params values"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "click->c#log";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ identifier: "c", params: this.expectedParamsForC });
                        return [4 /*yield*/, this.buttonElement.setAttribute("data-c-id-param", "234")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.buttonElement.setAttribute("data-c-new-param", "new")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.buttonElement.removeAttribute("data-c-payload-param")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 6:
                        _a.sent();
                        this.assertActions({ identifier: "c", params: this.expectedParamsForC }, {
                            identifier: "c", params: {
                                id: 234, new: "new",
                                multiWordExample: "/path",
                                active: true,
                                empty: "",
                                inactive: false
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionParamsTests.prototype["test clicking on a nested element does return the params of the actionable element"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "click->c#log";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.nestedElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ identifier: "c", params: this.expectedParamsForC });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ActionParamsTests.prototype, "actionValue", {
        set: function (value) {
            this.buttonElement.setAttribute("data-action", value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionParamsTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionParamsTests.prototype, "buttonElement", {
        get: function () {
            return this.findElement("button");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionParamsTests.prototype, "nestedElement", {
        get: function () {
            return this.findElement("#nested");
        },
        enumerable: false,
        configurable: true
    });
    return ActionParamsTests;
}(LogControllerTestCase));
export default ActionParamsTests;
//# sourceMappingURL=action_params_tests.js.map