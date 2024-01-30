import { BindingObserver } from "./binding_observer";
import { ValueObserver } from "./value_observer";
import { TargetObserver } from "./target_observer";
import { OutletObserver } from "./outlet_observer";
import { namespaceCamelize } from "./string_helpers";
var Context = (function () {
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
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        this.outletObserver = new OutletObserver(this, this);
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
        this.targetObserver.start();
        this.outletObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    };
    Context.prototype.refresh = function () {
        this.outletObserver.refresh();
    };
    Context.prototype.disconnect = function () {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.outletObserver.stop();
        this.targetObserver.stop();
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
    Context.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleError(error, "Error ".concat(message), detail);
    };
    Context.prototype.targetConnected = function (element, name) {
        this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    };
    Context.prototype.targetDisconnected = function (element, name) {
        this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    };
    Context.prototype.outletConnected = function (outlet, element, name) {
        this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletConnected"), outlet, element);
    };
    Context.prototype.outletDisconnected = function (outlet, element, name) {
        this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletDisconnected"), outlet, element);
    };
    Context.prototype.invokeControllerMethod = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var controller = this.controller;
        if (typeof controller[methodName] == "function") {
            controller[methodName].apply(controller, args);
        }
    };
    return Context;
}());
export { Context };
