export function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor === null || constructor === void 0 ? void 0 : constructor.prototype) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
//# sourceMappingURL=class.js.map