import { Multimap } from "../multimap";
import { AttributeObserver } from "../mutation-observers";
import { SelectorObserver } from "../mutation-observers";
import { readInheritableStaticArrayValues } from "./inheritable_statics";
var OutletObserver = (function () {
    function OutletObserver(context, delegate) {
        this.started = false;
        this.context = context;
        this.delegate = delegate;
        this.outletsByName = new Multimap();
        this.outletElementsByName = new Multimap();
        this.selectorObserverMap = new Map();
        this.attributeObserverMap = new Map();
    }
    OutletObserver.prototype.start = function () {
        var _this = this;
        if (!this.started) {
            this.outletDefinitions.forEach(function (outletName) {
                _this.setupSelectorObserverForOutlet(outletName);
                _this.setupAttributeObserverForOutlet(outletName);
            });
            this.started = true;
            this.dependentContexts.forEach(function (context) { return context.refresh(); });
        }
    };
    OutletObserver.prototype.refresh = function () {
        this.selectorObserverMap.forEach(function (observer) { return observer.refresh(); });
        this.attributeObserverMap.forEach(function (observer) { return observer.refresh(); });
    };
    OutletObserver.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.disconnectAllOutlets();
            this.stopSelectorObservers();
            this.stopAttributeObservers();
        }
    };
    OutletObserver.prototype.stopSelectorObservers = function () {
        if (this.selectorObserverMap.size > 0) {
            this.selectorObserverMap.forEach(function (observer) { return observer.stop(); });
            this.selectorObserverMap.clear();
        }
    };
    OutletObserver.prototype.stopAttributeObservers = function () {
        if (this.attributeObserverMap.size > 0) {
            this.attributeObserverMap.forEach(function (observer) { return observer.stop(); });
            this.attributeObserverMap.clear();
        }
    };
    OutletObserver.prototype.selectorMatched = function (element, _selector, _a) {
        var outletName = _a.outletName;
        var outlet = this.getOutlet(element, outletName);
        if (outlet) {
            this.connectOutlet(outlet, element, outletName);
        }
    };
    OutletObserver.prototype.selectorUnmatched = function (element, _selector, _a) {
        var outletName = _a.outletName;
        var outlet = this.getOutletFromMap(element, outletName);
        if (outlet) {
            this.disconnectOutlet(outlet, element, outletName);
        }
    };
    OutletObserver.prototype.selectorMatchElement = function (element, _a) {
        var outletName = _a.outletName;
        var selector = this.selector(outletName);
        var hasOutlet = this.hasOutlet(element, outletName);
        var hasOutletController = element.matches("[".concat(this.schema.controllerAttribute, "~=").concat(outletName, "]"));
        if (selector) {
            return hasOutlet && hasOutletController && element.matches(selector);
        }
        else {
            return false;
        }
    };
    OutletObserver.prototype.elementMatchedAttribute = function (_element, attributeName) {
        var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    };
    OutletObserver.prototype.elementAttributeValueChanged = function (_element, attributeName) {
        var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    };
    OutletObserver.prototype.elementUnmatchedAttribute = function (_element, attributeName) {
        var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    };
    OutletObserver.prototype.connectOutlet = function (outlet, element, outletName) {
        var _this = this;
        var _a;
        if (!this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.add(outletName, outlet);
            this.outletElementsByName.add(outletName, element);
            (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () { return _this.delegate.outletConnected(outlet, element, outletName); });
        }
    };
    OutletObserver.prototype.disconnectOutlet = function (outlet, element, outletName) {
        var _this = this;
        var _a;
        if (this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.delete(outletName, outlet);
            this.outletElementsByName.delete(outletName, element);
            (_a = this.selectorObserverMap
                .get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () { return _this.delegate.outletDisconnected(outlet, element, outletName); });
        }
    };
    OutletObserver.prototype.disconnectAllOutlets = function () {
        for (var _i = 0, _a = this.outletElementsByName.keys; _i < _a.length; _i++) {
            var outletName = _a[_i];
            for (var _b = 0, _c = this.outletElementsByName.getValuesForKey(outletName); _b < _c.length; _b++) {
                var element = _c[_b];
                for (var _d = 0, _e = this.outletsByName.getValuesForKey(outletName); _d < _e.length; _d++) {
                    var outlet = _e[_d];
                    this.disconnectOutlet(outlet, element, outletName);
                }
            }
        }
    };
    OutletObserver.prototype.updateSelectorObserverForOutlet = function (outletName) {
        var observer = this.selectorObserverMap.get(outletName);
        if (observer) {
            observer.selector = this.selector(outletName);
        }
    };
    OutletObserver.prototype.setupSelectorObserverForOutlet = function (outletName) {
        var selector = this.selector(outletName);
        var selectorObserver = new SelectorObserver(document.body, selector, this, { outletName: outletName });
        this.selectorObserverMap.set(outletName, selectorObserver);
        selectorObserver.start();
    };
    OutletObserver.prototype.setupAttributeObserverForOutlet = function (outletName) {
        var attributeName = this.attributeNameForOutletName(outletName);
        var attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
        this.attributeObserverMap.set(outletName, attributeObserver);
        attributeObserver.start();
    };
    OutletObserver.prototype.selector = function (outletName) {
        return this.scope.outlets.getSelectorForOutletName(outletName);
    };
    OutletObserver.prototype.attributeNameForOutletName = function (outletName) {
        return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    };
    OutletObserver.prototype.getOutletNameFromOutletAttributeName = function (attributeName) {
        var _this = this;
        return this.outletDefinitions.find(function (outletName) { return _this.attributeNameForOutletName(outletName) === attributeName; });
    };
    Object.defineProperty(OutletObserver.prototype, "outletDependencies", {
        get: function () {
            var dependencies = new Multimap();
            this.router.modules.forEach(function (module) {
                var constructor = module.definition.controllerConstructor;
                var outlets = readInheritableStaticArrayValues(constructor, "outlets");
                outlets.forEach(function (outlet) { return dependencies.add(outlet, module.identifier); });
            });
            return dependencies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "outletDefinitions", {
        get: function () {
            return this.outletDependencies.getKeysForValue(this.identifier);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "dependentControllerIdentifiers", {
        get: function () {
            return this.outletDependencies.getValuesForKey(this.identifier);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "dependentContexts", {
        get: function () {
            var identifiers = this.dependentControllerIdentifiers;
            return this.router.contexts.filter(function (context) { return identifiers.includes(context.identifier); });
        },
        enumerable: false,
        configurable: true
    });
    OutletObserver.prototype.hasOutlet = function (element, outletName) {
        return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    };
    OutletObserver.prototype.getOutlet = function (element, outletName) {
        return this.application.getControllerForElementAndIdentifier(element, outletName);
    };
    OutletObserver.prototype.getOutletFromMap = function (element, outletName) {
        return this.outletsByName.getValuesForKey(outletName).find(function (outlet) { return outlet.element === element; });
    };
    Object.defineProperty(OutletObserver.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "schema", {
        get: function () {
            return this.context.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OutletObserver.prototype, "router", {
        get: function () {
            return this.application.router;
        },
        enumerable: false,
        configurable: true
    });
    return OutletObserver;
}());
export { OutletObserver };
