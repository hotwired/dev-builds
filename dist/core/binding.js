var Binding = (function () {
    function Binding(context, action) {
        this.context = context;
        this.action = action;
    }
    Object.defineProperty(Binding.prototype, "index", {
        get: function () {
            return this.action.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventTarget", {
        get: function () {
            return this.action.eventTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventOptions", {
        get: function () {
            return this.action.eventOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Binding.prototype.handleEvent = function (event) {
        var actionEvent = this.prepareActionEvent(event);
        if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
            this.invokeWithEvent(actionEvent);
        }
    };
    Object.defineProperty(Binding.prototype, "eventName", {
        get: function () {
            return this.action.eventName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "method", {
        get: function () {
            var method = this.controller[this.methodName];
            if (typeof method == "function") {
                return method;
            }
            throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
        },
        enumerable: false,
        configurable: true
    });
    Binding.prototype.applyEventModifiers = function (event) {
        var element = this.action.element;
        var actionDescriptorFilters = this.context.application.actionDescriptorFilters;
        var controller = this.context.controller;
        var passes = true;
        for (var _i = 0, _a = Object.entries(this.eventOptions); _i < _a.length; _i++) {
            var _b = _a[_i], name_1 = _b[0], value = _b[1];
            if (name_1 in actionDescriptorFilters) {
                var filter = actionDescriptorFilters[name_1];
                passes = passes && filter({ name: name_1, value: value, event: event, element: element, controller: controller });
            }
            else {
                continue;
            }
        }
        return passes;
    };
    Binding.prototype.prepareActionEvent = function (event) {
        return Object.assign(event, { params: this.action.params });
    };
    Binding.prototype.invokeWithEvent = function (event) {
        var target = event.target, currentTarget = event.currentTarget;
        try {
            this.method.call(this.controller, event);
            this.context.logDebugActivity(this.methodName, { event: event, target: target, currentTarget: currentTarget, action: this.methodName });
        }
        catch (error) {
            var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;
            var detail = { identifier: identifier, controller: controller, element: element, index: index, event: event };
            this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
        }
    };
    Binding.prototype.willBeInvokedByEvent = function (event) {
        var eventTarget = event.target;
        if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
            return false;
        }
        if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
            return false;
        }
        if (this.element === eventTarget) {
            return true;
        }
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
            return this.scope.containsElement(eventTarget);
        }
        else {
            return this.scope.containsElement(this.action.element);
        }
    };
    Object.defineProperty(Binding.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "methodName", {
        get: function () {
            return this.action.methodName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    return Binding;
}());
export { Binding };
