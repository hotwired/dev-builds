var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { readInheritableStaticArrayValues } from "./inheritable_statics";
var TargetGuide = /** @class */ (function () {
    function TargetGuide(scope, controller) {
        this.scope = scope;
        this.controller = controller;
        this.definedTargets = readInheritableStaticArrayValues(this.controller.constructor, "targets");
        this.searchForUndefinedTargets();
    }
    Object.defineProperty(TargetGuide.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetGuide.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetGuide.prototype, "registeredControllers", {
        get: function () {
            return this.controller.application.router.modules.map(function (c) { return c.identifier; });
        },
        enumerable: false,
        configurable: true
    });
    TargetGuide.prototype.controllerRegistered = function (controllerName) {
        return this.registeredControllers.includes(controllerName);
    };
    TargetGuide.prototype.targetDefined = function (targetName) {
        return this.definedTargets.includes(targetName);
    };
    TargetGuide.prototype.getAllTargets = function (element) {
        var _this = this;
        var attribute = "data-" + this.identifier + "-target";
        var selector = "[" + attribute + "]";
        return Array.from(element.querySelectorAll(selector)).map(function (element) {
            var target = element.getAttribute(attribute);
            return {
                identifier: _this.identifier,
                target: target,
                element: element,
                attribute: attribute,
                legacy: false
            };
        });
    };
    TargetGuide.prototype.getAllLegacyTargets = function (element) {
        var attribute = "data-target";
        var selector = "[" + attribute + "]";
        return Array.from(element.querySelectorAll(selector)).map(function (element) {
            var value = element.getAttribute(attribute);
            var parts = value ? value.split(".") : [];
            return {
                identifier: parts[0],
                target: parts[1],
                element: element,
                attribute: attribute,
                legacy: true
            };
        });
    };
    TargetGuide.prototype.searchForUndefinedTargets = function () {
        var _this = this;
        var element = this.scope.element;
        var targets = __spreadArray(__spreadArray([], this.getAllTargets(element)), this.getAllLegacyTargets(element));
        targets.forEach(function (descriptor) {
            var identifier = descriptor.identifier, attribute = descriptor.attribute, target = descriptor.target, legacy = descriptor.legacy, element = descriptor.element;
            if (identifier && target) {
                _this.handleWarningForUndefinedTarget(descriptor);
            }
            else if (identifier && !target) {
                _this.controller.context.handleWarning("The \"" + attribute + "\" attribute of the Element doesn't include a target. Please specify a target for the \"" + identifier + "\" controller.", "connecting target for \"" + identifier + "\"", { identifier: identifier, target: target, attribute: attribute, element: element });
            }
            else if (legacy && !target) {
                _this.controller.context.handleWarning("The \"" + attribute + "\" attribute of the Element doesn't include a value. Please specify a controller and target value in the right format.", "connecting target", { identifier: identifier, target: target, attribute: attribute, element: element });
            }
        });
    };
    TargetGuide.prototype.handleWarningForUndefinedTarget = function (descriptor) {
        var identifier = descriptor.identifier, target = descriptor.target, element = descriptor.element, attribute = descriptor.attribute;
        if (identifier === this.identifier) {
            if (!this.targetDefined(target)) {
                this.controller.context.handleWarning("Element references undefined target \"" + target + "\" for controller \"" + identifier + "\". Make sure you defined the target \"" + target + "\" in the \"static targets\" array of your controller.", "connecting target \"" + identifier + "." + target + "\"", { identifier: identifier, target: target, element: element, attribute: attribute });
            }
        }
        else {
            if (!this.controllerRegistered(identifier)) {
                this.controller.context.handleWarning("Target \"" + target + "\" references undefined controller \"" + identifier + "\". Make sure you registered the \"" + identifier + "\" controller.", "connecting target \"" + identifier + "." + target + "\"", { identifier: identifier, target: target, element: element, attribute: attribute });
            }
        }
    };
    return TargetGuide;
}());
export { TargetGuide };
//# sourceMappingURL=target_guide.js.map