var BasicController = /** @class */ (function () {
    function BasicController(context) {
        this.context = context;
    }
    BasicController.uses = function (mixin) {
        return mixin.extends(this);
    };
    Object.defineProperty(BasicController.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicController.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicController.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicController.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicController.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    BasicController.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    BasicController.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    BasicController.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    return BasicController;
}());
export { BasicController };
//# sourceMappingURL=basic_controller.js.map