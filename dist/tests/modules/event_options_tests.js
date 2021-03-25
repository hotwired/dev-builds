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
var EventOptionsTests = /** @class */ (function (_super) {
    __extends(EventOptionsTests, _super);
    function EventOptionsTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = ["c", "d"];
        _this.fixtureHTML = "\n    <div data-controller=\"c d\">\n      <button></button>\n    </div>\n    <div id=\"outside\"></div>\n  ";
        return _this;
    }
    EventOptionsTests.prototype["test different syntaxes for once action"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "click->c#log:once d#log2:once c#log3:once";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test mix once and standard actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log:once d#log2 c#log3";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test stop propagation with once"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#stop:once c#log";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "stop", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [4 /*yield*/, this.nextFrame];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 4:
                        _a.sent();
                        this.assertActions({ name: "stop", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test global once actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "keydown@window->c#log:once";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "keydown")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "keydown")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "keydown" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test edge case when updating action list with setAttribute preserves once history"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log:once";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")
                            //modify with a setAttribute and c#log should not be called anyhow
                        ];
                    case 3:
                        _a.sent();
                        //modify with a setAttribute and c#log should not be called anyhow
                        this.actionValue = "c#log2 c#log:once d#log";
                        return [4 /*yield*/, this.nextFrame];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 5:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c" }, { name: "log2", identifier: "c" }, { name: "log", identifier: "d" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test default passive action"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "scroll->c#logPassive:passive";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "scroll", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "scroll", passive: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test global passive actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "mouseup@window->c#logPassive:passive";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "mouseup", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "mouseup", passive: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test passive false actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // by default touchmove is true in chrome
                        this.actionValue = "touchmove@window->c#logPassive:!passive";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "touchmove", passive: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test multiple options"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // by default touchmove is true in chrome
                        this.actionValue = "touchmove@window->c#logPassive:once:!passive";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "touchmove", passive: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventOptionsTests.prototype["test wrong options are silently ignored"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.actionValue = "c#log:wrong:verywrong";
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c" }, { name: "log", identifier: "c" });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(EventOptionsTests.prototype, "actionValue", {
        set: function (value) {
            this.buttonElement.setAttribute("data-action", value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventOptionsTests.prototype, "element", {
        get: function () {
            return this.findElement("div");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventOptionsTests.prototype, "buttonElement", {
        get: function () {
            return this.findElement("button");
        },
        enumerable: false,
        configurable: true
    });
    return EventOptionsTests;
}(LogControllerTestCase));
export default EventOptionsTests;
//# sourceMappingURL=event_options_tests.js.map