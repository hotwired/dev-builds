var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Controller } from "../../controller";
var BaseClassController = /** @class */ (function (_super) {
    __extends(BaseClassController, _super);
    function BaseClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseClassController.classes = ["active"];
    return BaseClassController;
}(Controller));
var ClassController = /** @class */ (function (_super) {
    __extends(ClassController, _super);
    function ClassController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassController.classes = ["enabled", "loading"];
    return ClassController;
}(BaseClassController));
export { ClassController };
//# sourceMappingURL=class_controller.js.map