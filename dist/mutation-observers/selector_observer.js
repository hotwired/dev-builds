import { ElementObserver } from "./element_observer";
import { Multimap } from "../multimap";
var SelectorObserver = (function () {
    function SelectorObserver(element, selector, delegate, details) {
        this._selector = selector;
        this.details = details;
        this.elementObserver = new ElementObserver(element, this);
        this.delegate = delegate;
        this.matchesByElement = new Multimap();
    }
    Object.defineProperty(SelectorObserver.prototype, "started", {
        get: function () {
            return this.elementObserver.started;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectorObserver.prototype, "selector", {
        get: function () {
            return this._selector;
        },
        set: function (selector) {
            this._selector = selector;
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    SelectorObserver.prototype.start = function () {
        this.elementObserver.start();
    };
    SelectorObserver.prototype.pause = function (callback) {
        this.elementObserver.pause(callback);
    };
    SelectorObserver.prototype.stop = function () {
        this.elementObserver.stop();
    };
    SelectorObserver.prototype.refresh = function () {
        this.elementObserver.refresh();
    };
    Object.defineProperty(SelectorObserver.prototype, "element", {
        get: function () {
            return this.elementObserver.element;
        },
        enumerable: false,
        configurable: true
    });
    SelectorObserver.prototype.matchElement = function (element) {
        var selector = this.selector;
        if (selector) {
            var matches = element.matches(selector);
            if (this.delegate.selectorMatchElement) {
                return matches && this.delegate.selectorMatchElement(element, this.details);
            }
            return matches;
        }
        else {
            return false;
        }
    };
    SelectorObserver.prototype.matchElementsInTree = function (tree) {
        var _this = this;
        var selector = this.selector;
        if (selector) {
            var match = this.matchElement(tree) ? [tree] : [];
            var matches = Array.from(tree.querySelectorAll(selector)).filter(function (match) { return _this.matchElement(match); });
            return match.concat(matches);
        }
        else {
            return [];
        }
    };
    SelectorObserver.prototype.elementMatched = function (element) {
        var selector = this.selector;
        if (selector) {
            this.selectorMatched(element, selector);
        }
    };
    SelectorObserver.prototype.elementUnmatched = function (element) {
        var selectors = this.matchesByElement.getKeysForValue(element);
        for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
            var selector = selectors_1[_i];
            this.selectorUnmatched(element, selector);
        }
    };
    SelectorObserver.prototype.elementAttributeChanged = function (element, _attributeName) {
        var selector = this.selector;
        if (selector) {
            var matches = this.matchElement(element);
            var matchedBefore = this.matchesByElement.has(selector, element);
            if (matches && !matchedBefore) {
                this.selectorMatched(element, selector);
            }
            else if (!matches && matchedBefore) {
                this.selectorUnmatched(element, selector);
            }
        }
    };
    SelectorObserver.prototype.selectorMatched = function (element, selector) {
        this.delegate.selectorMatched(element, selector, this.details);
        this.matchesByElement.add(selector, element);
    };
    SelectorObserver.prototype.selectorUnmatched = function (element, selector) {
        this.delegate.selectorUnmatched(element, selector, this.details);
        this.matchesByElement.delete(selector, element);
    };
    return SelectorObserver;
}());
export { SelectorObserver };
