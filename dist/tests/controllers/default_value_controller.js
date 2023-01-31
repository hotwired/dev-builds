var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Controller } from "../../core/controller";
var DefaultValueController = (function (_super) {
    __extends(DefaultValueController, _super);
    function DefaultValueController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lifecycleCallbacks = [];
        return _this;
    }
    DefaultValueController.prototype.initialize = function () {
        this.lifecycleCallbacks.push("initialize");
    };
    DefaultValueController.prototype.connect = function () {
        this.lifecycleCallbacks.push("connect");
    };
    DefaultValueController.prototype.defaultBooleanValueChanged = function () {
        this.lifecycleCallbacks.push("defaultBooleanValueChanged");
    };
    DefaultValueController.values = {
        defaultBoolean: false,
        defaultBooleanTrue: { type: Boolean, default: true },
        defaultBooleanFalse: { type: Boolean, default: false },
        defaultBooleanOverride: true,
        defaultString: "",
        defaultStringHello: { type: String, default: "Hello" },
        defaultStringOverride: "Override me",
        defaultNumber: 0,
        defaultNumberThousand: { type: Number, default: 1000 },
        defaultNumberZero: { type: Number, default: 0 },
        defaultNumberOverride: 9999,
        defaultArray: [],
        defaultArrayFilled: { type: Array, default: [1, 2, 3] },
        defaultArrayOverride: [9, 9, 9],
        defaultObject: {},
        defaultObjectPerson: { type: Object, default: { name: "David" } },
        defaultObjectOverride: { override: "me" },
    };
    return DefaultValueController;
}(Controller));
export { DefaultValueController };
