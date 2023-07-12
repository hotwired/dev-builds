import { Multimap } from "../multimap";
import { TokenListObserver } from "../mutation-observers";
var TargetObserver = (function () {
    function TargetObserver(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap();
    }
    TargetObserver.prototype.start = function () {
        if (!this.tokenListObserver) {
            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
            this.tokenListObserver.start();
        }
    };
    TargetObserver.prototype.stop = function () {
        if (this.tokenListObserver) {
            this.disconnectAllTargets();
            this.tokenListObserver.stop();
            delete this.tokenListObserver;
        }
    };
    TargetObserver.prototype.tokenMatched = function (_a) {
        var element = _a.element, name = _a.content;
        if (this.scope.containsElement(element)) {
            this.connectTarget(element, name);
        }
    };
    TargetObserver.prototype.tokenUnmatched = function (_a) {
        var element = _a.element, name = _a.content;
        this.disconnectTarget(element, name);
    };
    TargetObserver.prototype.connectTarget = function (element, name) {
        var _this = this;
        var _a;
        if (!this.targetsByName.has(name, element)) {
            this.targetsByName.add(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () { return _this.delegate.targetConnected(element, name); });
        }
    };
    TargetObserver.prototype.disconnectTarget = function (element, name) {
        var _this = this;
        var _a;
        if (this.targetsByName.has(name, element)) {
            this.targetsByName.delete(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () { return _this.delegate.targetDisconnected(element, name); });
        }
    };
    TargetObserver.prototype.disconnectAllTargets = function () {
        for (var _i = 0, _a = this.targetsByName.keys; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            for (var _b = 0, _c = this.targetsByName.getValuesForKey(name_1); _b < _c.length; _b++) {
                var element = _c[_b];
                this.disconnectTarget(element, name_1);
            }
        }
    };
    Object.defineProperty(TargetObserver.prototype, "attributeName", {
        get: function () {
            return "data-".concat(this.context.identifier, "-target");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TargetObserver.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: false,
        configurable: true
    });
    return TargetObserver;
}());
export { TargetObserver };
