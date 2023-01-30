import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize } from "./string_helpers";
export function ClassPropertiesBlessing(constructor) {
    var classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce(function (properties, classDefinition) {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    var _a;
    return _a = {},
        _a["".concat(key, "Class")] = {
            get: function () {
                var classes = this.classes;
                if (classes.has(key)) {
                    return classes.get(key);
                }
                else {
                    var attribute = classes.getAttributeName(key);
                    throw new Error("Missing attribute \"".concat(attribute, "\""));
                }
            },
        },
        _a["".concat(key, "Classes")] = {
            get: function () {
                return this.classes.getAll(key);
            },
        },
        _a["has".concat(capitalize(key), "Class")] = {
            get: function () {
                return this.classes.has(key);
            },
        },
        _a;
}
