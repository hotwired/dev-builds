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
import { TestApplication } from "../../cases/application_test_case";
import { LogControllerTestCase } from "../../cases/log_controller_test_case";
import { defaultSchema } from "../../../core/schema";
var customSchema = __assign(__assign({}, defaultSchema), { keyMappings: __assign(__assign({}, defaultSchema.keyMappings), { a: "a", b: "b" }) });
var ActionKeyboardFilterTests = (function (_super) {
    __extends(ActionKeyboardFilterTests, _super);
    function ActionKeyboardFilterTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = customSchema;
        _this.application = new TestApplication(_this.fixtureElement, _this.schema);
        _this.identifier = ["a"];
        _this.fixtureHTML = "\n    <div data-controller=\"a\" data-action=\"keydown.esc@document->a#log\">\n      <button id=\"button1\" data-action=\"keydown.enter->a#log keydown.space->a#log2 keydown->a#log3\"></button>\n      <button id=\"button2\" data-action=\"keydown.tab->a#log   keydown.esc->a#log2   keydown->a#log3\"></button>\n      <button id=\"button3\" data-action=\"keydown.up->a#log    keydown.down->a#log2  keydown->a#log3\"></button>\n      <button id=\"button4\" data-action=\"keydown.left->a#log  keydown.right->a#log2 keydown->a#log3\"></button>\n      <button id=\"button5\" data-action=\"keydown.home->a#log  keydown.end->a#log2   keydown->a#log3\"></button>\n      <button id=\"button6\" data-action=\"keyup.end->a#log     keyup->a#log3\"></button>\n      <button id=\"button7\"></button>\n      <button id=\"button8\" data-action=\"keydown.a->a#log keydown.b->a#log2\"></button>\n      <button id=\"button9\" data-action=\"keydown.shift+a->a#log keydown.a->a#log2 keydown.ctrl+shift+a->a#log3\">\n      <button id=\"button10\" data-action=\"jquery.custom.event->a#log jquery.a->a#log2\">\n    </div>\n  ";
        return _this;
    }
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than Enter"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button1");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "Enter" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than Space"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button1");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: " " })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than Tab"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button2");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "Tab" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than Escape"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button2");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "Escape" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than ArrowUp"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button3");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "ArrowUp" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than ArrowDown"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button3");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "ArrowDown" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than ArrowLeft"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button4");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "ArrowLeft" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than ArrowRight"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button4");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "ArrowRight" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than Home"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button5");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "Home" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than End"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button5");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "End" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test keyup"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button6");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keyup", { key: "End" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keyup", currentTarget: button }, { name: "log3", identifier: "a", eventType: "keyup", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test global event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button7");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "Escape", bubbles: true })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: document });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test custom keymapping: a"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button8");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "a" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test custom keymapping: b"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button8");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "b" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test custom keymapping: unknown c"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button8");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "c" })];
                    case 2:
                        _a.sent();
                        this.assertActions();
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than shift+a"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button9");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "A", shiftKey: true })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than a"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button9");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "a" })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore event handlers associated with modifiers other than ctrol+shift+a"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button9");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerKeyboardEvent(button, "keydown", { key: "A", ctrlKey: true, shiftKey: true })];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log3", identifier: "a", eventType: "keydown", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore filter syntax when not a keyboard event"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button10");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(button, "jquery.custom.event")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log", identifier: "a", eventType: "jquery.custom.event", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    ActionKeyboardFilterTests.prototype["test ignore filter syntax when not a keyboard event (case2)"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.findElement("#button10");
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        return [4, this.triggerEvent(button, "jquery.a")];
                    case 2:
                        _a.sent();
                        this.assertActions({ name: "log2", identifier: "a", eventType: "jquery.a", currentTarget: button });
                        return [2];
                }
            });
        });
    };
    return ActionKeyboardFilterTests;
}(LogControllerTestCase));
export default ActionKeyboardFilterTests;
