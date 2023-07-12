import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize } from "./string_helpers";
export function TargetPropertiesBlessing(constructor) {
    var targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce(function (properties, targetDefinition) {
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    var _a;
    return _a = {},
        _a["".concat(name, "Target")] = {
            get: function () {
                var target = this.targets.find(name);
                if (target) {
                    return target;
                }
                else {
                    throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
                }
            },
        },
        _a["".concat(name, "Targets")] = {
            get: function () {
                return this.targets.findAll(name);
            },
        },
        _a["has".concat(capitalize(name), "Target")] = {
            get: function () {
                return this.targets.has(name);
            },
        },
        _a;
}
