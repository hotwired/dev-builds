import { readInheritableStaticObjectPairs } from "./inheritable_statics";
import { camelize, capitalize, dasherize } from "./string_helpers";
import { isSomething, hasProperty } from "./utils";
export function ValuePropertiesBlessing(constructor) {
    var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    var propertyDescriptorMap = {
        valueDescriptorMap: {
            get: function () {
                var _this = this;
                return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
                    var _a;
                    var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, _this.identifier);
                    var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
                }, {});
            },
        },
    };
    return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
export function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    var _a;
    var definition = parseValueDefinitionPair(valueDefinitionPair, controller);
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
            },
        },
        _a["has".concat(capitalize(name))] = {
            get: function () {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            },
        },
        _a;
}
function parseValueDefinitionPair(_a, controller) {
    var token = _a[0], typeDefinition = _a[1];
    return valueDescriptorForTokenAndTypeDefinition({
        controller: controller,
        token: token,
        typeDefinition: typeDefinition,
    });
}
export function parseValueTypeConstant(constant) {
    switch (constant) {
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
export function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue))
        return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
        return "object";
}
export function parseValueTypeObject(payload) {
    var controller = payload.controller, token = payload.token, typeObject = payload.typeObject;
    var hasType = isSomething(typeObject.type);
    var hasDefault = isSomething(typeObject.default);
    var fullObject = hasType && hasDefault;
    var onlyType = hasType && !hasDefault;
    var onlyDefault = !hasType && hasDefault;
    var typeFromObject = parseValueTypeConstant(typeObject.type);
    var typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
        return typeFromObject;
    if (onlyDefault)
        return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
        var propertyPath = controller ? "".concat(controller, ".").concat(token) : token;
        throw new Error("The specified default value for the Stimulus Value \"".concat(propertyPath, "\" must match the defined type \"").concat(typeFromObject, "\". The provided default value of \"").concat(typeObject.default, "\" is of type \"").concat(typeFromDefaultValue, "\"."));
    }
    if (fullObject)
        return typeFromObject;
}
export function parseValueTypeDefinition(payload) {
    var controller = payload.controller, token = payload.token, typeDefinition = payload.typeDefinition;
    var typeObject = { controller: controller, token: token, typeObject: typeDefinition };
    var typeFromObject = parseValueTypeObject(typeObject);
    var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    var typeFromConstant = parseValueTypeConstant(typeDefinition);
    var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
        return type;
    var propertyPath = controller ? "".concat(controller, ".").concat(typeDefinition) : token;
    throw new Error("Unknown value type \"".concat(propertyPath, "\" for \"").concat(token, "\" value"));
}
export function defaultValueForDefinition(typeDefinition) {
    var constant = parseValueTypeConstant(typeDefinition);
    if (constant)
        return defaultValuesByType[constant];
    var hasDefault = hasProperty(typeDefinition, "default");
    var hasType = hasProperty(typeDefinition, "type");
    var typeObject = typeDefinition;
    if (hasDefault)
        return typeObject.default;
    if (hasType) {
        var type = typeObject.type;
        var constantFromType = parseValueTypeConstant(type);
        if (constantFromType)
            return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
    var token = payload.token, typeDefinition = payload.typeDefinition;
    var key = "".concat(dasherize(token), "-value");
    var type = parseValueTypeDefinition(payload);
    return {
        type: type,
        key: key,
        name: camelize(key),
        get defaultValue() {
            return defaultValueForDefinition(typeDefinition);
        },
        get hasCustomDefaultValue() {
            return parseValueTypeDefault(typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default,
    };
}
var defaultValuesByType = {
    get array() {
        return [];
    },
    boolean: false,
    number: 0,
    get object() {
        return {};
    },
    string: "",
};
var readers = {
    array: function (value) {
        var array = JSON.parse(value);
        if (!Array.isArray(array)) {
            throw new TypeError("expected value of type \"array\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(array), "\""));
        }
        return array;
    },
    boolean: function (value) {
        return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number: function (value) {
        return Number(value.replace(/_/g, ""));
    },
    object: function (value) {
        var object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) {
            throw new TypeError("expected value of type \"object\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(object), "\""));
        }
        return object;
    },
    string: function (value) {
        return value;
    },
};
var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON,
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return "".concat(value);
}
