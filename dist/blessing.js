import { getAncestorsForConstructor } from "./class";
export function bless(constructor) {
    var ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce(function (extended, ancestor) {
        var blessings = getBlessingsForConstructor(ancestor);
        return blessings.reduce(function (blessed, blessing) { return blessing(blessed); }, extended);
    }, constructor);
}
export function blessed(constructor, blessing) {
    registerBlessingForConstructor(constructor, blessing);
    return constructor;
}
var blessingsByConstructor = new WeakMap();
function registerBlessingForConstructor(constructor, blessing) {
    var blessings = blessingsByConstructor.get(constructor);
    if (!blessings) {
        blessingsByConstructor.set(constructor, blessings = new Set);
    }
    if (!blessings.has(blessing)) {
        blessings.add(blessing);
    }
}
function getBlessingsForConstructor(constructor) {
    var blessings = blessingsByConstructor.get(constructor);
    return blessings ? Array.from(blessings) : [];
}
//# sourceMappingURL=blessing.js.map