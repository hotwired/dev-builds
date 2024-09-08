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
import { OutletController } from "../../controllers/outlet_controller";
var OutletTests = (function (_super) {
    __extends(OutletTests, _super);
    function OutletTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div id=\"container\">\n      <div data-controller=\"alpha\" class=\"alpha\" id=\"alpha1\"></div>\n      <div data-controller=\"alpha\" class=\"alpha\" id=\"alpha2\"></div>\n\n      <div data-controller=\"beta\" class=\"beta\" id=\"beta1\">\n        <div data-controller=\"beta\" class=\"beta\" id=\"beta2\"></div>\n        <div id=\"beta3\"></div>\n        <div data-controller=\"beta\" id=\"beta4\"></div>\n      </div>\n\n      <div\n        data-controller=\"".concat(_this.identifier, "\"\n        data-").concat(_this.identifier, "-connected-class=\"connected\"\n        data-").concat(_this.identifier, "-disconnected-class=\"disconnected\"\n        data-").concat(_this.identifier, "-alpha-outlet=\"#alpha1,#alpha2\"\n        data-").concat(_this.identifier, "-beta-outlet=\".beta\"\n        data-").concat(_this.identifier, "-delta-outlet=\".delta\"\n        data-").concat(_this.identifier, "-namespaced--epsilon-outlet=\".epsilon\"\n      >\n        <div data-controller=\"gamma\" class=\"gamma\" id=\"gamma2\"></div>\n      </div>\n\n      <div data-controller=\"delta gamma\" class=\"delta gamma\" id=\"delta1\">\n        <div data-controller=\"gamma\" class=\"gamma\" id=\"gamma1\"></div>\n      </div>\n\n      <div data-controller=\"namespaced--epsilon\" class=\"epsilon\" id=\"epsilon1\"></div>\n\n      <div data-controller=\"namespaced--epsilon\" class=\"epsilon\" id=\"epsilon2\"></div>\n\n      <div class=\"beta\" id=\"beta5\"></div>\n    </div>\n  ");
        return _this;
    }
    Object.defineProperty(OutletTests.prototype, "identifiers", {
        get: function () {
            return ["test", "alpha", "beta", "gamma", "delta", "omega", "namespaced--epsilon"];
        },
        enumerable: false,
        configurable: true
    });
    OutletTests.prototype["test OutletSet#find"] = function () {
        this.assert.equal(this.controller.outlets.find("alpha"), this.findElement("#alpha1"));
        this.assert.equal(this.controller.outlets.find("beta"), this.findElement("#beta1"));
        this.assert.equal(this.controller.outlets.find("delta"), this.findElement("#delta1"));
        this.assert.equal(this.controller.outlets.find("namespaced--epsilon"), this.findElement("#epsilon1"));
    };
    OutletTests.prototype["test OutletSet#findAll"] = function () {
        this.assert.deepEqual(this.controller.outlets.findAll("alpha"), this.findElements("#alpha1", "#alpha2"));
        this.assert.deepEqual(this.controller.outlets.findAll("beta"), this.findElements("#beta1", "#beta2"));
        this.assert.deepEqual(this.controller.outlets.findAll("namespaced--epsilon"), this.findElements("#epsilon1", "#epsilon2"));
    };
    OutletTests.prototype["test OutletSet#findAll with multiple arguments"] = function () {
        this.assert.deepEqual(this.controller.outlets.findAll("alpha", "beta", "namespaced--epsilon"), this.findElements("#alpha1", "#alpha2", "#beta1", "#beta2", "#epsilon1", "#epsilon2"));
    };
    OutletTests.prototype["test OutletSet#has"] = function () {
        this.assert.equal(this.controller.outlets.has("alpha"), true);
        this.assert.equal(this.controller.outlets.has("beta"), true);
        this.assert.equal(this.controller.outlets.has("gamma"), false);
        this.assert.equal(this.controller.outlets.has("delta"), true);
        this.assert.equal(this.controller.outlets.has("omega"), false);
        this.assert.equal(this.controller.outlets.has("namespaced--epsilon"), true);
    };
    OutletTests.prototype["test OutletSet#has when attribute gets added later"] = function () {
        this.assert.equal(this.controller.outlets.has("gamma"), false);
        this.controller.element.setAttribute("data-".concat(this.identifier, "-gamma-outlet"), ".gamma");
        this.assert.equal(this.controller.outlets.has("gamma"), true);
    };
    OutletTests.prototype["test OutletSet#has when no element with selector exists"] = function () {
        this.controller.element.setAttribute("data-".concat(this.identifier, "-gamma-outlet"), "#doesntexist");
        this.assert.equal(this.controller.outlets.has("gamma"), false);
    };
    OutletTests.prototype["test OutletSet#has when selector matches but element doesn't have the right controller"] = function () {
        this.controller.element.setAttribute("data-".concat(this.identifier, "-gamma-outlet"), ".alpha");
        this.assert.equal(this.controller.outlets.has("gamma"), false);
    };
    OutletTests.prototype["test linked outlet properties"] = function () {
        var _this = this;
        var element = this.findElement("#beta1");
        var betaOutlet = this.controller.application.getControllerForElementAndIdentifier(element, "beta");
        this.assert.equal(this.controller.betaOutlet, betaOutlet);
        this.assert.equal(this.controller.betaOutletElement, element);
        var elements = this.findElements("#beta1", "#beta2");
        var betaOutlets = elements.map(function (element) {
            return _this.controller.application.getControllerForElementAndIdentifier(element, "beta");
        });
        this.assert.deepEqual(this.controller.betaOutlets, betaOutlets);
        this.assert.deepEqual(this.controller.betaOutletElements, elements);
        this.assert.equal(this.controller.hasBetaOutlet, true);
    };
    OutletTests.prototype["test inherited linked outlet properties"] = function () {
        var _this = this;
        var element = this.findElement("#alpha1");
        var alphaOutlet = this.controller.application.getControllerForElementAndIdentifier(element, "alpha");
        this.assert.equal(this.controller.alphaOutlet, alphaOutlet);
        this.assert.equal(this.controller.alphaOutletElement, element);
        var elements = this.findElements("#alpha1", "#alpha2");
        var alphaOutlets = elements.map(function (element) {
            return _this.controller.application.getControllerForElementAndIdentifier(element, "alpha");
        });
        this.assert.deepEqual(this.controller.alphaOutlets, alphaOutlets);
        this.assert.deepEqual(this.controller.alphaOutletElements, elements);
    };
    OutletTests.prototype["test singular linked outlet property throws an error when no outlet is found"] = function () {
        var _this = this;
        this.findElements("#alpha1", "#alpha2").forEach(function (e) {
            e.removeAttribute("id");
            e.removeAttribute("class");
            e.removeAttribute("data-controller");
        });
        this.assert.equal(this.controller.hasAlphaOutlet, false);
        this.assert.equal(this.controller.alphaOutlets.length, 0);
        this.assert.equal(this.controller.alphaOutletElements.length, 0);
        this.assert.throws(function () { return _this.controller.alphaOutlet; });
        this.assert.throws(function () { return _this.controller.alphaOutletElement; });
    };
    OutletTests.prototype["test outlet connected callback fires"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alphaOutlets;
            return __generator(this, function (_a) {
                alphaOutlets = this.controller.alphaOutletElements.filter(function (outlet) { return outlet.classList.contains("connected"); });
                this.assert.equal(alphaOutlets.length, 2);
                this.assert.equal(this.controller.alphaOutletConnectedCallCountValue, 2);
                return [2];
            });
        });
    };
    OutletTests.prototype["test outlet connected callback fires for namespaced outlets"] = function () {
        var epsilonOutlets = this.controller.namespacedEpsilonOutletElements.filter(function (outlet) {
            return outlet.classList.contains("connected");
        });
        this.assert.equal(epsilonOutlets.length, 2);
        this.assert.equal(this.controller.namespacedEpsilonOutletConnectedCallCountValue, 2);
    };
    OutletTests.prototype["test outlet connected callback when element is inserted"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var betaOutletElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        betaOutletElement = document.createElement("div");
                        return [4, this.setAttribute(betaOutletElement, "class", "beta")];
                    case 1:
                        _a.sent();
                        return [4, this.setAttribute(betaOutletElement, "data-controller", "beta")];
                    case 2:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        return [4, this.appendChild(this.controller.element, betaOutletElement)];
                    case 3:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 3);
                        this.assert.ok(betaOutletElement.classList.contains("connected"), "expected \"".concat(betaOutletElement.className, "\" to contain \"connected\""));
                        this.assert.ok(betaOutletElement.isConnected, "element is present in document");
                        return [4, this.appendChild("#container", betaOutletElement.cloneNode(true))];
                    case 4:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 4);
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connected callback when present element adds matching outlet selector attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#beta3");
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        return [4, this.setAttribute(element, "data-controller", "beta")];
                    case 1:
                        _a.sent();
                        return [4, this.setAttribute(element, "class", "beta")];
                    case 2:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 3);
                        this.assert.ok(element.classList.contains("connected"), "expected \"".concat(element.className, "\" to contain \"connected\""));
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connected callback when present element already has connected controller and adds matching outlet selector attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#beta4");
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        return [4, this.setAttribute(element, "class", "beta")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 3);
                        this.assert.ok(element.classList.contains("connected"), "expected \"".concat(element.className, "\" to contain \"connected\""));
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connect callback when an outlet present in the document adds a matching data-controller attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#beta5");
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        return [4, this.setAttribute(element, "data-controller", "beta")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 3);
                        this.assert.ok(element.classList.contains("connected"), "expected \"".concat(element.className, "\" to contain \"connected\""));
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback fires when calling disconnect() on the controller"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.equal(this.controller.alphaOutletElements.filter(function (outlet) { return outlet.classList.contains("disconnected"); }).length, 0);
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 0);
                        this.controller.context.disconnect();
                        return [4, this.nextFrame];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletElements.filter(function (outlet) { return outlet.classList.contains("disconnected"); }).length, 2);
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 2);
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback when element is removed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var disconnectedAlpha;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        disconnectedAlpha = this.findElement("#alpha1");
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 0);
                        this.assert.notOk(disconnectedAlpha.classList.contains("disconnected"), "expected \"".concat(disconnectedAlpha.className, "\" not to contain \"disconnected\""));
                        return [4, this.remove(disconnectedAlpha)];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 1);
                        this.assert.ok(disconnectedAlpha.classList.contains("disconnected"), "expected \"".concat(disconnectedAlpha.className, "\" to contain \"disconnected\""));
                        this.assert.notOk(disconnectedAlpha.isConnected, "element is not present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback when element is removed with namespaced outlet"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var disconnectedEpsilon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        disconnectedEpsilon = this.findElement("#epsilon1");
                        this.assert.equal(this.controller.namespacedEpsilonOutletDisconnectedCallCountValue, 0);
                        this.assert.notOk(disconnectedEpsilon.classList.contains("disconnected"), "expected \"".concat(disconnectedEpsilon.className, "\" not to contain \"disconnected\""));
                        return [4, this.remove(disconnectedEpsilon)];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.namespacedEpsilonOutletDisconnectedCallCountValue, 1);
                        this.assert.ok(disconnectedEpsilon.classList.contains("disconnected"), "expected \"".concat(disconnectedEpsilon.className, "\" to contain \"disconnected\""));
                        this.assert.notOk(disconnectedEpsilon.isConnected, "element is not present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback when an outlet present in the document removes the selector attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#alpha1");
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 0);
                        this.assert.notOk(element.classList.contains("disconnected"), "expected \"".concat(element.className, "\" not to contain \"disconnected\""));
                        return [4, this.removeAttribute(element, "id")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 1);
                        this.assert.ok(element.classList.contains("disconnected"), "expected \"".concat(element.className, "\" to contain \"disconnected\""));
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback when an outlet present in the document removes the data-controller attribute"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = this.findElement("#alpha1");
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 0);
                        this.assert.notOk(element.classList.contains("disconnected"), "expected \"".concat(element.className, "\" not to contain \"disconnected\""));
                        return [4, this.removeAttribute(element, "data-controller")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 1);
                        this.assert.ok(element.classList.contains("disconnected"), "expected \"".concat(element.className, "\" to contain \"disconnected\""));
                        this.assert.ok(element.isConnected, "element is still present in document");
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connect callback when the controlled element's outlet attribute is added"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gamma2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gamma2 = this.findElement("#gamma2");
                        return [4, this.setAttribute(this.controller.element, "data-".concat(this.identifier, "-gamma-outlet"), "#gamma2")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.gammaOutletConnectedCallCountValue, 1);
                        this.assert.ok(gamma2.isConnected, "#gamma2 is still present in document");
                        this.assert.ok(gamma2.classList.contains("connected"), "expected \"".concat(gamma2.className, "\" to contain \"connected\""));
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connect callback doesn't get trigged when any attribute gets added to the controller element"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assert.equal(this.controller.alphaOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.gammaOutletConnectedCallCountValue, 0);
                        this.assert.equal(this.controller.namespacedEpsilonOutletConnectedCallCountValue, 2);
                        return [4, this.setAttribute(this.controller.element, "data-some-random-attribute", "#alpha1")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.betaOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.gammaOutletConnectedCallCountValue, 0);
                        this.assert.equal(this.controller.namespacedEpsilonOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 0);
                        this.assert.equal(this.controller.betaOutletDisconnectedCallCountValue, 0);
                        this.assert.equal(this.controller.gammaOutletDisconnectedCallCountValue, 0);
                        this.assert.equal(this.controller.namespacedEpsilonOutletDisconnectedCallCountValue, 0);
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet connect callback when the controlled element's outlet attribute is changed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alpha1, alpha2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alpha1 = this.findElement("#alpha1");
                        alpha2 = this.findElement("#alpha2");
                        return [4, this.setAttribute(this.controller.element, "data-".concat(this.identifier, "-alpha-outlet"), "#alpha1")];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletConnectedCallCountValue, 2);
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 1);
                        this.assert.ok(alpha1.isConnected, "alpha1 is still present in document");
                        this.assert.ok(alpha2.isConnected, "alpha2 is still present in document");
                        this.assert.ok(alpha1.classList.contains("connected"), "expected \"".concat(alpha1.className, "\" to contain \"connected\""));
                        this.assert.notOk(alpha1.classList.contains("disconnected"), "expected \"".concat(alpha1.className, "\" to contain \"disconnected\""));
                        this.assert.ok(alpha2.classList.contains("disconnected"), "expected \"".concat(alpha2.className, "\" to contain \"disconnected\""));
                        return [2];
                }
            });
        });
    };
    OutletTests.prototype["test outlet disconnected callback when the controlled element's outlet attribute is removed"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alpha1, alpha2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alpha1 = this.findElement("#alpha1");
                        alpha2 = this.findElement("#alpha2");
                        return [4, this.removeAttribute(this.controller.element, "data-".concat(this.identifier, "-alpha-outlet"))];
                    case 1:
                        _a.sent();
                        this.assert.equal(this.controller.alphaOutletDisconnectedCallCountValue, 2);
                        this.assert.ok(alpha1.isConnected, "#alpha1 is still present in document");
                        this.assert.ok(alpha2.isConnected, "#alpha2 is still present in document");
                        this.assert.ok(alpha1.classList.contains("disconnected"), "expected \"".concat(alpha1.className, "\" to contain \"disconnected\""));
                        this.assert.ok(alpha2.classList.contains("disconnected"), "expected \"".concat(alpha2.className, "\" to contain \"disconnected\""));
                        return [2];
                }
            });
        });
    };
    return OutletTests;
}(ControllerTestCase(OutletController)));
export default OutletTests;
