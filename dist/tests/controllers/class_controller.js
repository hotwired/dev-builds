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
var BaseClassController = (function (_super) {
    __extends(BaseClassController, _super);
    function BaseClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseClassController.classes = ["active"];
    return BaseClassController;
}(Controller));
var ClassController = (function (_super) {
    __extends(ClassController, _super);
    function ClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassController.classes = ["enabled", "loading", "success"];
    return ClassController;
}(BaseClassController));
export { ClassController };
