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
import { BasicController } from "./basic_controller";
import { blessed } from "./blessing";
import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { Mixin } from "./mixin";
import { capitalize } from "./string_helpers";
var Targets = Mixin
    .forConstructor(BasicController)
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(Targets, _super);
        function Targets() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Targets.prototype, "targets", {
            get: function () {
                return this.scope.targets;
            },
            enumerable: false,
            configurable: true
        });
        return Targets;
    }(base));
});
export var BlessedTargetProperties = Targets
    .define(function (base) {
    return blessed(/** @class */ (function (_super) {
        __extends(BlessedTargets, _super);
        function BlessedTargets() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BlessedTargets;
    }(base)), function (base) {
        var targets = readInheritableStaticArrayValues(base, "targets");
        return targets.reduce(function (extended, name) {
            return mixinForTarget(name).extends(extended);
        }, base);
    });
});
export var TargetPropertiesMacro = Targets
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(TargetMacro, _super);
        function TargetMacro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TargetMacro.target = function (key) {
            return this.uses(mixinForTarget(key));
        };
        return TargetMacro;
    }(base));
});
function mixinForTarget(key) {
    var name = key + "Target";
    return Mixin
        .forMixin(Targets)
        .defineGetter(name, function () {
        var target = this.targets.find(key);
        if (target) {
            return target;
        }
        else {
            throw new Error("Missing target element \"" + name + "\" for \"" + this.identifier + "\" controller");
        }
    })
        .defineGetter(name + "s", function () {
        return this.targets.findAll(key);
    })
        .defineGetter("has" + capitalize(name), function () {
        return this.targets.has(key);
    });
}
//# sourceMappingURL=target_properties.js.map