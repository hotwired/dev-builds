import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize, namespaceCamelize } from "./string_helpers";
export function OutletPropertiesBlessing(constructor) {
    var outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce(function (properties, outletDefinition) {
        return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
}
function propertiesForOutletDefinition(name) {
    var _a;
    var camelizedName = namespaceCamelize(name);
    return _a = {},
        _a["".concat(camelizedName, "Outlet")] = {
            get: function () {
                var outlet = this.outlets.find(name);
                if (outlet) {
                    var outletController = this.application.getControllerForElementAndIdentifier(outlet, name);
                    if (outletController) {
                        return outletController;
                    }
                    else {
                        throw new Error("Missing \"".concat(this.application.schema.controllerAttribute, "=").concat(name, "\" attribute on outlet element for \"").concat(this.identifier, "\" controller"));
                    }
                }
                throw new Error("Missing outlet element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
            },
        },
        _a["".concat(camelizedName, "Outlets")] = {
            get: function () {
                var _this = this;
                var outlets = this.outlets.findAll(name);
                if (outlets.length > 0) {
                    return outlets
                        .map(function (outlet) {
                        var controller = _this.application.getControllerForElementAndIdentifier(outlet, name);
                        if (controller) {
                            return controller;
                        }
                        else {
                            console.warn("The provided outlet element is missing the outlet controller \"".concat(name, "\" for \"").concat(_this.identifier, "\""), outlet);
                        }
                    })
                        .filter(function (controller) { return controller; });
                }
                return [];
            },
        },
        _a["".concat(camelizedName, "OutletElement")] = {
            get: function () {
                var outlet = this.outlets.find(name);
                if (outlet) {
                    return outlet;
                }
                else {
                    throw new Error("Missing outlet element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
                }
            },
        },
        _a["".concat(camelizedName, "OutletElements")] = {
            get: function () {
                return this.outlets.findAll(name);
            },
        },
        _a["has".concat(capitalize(camelizedName), "Outlet")] = {
            get: function () {
                return this.outlets.has(name);
            },
        },
        _a;
}
