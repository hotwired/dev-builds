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
var Classes = Mixin
    .forConstructor(BasicController)
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(Classes, _super);
        function Classes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Classes.prototype, "classes", {
            get: function () {
                return this.scope.classes;
            },
            enumerable: false,
            configurable: true
        });
        return Classes;
    }(base));
});
export var BlessedClassProperties = Classes
    .define(function (base) {
    return blessed(/** @class */ (function (_super) {
        __extends(BlessedClasses, _super);
        function BlessedClasses() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BlessedClasses;
    }(base)), function (base) {
        var classes = readInheritableStaticArrayValues(base, "classes");
        return classes.reduce(function (extended, name) {
            return mixinForClass(name).extends(extended);
        }, base);
    });
});
export var ClassPropertiesMacro = Classes
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(ClassMacro, _super);
        function ClassMacro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClassMacro.class = function (key) {
            return this.uses(mixinForClass(key));
        };
        return ClassMacro;
    }(base));
});
function mixinForClass(key) {
    var name = key + "Class";
    return Mixin
        .forMixin(Classes)
        .defineGetter(name, function () {
        var classes = this.classes;
        if (classes.has(key)) {
            return classes.get(key);
        }
        else {
            var attribute = classes.getAttributeName(key);
            throw new Error("Missing attribute \"" + attribute + "\"");
        }
    })
        .defineGetter("has" + capitalize(name), function () {
        return this.classes.has(key);
    });
}
//# sourceMappingURL=class_properties.js.map