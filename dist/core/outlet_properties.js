import { readInheritableStaticArrayValues } from "./inheritable_statics";
import { capitalize, namespaceCamelize } from "./string_helpers";
export function OutletPropertiesBlessing(constructor) {
    var outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce(function (properties, outletDefinition) {
        return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
}
function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
}
function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    var outletController = getOutletController(controller, element, outletName);
    if (outletController)
        return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
        return outletController;
}
function propertiesForOutletDefinition(name) {
    var _a;
    var camelizedName = namespaceCamelize(name);
    return _a = {},
        _a["".concat(camelizedName, "Outlet")] = {
            get: function () {
                var outletElement = this.outlets.find(name);
                var selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) {
                    var outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
                    if (outletController)
                        return outletController;
                    throw new Error("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(this.identifier, "\""));
                }
                throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
            },
        },
        _a["".concat(camelizedName, "Outlets")] = {
            get: function () {
                var _this = this;
                var outlets = this.outlets.findAll(name);
                if (outlets.length > 0) {
                    return outlets
                        .map(function (outletElement) {
                        var outletController = getControllerAndEnsureConnectedScope(_this, outletElement, name);
                        if (outletController)
                            return outletController;
                        console.warn("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(_this.identifier, "\""), outletElement);
                    })
                        .filter(function (controller) { return controller; });
                }
                return [];
            },
        },
        _a["".concat(camelizedName, "OutletElement")] = {
            get: function () {
                var outletElement = this.outlets.find(name);
                var selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) {
                    return outletElement;
                }
                else {
                    throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
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
