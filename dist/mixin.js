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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getAncestorsForConstructor } from "./class";
var Mixin = /** @class */ (function () {
    function Mixin(mixInto) {
        this.mixInto = mixInto;
    }
    Mixin.define = function (mixInto) {
        return new Mixin(mixInto);
    };
    Mixin.forConstructor = function (constructor) {
        return new Mixin(I);
    };
    Mixin.forInterface = function () {
        return new Mixin(I);
    };
    Mixin.forMixin = function (mixin) {
        return new Mixin(I);
    };
    Mixin.prototype.extends = function (base) {
        return this.mixInto(base);
    };
    Mixin.prototype.define = function (mixInto) {
        var _this = this;
        return new Mixin(function (base) {
            var extended = _this.extends(base);
            return mixInto(extended);
        });
    };
    Mixin.prototype.defineGetter = function (name, get) {
        return this.defineProperty(name, { get: get });
    };
    Mixin.prototype.defineSetter = function (name, set) {
        return this.defineProperty(name, { set: set });
    };
    Mixin.prototype.defineValue = function (name, value) {
        return this.defineProperty(name, { value: value });
    };
    Mixin.prototype.defineMethod = function (name, method) {
        return this.defineValue(name, method);
    };
    Mixin.prototype.defineProperty = function (name, descriptor) {
        return this.define(function (base) {
            var shadowedDescriptor = getInstancePropertyDescriptor(base, name);
            if (descriptor.get && (shadowedDescriptor === null || shadowedDescriptor === void 0 ? void 0 : shadowedDescriptor.set)) {
                descriptor = __assign(__assign({}, descriptor), { set: shadowedDescriptor.set });
            }
            else if (descriptor.set && (shadowedDescriptor === null || shadowedDescriptor === void 0 ? void 0 : shadowedDescriptor.get)) {
                descriptor = __assign(__assign({}, descriptor), { get: shadowedDescriptor.get });
            }
            var extended = /** @class */ (function (_super) {
                __extends(extended, _super);
                function extended() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return extended;
            }(base));
            Object.defineProperty(extended.prototype, name, descriptor);
            return extended;
        });
    };
    return Mixin;
}());
export { Mixin };
function getInstancePropertyDescriptor(constructor, name) {
    for (var _i = 0, _a = getAncestorsForConstructor(constructor).reverse(); _i < _a.length; _i++) {
        var ancestor = _a[_i];
        var descriptor = Object.getOwnPropertyDescriptor(ancestor.prototype, name);
        if (descriptor) {
            return descriptor;
        }
    }
}
var I = function (a) { return a; };
//# sourceMappingURL=mixin.js.map