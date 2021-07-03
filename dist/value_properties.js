import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { camelize, capitalize, dasherize } from "./string_helpers";
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
            get: function () {
                var _this = this;
                return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
                    var _a;
                    var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
export function propertiesForValueDefinitionPair(valueDefinitionPair) {
    var _a;
    var definition = parseValueDefinitionPair(valueDefinitionPair);
    var key = definition.key, name = definition.name, read = definition.reader, write = definition.writer;
    return _a = {},
        _a[name] = {
            get: function () {
                var value = this.data.get(key);
                if (value !== null) {
                    return read(value);
                }
                else {
                    return definition.defaultValue;
                }
            },
            set: function (value) {
                if (value === undefined) {
                    this.data.delete(key);
                }
                else {
                    this.data.set(key, write(value));
                }
            }
        },
        _a["has" + capitalize(name)] = {
            get: function () {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            }
        },
        _a;
}
function parseValueDefinitionPair(_a) {
    var token = _a[0], typeDefinition = _a[1];
    return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}
function parseValueTypeConstant(constant) {
    switch (constant) {
        case Array: return "array";
        case Boolean: return "boolean";
        case Number: return "number";
        case Object: return "object";
        case String: return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
        case "boolean": return "boolean";
        case "number": return "number";
        case "string": return "string";
    }
    if (Array.isArray(defaultValue))
        return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
        return "object";
}
function parseValueTypeObject(typeObject) {
    var typeFromObject = parseValueTypeConstant(typeObject.type);
    if (typeFromObject) {
        var defaultValueType = parseValueTypeDefault(typeObject.default);
        if (typeFromObject !== defaultValueType) {
            throw new Error("Type \"" + typeFromObject + "\" must match the type of the default value. Given default value: \"" + typeObject.default + "\" as \"" + defaultValueType + "\"");
        }
        return typeFromObject;
    }
}
function parseValueTypeDefinition(typeDefinition) {
    var typeFromObject = parseValueTypeObject(typeDefinition);
    var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    var typeFromConstant = parseValueTypeConstant(typeDefinition);
    var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
        return type;
    throw new Error("Unknown value type \"" + typeDefinition + "\"");
}
function defaultValueForDefinition(typeDefinition) {
    var constant = parseValueTypeConstant(typeDefinition);
    if (constant)
        return defaultValuesByType[constant];
    var defaultValue = typeDefinition.default;
    return defaultValue || typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
    var key = dasherize(token) + "-value";
    var type = parseValueTypeDefinition(typeDefinition);
    return {
        type: type,
        key: key,
        name: camelize(key),
        get defaultValue() { return defaultValueForDefinition(typeDefinition); },
        get hasCustomDefaultValue() { return parseValueTypeDefault(typeDefinition) !== undefined; },
        reader: readers[type],
        writer: writers[type] || writers.default
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
        return Number(value);
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