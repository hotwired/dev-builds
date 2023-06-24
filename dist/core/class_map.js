import { tokenize } from "./string_helpers";
var ClassMap = (function () {
    function ClassMap(scope) {
        this.scope = scope;
    }
    ClassMap.prototype.has = function (name) {
        return this.data.has(this.getDataKey(name));
    };
    ClassMap.prototype.get = function (name) {
        return this.getAll(name)[0];
    };
    ClassMap.prototype.getAll = function (name) {
        var tokenString = this.data.get(this.getDataKey(name)) || "";
        return tokenize(tokenString);
    };
    ClassMap.prototype.getAttributeName = function (name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    };
    ClassMap.prototype.getDataKey = function (name) {
        return "".concat(name, "-class");
    };
    Object.defineProperty(ClassMap.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: false,
        configurable: true
    });
    return ClassMap;
}());
export { ClassMap };
