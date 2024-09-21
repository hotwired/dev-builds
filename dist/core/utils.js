export function isSomething(object) {
    return object !== null && object !== undefined;
}
export function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}
