var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ClassMap } from "./class_map";
import { DataMap } from "./data_map";
import { Guide } from "./guide";
import { attributeValueContainsToken } from "./selectors";
import { TargetSet } from "./target_set";
import { OutletSet } from "./outlet_set";
var Scope = (function () {
    function Scope(schema, element, identifier, logger) {
        var _this = this;
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = function (element) {
            return element.closest(_this.controllerSelector) === _this.element;
        };
        this.schema = schema;
        this.element = element;
        this.identifier = identifier;
        this.guide = new Guide(logger);
        this.outlets = new OutletSet(this.documentScope, element);
    }
    Scope.prototype.findElement = function (selector) {
        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    };
    Scope.prototype.findAllElements = function (selector) {
        return __spreadArray(__spreadArray([], (this.element.matches(selector) ? [this.element] : []), true), this.queryElements(selector).filter(this.containsElement), true);
    };
    Scope.prototype.queryElements = function (selector) {
        return Array.from(this.element.querySelectorAll(selector));
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
        get: function () {
            return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scope.prototype, "isDocumentScope", {
        get: function () {
            return this.element === document.documentElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scope.prototype, "documentScope", {
        get: function () {
            return this.isDocumentScope
                ? this
                : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
        },
        enumerable: false,
        configurable: true
    });
    return Scope;
}());
export { Scope };
