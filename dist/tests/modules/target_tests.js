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
import { ControllerTestCase } from "../cases/controller_test_case";
import { TargetController } from "../controllers/target_controller";
var TargetTests = /** @class */ (function (_super) {
    __extends(TargetTests, _super);
    function TargetTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\" data-" + _this.identifier + "-connected-class=\"connected\" data-" + _this.identifier + "-disconnected-class=\"disconnected\">\n      <div data-" + _this.identifier + "-target=\"alpha\" id=\"alpha1\"></div>\n      <div data-" + _this.identifier + "-target=\"alpha\" id=\"alpha2\"></div>\n      <div data-" + _this.identifier + "-target=\"beta\" id=\"beta1\">\n        <div data-" + _this.identifier + "-target=\"gamma\" id=\"gamma1\"></div>\n      </div>\n      <div data-controller=\"" + _this.identifier + "\" id=\"child\">\n        <div data-" + _this.identifier + "-target=\"delta\" id=\"delta1\"></div>\n      </div>\n      <textarea data-" + _this.identifier + "-target=\"omega input\" id=\"input1\"></textarea>\n    </div>\n  ";
        return _this;
    }
    TargetTests.prototype["test TargetSet#find"] = function () {
        this.assert.equal(this.controller.targets.find("alpha"), this.findElement("#alpha1"));
    };
    TargetTests.prototype["test TargetSet#findAll"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha"), this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test TargetSet#findAll with multiple arguments"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha", "beta"), this.findElements("#alpha1", "#alpha2", "#beta1"));
    };
    TargetTests.prototype["test TargetSet#has"] = function () {
        this.assert.equal(this.controller.targets.has("gamma"), true);
        this.assert.equal(this.controller.targets.has("delta"), false);
    };
    TargetTests.prototype["test TargetSet#find ignores child controller targets"] = function () {
        this.assert.equal(this.controller.targets.find("delta"), null);
        this.findElement("#child").removeAttribute("data-controller");
        this.assert.equal(this.controller.targets.find("delta"), this.findElement("#delta1"));
    };
    TargetTests.prototype["test linked target properties"] = function () {
        this.assert.equal(this.controller.betaTarget, this.findElement("#beta1"));
        this.assert.deepEqual(this.controller.betaTargets, this.findElements("#beta1"));
        this.assert.equal(this.controller.hasBetaTarget, true);
    };
    TargetTests.prototype["test inherited linked target properties"] = function () {
        this.assert.equal(this.controller.alphaTarget, this.findElement("#alpha1"));
        this.assert.deepEqual(this.controller.alphaTargets, this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test singular linked target property throws an error when no target is found"] = function () {
        var _this = this;
        this.findElement("#beta1").removeAttribute("data-" + this.identifier + "-target");
        this.assert.equal(this.controller.hasBetaTarget, false);
        this.assert.equal(this.controller.betaTargets.length, 0);
        this.assert.throws(function () { return _this.controller.betaTarget; });
    };
    TargetTests.prototype["test target connected callback fires after initialize() and when calling connect()"] = function () {
        var connectedInputs = this.controller.inputTargets.filter(function (target) { return target.classList.contains("connected"); });
        this.assert.equal(connectedInputs.length, 1);
        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 1);
    };
    TargetTests.prototype["test target connected callback when element is inserted"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connectedInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectedInput = document.createElement("input");
                        connectedInput.setAttribute("data-" + this.controller.identifier + "-target", "input");
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 1);
                        this.controller.element.appendChild(connectedInput);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 2);
                        this.assert.ok(connectedInput.classList.contains("connected"), "expected \"" + connectedInput.className + "\" to contain \"connected\"");
                        this.assert.ok(connectedInput.isConnected, "element is present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target connected callback when present element adds the target attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#alpha1");
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 1);
                        element.setAttribute("data-" + this.controller.identifier + "-target", "input");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 2);
                        this.assert.ok(element.classList.contains("connected"), "expected \"" + element.className + "\" to contain \"connected\"");
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target connected callback when element adds a token to an existing target attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#alpha1");
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 1);
                        element.setAttribute("data-" + this.controller.identifier + "-target", "alpha input");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 2);
                        this.assert.ok(element.classList.contains("connected"), "expected \"" + element.className + "\" to contain \"connected\"");
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target disconnected callback fires when calling disconnect() on the controller"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.equal(this.controller.inputTargets.filter(function (target) { return target.classList.contains("disconnected"); }).length, 0);
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 0);
                        this.controller.context.disconnect();
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargets.filter(function (target) { return target.classList.contains("disconnected"); }).length, 1);
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target disconnected callback when element is removed"] = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var disconnectedInput;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        disconnectedInput = this.findElement("#input1");
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 0);
                        this.assert.notOk(disconnectedInput.classList.contains("disconnected"), "expected \"" + disconnectedInput.className + "\" not to contain \"disconnected\"");
                        (_a = disconnectedInput.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(disconnectedInput);
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _b.sent();
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 1);
                        this.assert.ok(disconnectedInput.classList.contains("disconnected"), "expected \"" + disconnectedInput.className + "\" to contain \"disconnected\"");
                        this.assert.notOk(disconnectedInput.isConnected, "element is not present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target disconnected callback when an element present in the document removes the target attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#input1");
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 0);
                        this.assert.notOk(element.classList.contains("disconnected"), "expected \"" + element.className + "\" not to contain \"disconnected\"");
                        element.removeAttribute("data-" + this.controller.identifier + "-target");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 1);
                        this.assert.ok(element.classList.contains("disconnected"), "expected \"" + element.className + "\" to contain \"disconnected\"");
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    TargetTests.prototype["test target disconnected(), then connected() callback fired when the target name is present after the attribute change"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#input1");
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 1);
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 0);
                        this.assert.notOk(element.classList.contains("disconnected"), "expected \"" + element.className + "\" not to contain \"disconnected\"");
                        element.setAttribute("data-" + this.controller.identifier + "-target", "input");
                        return [4 /*yield*/, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.inputTargetConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.inputTargetDisconnectedCallCountValue, 1);
                        this.assert.ok(element.classList.contains("disconnected"), "expected \"" + element.className + "\" to contain \"disconnected\"");
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2 /*return*/];
                }
            });
        });
    };
    return TargetTests;
}(ControllerTestCase(TargetController)));
export default TargetTests;
//# sourceMappingURL=target_tests.js.map