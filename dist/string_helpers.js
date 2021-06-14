export function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) { return char.toUpperCase(); });
}
export function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
export function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
export function tokenize(value) {
    return value.trim().split(/\s+/).filter(function (content) { return content.length; });
}
//# sourceMappingURL=string_helpers.js.map