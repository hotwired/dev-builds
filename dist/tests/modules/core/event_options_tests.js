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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { LogControllerTestCase } from "../../cases/log_controller_test_case";
var EventOptionsTests = (function (_super) {
    __extends(EventOptionsTests, _super);
    function EventOptionsTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.identifier = ["c", "d"];
        _this.fixtureHTML = "\n    <div data-controller=\"c d\">\n      <button></button>\n      <details></details>\n    </div>\n    <div id=\"outside\"></div>\n  ";
        return _this;
    }
    EventOptionsTests.prototype["test different syntaxes for once action"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "click->c#log:once d#log2:once c#log3:once")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test mix once and standard actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "c#log:once d#log2 c#log3")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log2", identifier: "d", eventType: "click", currentTarget: this.buttonElement }, { name: "log3", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test stop propagation with once"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "c#stop:once c#log")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "stop", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [4, this.nextFrame];
                    case 3:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 4:
                        _a.sent();
                        this.assertActions({ name: "stop", identifier: "c", eventType: "click", currentTarget: this.buttonElement }, { name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test global once actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "keydown@window->c#log:once")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "keydown")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "keydown")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "keydown" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test edge case when updating action list with setAttribute preserves once history"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "c#log:once")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        return [4, this.setAction(this.buttonElement, "c#log2 c#log:once d#log")];
                    case 4:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 5:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c" }, { name: "log2", identifier: "c" }, { name: "log", identifier: "d" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test default passive action"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "scroll->c#logPassive:passive")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "scroll", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "scroll", passive: true });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test global passive actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "mouseup@window->c#logPassive:passive")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "mouseup", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "mouseup", passive: true });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test passive false actions"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "touchmove@window->c#logPassive:!passive")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "touchmove", passive: false });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test multiple options"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "touchmove@window->c#logPassive:once:!passive")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent("#outside", "touchmove", { setDefaultPrevented: false })];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "logPassive", eventType: "touchmove", passive: false });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test wrong options are silently ignored"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "c#log:wrong:verywrong")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c" }, { name: "log", identifier: "c" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test stop option with implicit event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.element, "click->c#log")];
                    case 1:
                        _a.sent();
                        return [4, this.setAction(this.buttonElement, "c#log2:stop")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log2", eventType: "click" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test stop option with explicit event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.element, "keydown->c#log")];
                    case 1:
                        _a.sent();
                        return [4, this.setAction(this.buttonElement, "keydown->c#log2:stop")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "keydown")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log2", eventType: "keydown" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test event propagation without stop option"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.element, "click->c#log")];
                    case 1:
                        _a.sent();
                        return [4, this.setAction(this.buttonElement, "c#log2")];
                    case 2:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 3:
                        _a.sent();
                        this.assertActions({ name: "log2", eventType: "click" }, { name: "log", eventType: "click" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test prevent option with implicit event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "c#log:prevent")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "click", defaultPrevented: true });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test prevent option with explicit event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "keyup->c#log:prevent")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "keyup")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "keyup", defaultPrevented: true });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test self option"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.buttonElement, "click->c#log:self")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "click" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test self option on parent"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setAction(this.element, "click->c#log:self")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertNoActions();
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test custom action option callback params contain the controller instance"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastActionOptions, mockCallback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastActionOptions = {};
                        mockCallback = function (options) {
                            lastActionOptions = options;
                        };
                        this.application.registerActionOption("all", function (options) {
                            mockCallback(options);
                            return true;
                        });
                        return [4, this.setAction(this.buttonElement, "click->c#log:all")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        this.assert.deepEqual(["name", "value", "event", "element", "controller"], Object.keys(lastActionOptions));
                        this.assert.equal(lastActionOptions.controller, this.application.getControllerForElementAndIdentifier(this.element, "c"));
                        this.controllerConstructor.actionLog = [];
                        return [4, this.setAction(this.buttonElement, "click->d#log:all")];
                    case 3:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 4:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "d", eventType: "click", currentTarget: this.buttonElement });
                        this.assert.deepEqual(["name", "value", "event", "element", "controller"], Object.keys(lastActionOptions));
                        this.assert.equal(lastActionOptions.controller, this.application.getControllerForElementAndIdentifier(this.element, "d"));
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test custom option"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.application.registerActionOption("open", function (_a) {
                            var value = _a.value, _b = _a.event, type = _b.type, target = _b.target;
                            switch (type) {
                                case "toggle":
                                    return target instanceof HTMLDetailsElement && target.open == value;
                                default:
                                    return true;
                            }
                        });
                        return [4, this.setAction(this.detailsElement, "toggle->c#log:open")];
                    case 1:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 2:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 3:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 4:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "toggle" }, { name: "log", eventType: "toggle" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test inverted custom option"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.application.registerActionOption("open", function (_a) {
                            var value = _a.value, _b = _a.event, type = _b.type, target = _b.target;
                            switch (type) {
                                case "toggle":
                                    return target instanceof HTMLDetailsElement && target.open == value;
                                default:
                                    return true;
                            }
                        });
                        return [4, this.setAction(this.detailsElement, "toggle->c#log:!open")];
                    case 1:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 2:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 3:
                        _a.sent();
                        return [4, this.toggleElement(this.detailsElement)];
                    case 4:
                        _a.sent();
                        this.assertActions({ name: "log", eventType: "toggle" });
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype["test custom action option callback event contains params"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastActionEventParams, mockCallback, expectedEventParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastActionEventParams = {};
                        mockCallback = function (_a) {
                            var _b = _a.event, _c = _b === void 0 ? {} : _b, _d = _c.params, params = _d === void 0 ? {} : _d;
                            lastActionEventParams = __assign({}, params);
                        };
                        this.application.registerActionOption("all", function (options) {
                            mockCallback(options);
                            return true;
                        });
                        this.buttonElement.setAttribute("data-c-custom-number-param", "41");
                        this.buttonElement.setAttribute("data-c-custom-string-param", "validation");
                        this.buttonElement.setAttribute("data-c-custom-boolean-param", "true");
                        this.buttonElement.setAttribute("data-d-should-ignore-param", "_IGNORED_");
                        return [4, this.setAction(this.buttonElement, "click->c#log:all")];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(this.buttonElement, "click")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "c", eventType: "click", currentTarget: this.buttonElement });
                        expectedEventParams = {
                            customBoolean: true,
                            customNumber: 41,
                            customString: "validation",
                        };
                        this.assert.deepEqual(this.controllerConstructor.actionLog[0].params, expectedEventParams);
                        this.assert.deepEqual(lastActionEventParams, expectedEventParams);
                        return [2];
                }
            });
        });
    };
    EventOptionsTests.prototype.setAction = function (element, value) {
        element.setAttribute("data-action", value);
        return this.nextFrame;
    };
    EventOptionsTests.prototype.toggleElement = function (details) {
        details.toggleAttribute("open");
        return this.nextFrame;
    };
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
    Object.defineProperty(EventOptionsTests.prototype, "detailsElement", {
        get: function () {
            return this.findElement("details");
        },
        enumerable: false,
        configurable: true
    });
    return EventOptionsTests;
}(LogControllerTestCase));
export default EventOptionsTests;
