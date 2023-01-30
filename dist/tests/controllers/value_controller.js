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
var BaseValueController = (function (_super) {
    __extends(BaseValueController, _super);
    function BaseValueController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseValueController.values = {
        shadowedBoolean: String,
        string: String,
        numeric: Number,
    };
    return BaseValueController;
}(Controller));
var ValueController = (function (_super) {
    __extends(ValueController, _super);
    function ValueController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loggedNumericValues = [];
        _this.oldLoggedNumericValues = [];
        _this.loggedMissingStringValues = [];
        _this.oldLoggedMissingStringValues = [];
        _this.optionsValues = [];
        _this.oldOptionsValues = [];
        return _this;
    }
    ValueController.prototype.numericValueChanged = function (value, oldValue) {
        this.loggedNumericValues.push(value);
        this.oldLoggedNumericValues.push(oldValue);
    };
    ValueController.prototype.missingStringValueChanged = function (value, oldValue) {
        this.loggedMissingStringValues.push(value);
        this.oldLoggedMissingStringValues.push(oldValue);
    };
    ValueController.prototype.optionsValueChanged = function (value, oldValue) {
        this.optionsValues.push(value);
        this.oldOptionsValues.push(oldValue);
    };
    ValueController.values = {
        shadowedBoolean: Boolean,
        missingString: String,
        ids: Array,
        options: Object,
        "time-24hr": Boolean,
    };
    return ValueController;
}(BaseValueController));
export { ValueController };
