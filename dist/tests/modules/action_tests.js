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
import { LogControllerTestCase } from "../cases/log_controller_test_case";
var ActionTests = /** @class */ (function (_super) {
    __extends(ActionTests, _super);
    function ActionTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = "c";
        _this.fixtureHTML = "\n    <div data-controller=\"c\" data-action=\"keydown@window->c#log\">\n      <button data-action=\"c#log\"><span>Log</span></button>\n      <div id=\"outer\" data-action=\"click->c#log\">\n        <div id=\"inner\" data-controller=\"c\" data-action=\"click->c#log keyup@window->c#log\"></div>\n      </div>\n      <div id=\"multiple\" data-action=\"click->c#log click->c#log2 mousedown->c#log\"></div>\n    </div>\n    <div id=\"outside\"></div>\n    <svg id=\"svgRoot\" data-controller=\"c\" data-action=\"click->c#log\">\n      <circle id=\"svgChild\" data-action=\"mousedown->c#log\" cx=\"5\" cy=\"5\" r=\"5\">\n    </svg>\n  ";
        return _this;
    }
    ActionTests.prototype["test default event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("button", "click")];
                    case 1:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "click" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test bubbling events"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("span", "click")];
                    case 1:
                        _a.sent();
                        this.assertActions({ eventType: "click", currentTarget: this.findElement("button") });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test non-bubbling events"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("span", "click", { bubbles: false })];
                    case 1:
                        _a.sent();
                        this.assertNoActions();
                        return [4 /*yield*/, this.triggerEvent("button", "click", { bubbles: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ eventType: "click" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test nested actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var innerController;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        innerController = this.controllers[1];
                        return [4 /*yield*/, this.triggerEvent("#inner", "click")];
                    case 1:
                        _a.sent();
                        this.assert.ok(true);
                        this.assertActions({ controller: innerController, eventType: "click" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test global actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("#outside", "keydown")];
                    case 1:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "keydown" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test nested global actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var innerController;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        innerController = this.controllers[1];
                        return [4 /*yield*/, this.triggerEvent("#outside", "keyup")];
                    case 1:
                        _a.sent();
                        this.assertActions({ controller: innerController, eventType: "keyup" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test multiple actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("#multiple", "mousedown")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#multiple", "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "mousedown" }, { name: "log", eventType: "click" }, { name: "log2", eventType: "click" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionTests.prototype["test actions on svg elements"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerEvent("#svgRoot", "click")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.triggerEvent("#svgChild", "mousedown")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "click" }, { name: "log", eventType: "mousedown" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ActionTests;
}(LogControllerTestCase));
export default ActionTests;
//# sourceMappingURL=action_tests.js.map