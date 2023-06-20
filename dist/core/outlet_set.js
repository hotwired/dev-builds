var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var OutletSet = (function () {
    function OutletSet(scope, controllerElement) {
        this.scope = scope;
        this.controllerElement = controllerElement;
    }
    Object.defineProperty(OutletSet.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletSet.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletSet.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: false,
        configurable: true
    });
    OutletSet.prototype.has = function (outletName) {
        return this.find(outletName) != null;
    };
    OutletSet.prototype.find = function () {
        var _this = this;
        var outletNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            outletNames[_i] = arguments[_i];
        }
        return outletNames.reduce(function (outlet, outletName) { return outlet || _this.findOutlet(outletName); }, undefined);
    };
    OutletSet.prototype.findAll = function () {
        var _this = this;
        var outletNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            outletNames[_i] = arguments[_i];
        }
        return outletNames.reduce(function (outlets, outletName) { return __spreadArray(__spreadArray([], outlets, true), _this.findAllOutlets(outletName), true); }, []);
    };
    OutletSet.prototype.getSelectorForOutletName = function (outletName) {
        var attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
        return this.controllerElement.getAttribute(attributeName);
    };
    OutletSet.prototype.findOutlet = function (outletName) {
        var selector = this.getSelectorForOutletName(outletName);
        if (selector)
            return this.findElement(selector, outletName);
    };
    OutletSet.prototype.findAllOutlets = function (outletName) {
        var selector = this.getSelectorForOutletName(outletName);
        return selector ? this.findAllElements(selector, outletName) : [];
    };
    OutletSet.prototype.findElement = function (selector, outletName) {
        var _this = this;
        var elements = this.scope.queryElements(selector);
        return elements.filter(function (element) { return _this.matchesElement(element, selector, outletName); })[0];
    };
    OutletSet.prototype.findAllElements = function (selector, outletName) {
        var _this = this;
        var elements = this.scope.queryElements(selector);
        return elements.filter(function (element) { return _this.matchesElement(element, selector, outletName); });
    };
    OutletSet.prototype.matchesElement = function (element, selector, outletName) {
        var controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
        return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    };
    return OutletSet;
}());
export { OutletSet };
