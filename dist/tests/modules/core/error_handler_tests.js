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
import { Controller } from "../../../core/controller";
import { Application } from "../../../core/application";
import { ControllerTestCase } from "../../cases/controller_test_case";
var MockLogger = (function () {
    function MockLogger() {
        this.errors = [];
        this.logs = [];
        this.warns = [];
    }
    MockLogger.prototype.log = function (event) {
        this.logs.push(event);
    };
    MockLogger.prototype.error = function (event) {
        this.errors.push(event);
    };
    MockLogger.prototype.warn = function (event) {
        this.warns.push(event);
    };
    MockLogger.prototype.groupCollapsed = function () { };
    MockLogger.prototype.groupEnd = function () { };
    return MockLogger;
}());
var ErrorWhileConnectingController = (function (_super) {
    __extends(ErrorWhileConnectingController, _super);
    function ErrorWhileConnectingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorWhileConnectingController.prototype.connect = function () {
        throw new Error("bad!");
    };
    return ErrorWhileConnectingController;
}(Controller));
var TestApplicationWithDefaultErrorBehavior = (function (_super) {
    __extends(TestApplicationWithDefaultErrorBehavior, _super);
    function TestApplicationWithDefaultErrorBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestApplicationWithDefaultErrorBehavior;
}(Application));
var ErrorHandlerTests = (function (_super) {
    __extends(ErrorHandlerTests, _super);
    function ErrorHandlerTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controllerConstructor = ErrorWhileConnectingController;
        return _this;
    }
    ErrorHandlerTests.prototype.setupApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logger;
            return __generator(this, function (_a) {
                logger = new MockLogger();
                this.application = new TestApplicationWithDefaultErrorBehavior(this.fixtureElement, this.schema);
                this.application.logger = logger;
                window.onerror = function (message, source, lineno, colno, _error) {
                    logger.log("error from window.onerror. message = ".concat(message, ", source = ").concat(source, ", lineno = ").concat(lineno, ", colno = ").concat(colno));
                };
                _super.prototype.setupApplication.call(this);
                return [2];
            });
        });
    };
    ErrorHandlerTests.prototype["test errors in connect are thrown and handled by built in logger"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mockLogger;
            return __generator(this, function (_a) {
                mockLogger = this.application.logger;
                this.assert.equal(1, mockLogger.errors.length);
                return [2];
            });
        });
    };
    ErrorHandlerTests.prototype["test errors in connect are thrown and handled by window.onerror"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mockLogger;
            return __generator(this, function (_a) {
                mockLogger = this.application.logger;
                this.assert.equal(1, mockLogger.logs.length);
                this.assert.equal("error from window.onerror. message = Error connecting controller, source = , lineno = 0, colno = 0", mockLogger.logs[0]);
                return [2];
            });
        });
    };
    return ErrorHandlerTests;
}(ControllerTestCase(ErrorWhileConnectingController)));
export default ErrorHandlerTests;
