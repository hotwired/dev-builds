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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { BasicController } from "./basic_controller";
import { blessed } from "./blessing";
import { getAncestorsForConstructor } from "./class";
import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { Mixin } from "./mixin";
import { camelize, capitalize, dasherize } from "./string_helpers";
var Values = Mixin
    .forConstructor(BasicController)
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(Values, _super);
        function Values() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Values.prototype, "valueDescriptorMap", {
            get: function () {
                var _this = this;
                var descriptors = getValueDescriptorsForConstructor(this.constructor);
                return descriptors.reduce(function (result, descriptor) {
                    var _a;
                    var attributeName = _this.data.getAttributeNameForKey(descriptor.key);
                    return __assign(__assign({}, result), (_a = {}, _a[attributeName] = descriptor, _a));
                }, {});
            },
            enumerable: false,
            configurable: true
        });
        return Values;
    }(base));
});
export var BlessedValueProperties = Values
    .define(function (base) {
    return blessed(/** @class */ (function (_super) {
        __extends(BlessedValues, _super);
        function BlessedValues() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BlessedValues;
    }(base)), function (base) {
        var valueDefinitionPairs = readInheritableStaticObjectPairs(base, "values");
        return valueDefinitionPairs.reduce(function (extended, _a) {
            var name = _a[0], type = _a[1];
            return mixinForValue(name, type).extends(extended);
        }, base);
    });
});
export var ValuePropertiesMacro = Values
    .define(function (base) {
    return /** @class */ (function (_super) {
        __extends(ValueMacro, _super);
        function ValueMacro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValueMacro.value = function (token, typeConstant) {
            return this.uses(mixinForValue(token, typeConstant));
        };
        return ValueMacro;
    }(base));
});
var valueDescriptorsByConstructor = new WeakMap();
function registerValueDescriptorForConstructor(constructor, descriptor) {
    valueDescriptorsByConstructor.set(constructor, descriptor);
    return constructor;
}
function getValueDescriptorsForConstructor(constructor) {
    var ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce(function (result, ancestor) {
        var descriptor = valueDescriptorsByConstructor.get(ancestor);
        return descriptor ? __spreadArray(__spreadArray([], result), [descriptor]) : result;
    }, []);
}
function mixinForValue(token, typeConstant) {
    var definition = definitionForValue(token, typeConstant);
    var key = definition.key, name = definition.name, type = definition.type;
    var descriptor = valueDescriptorForTokenAndType(token, type);
    var read = readers[type];
    var write = writers[type] || writers.default;
    return Mixin
        .forMixin(Values)
        .define(function (base) {
        return registerValueDescriptorForConstructor(base, descriptor);
    })
        .defineSetter(name, function (value) {
        if (value === undefined) {
            this.data.delete(key);
        }
        else {
            this.data.set(key, write(value));
        }
    })
        .defineGetter(name, function () {
        var value = this.data.get(key);
        if (value !== null) {
            return read(value);
        }
        else {
            return definition.defaultValue;
        }
    })
        .defineGetter("has" + capitalize(name), function () {
        return this.data.has(key);
    });
}
function definitionForValue(token, typeConstant) {
    var type = parseValueTypeConstant(typeConstant);
    return valueDescriptorForTokenAndType(token, type);
}
function parseValueTypeConstant(typeConstant) {
    switch (typeConstant) {
        case Array: return "array";
        case Boolean: return "boolean";
        case Number: return "number";
        case Object: return "object";
        case String: return "string";
    }
    throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}
function valueDescriptorForTokenAndType(token, type) {
    return {
        type: type,
        name: camelize(token) + "Value",
        key: dasherize(token) + "-value",
        get defaultValue() { return defaultValuesByType[type]; }
    };
}
var defaultValuesByType = {
    get array() { return []; },
    boolean: false,
    number: 0,
    get object() { return {}; },
    string: ""
};
var readers = {
    array: function (value) {
        var array = JSON.parse(value);
        if (!Array.isArray(array)) {
            throw new TypeError("Expected array");
        }
        return array;
    },
    boolean: function (value) {
        return !(value == "0" || value == "false");
    },
    number: function (value) {
        return parseFloat(value);
    },
    object: function (value) {
        var object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) {
            throw new TypeError("Expected object");
        }
        return object;
    },
    string: function (value) {
        return value;
    }
};
var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return "" + value;
}
//# sourceMappingURL=value_properties.js.map