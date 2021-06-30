import { BindingObserver } from "./binding_observer";
import { TargetGuide } from "./target_guide";
import { ValueObserver } from "./value_observer";
var Context = /** @class */ (function () {
    function Context(module, scope) {
        var _this = this;
        this.logDebugActivity = function (functionName, detail) {
            if (detail === void 0) { detail = {}; }
            var _a = _this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
            detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
            _this.application.logDebugActivity(_this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.targetGuide = new TargetGuide(this.scope, this.controller);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        }
        catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    Context.prototype.connect = function () {
        this.bindingObserver.start();
        this.valueObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    };
    Context.prototype.disconnect = function () {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.valueObserver.stop();
        this.bindingObserver.stop();
    };
    Object.defineProperty(Context.prototype, "application", {
        get: function () {
            return this.module.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "identifier", {
        get: function () {
            return this.module.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "dispatcher", {
        get: function () {
            return this.application.dispatcher;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "parentElement", {
        get: function () {
            return this.element.parentElement;
        },
        enumerable: false,
        configurable: true
    });
    // Error handling
    Context.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleError(error, "Error " + message, detail);
    };
    // Logging
    Context.prototype.handleWarning = function (warning, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleWarning(warning, "Warning " + message, detail);
    };
    return Context;
}());
export { Context };
//# sourceMappingURL=context.js.map