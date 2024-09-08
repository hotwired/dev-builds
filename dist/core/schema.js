var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: function (identifier) { return "data-".concat(identifier, "-target"); },
    outletAttributeForScope: function (identifier, outlet) { return "data-".concat(identifier, "-").concat(outlet, "-outlet"); },
    keyMappings: __assign(__assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map(function (c) { return [c, c]; }))), objectFromEntries("0123456789".split("").map(function (n) { return [n, n]; }))),
};
function objectFromEntries(array) {
    return array.reduce(function (memo, _a) {
        var _b;
        var k = _a[0], v = _a[1];
        return (__assign(__assign({}, memo), (_b = {}, _b[k] = v, _b)));
    }, {});
}
