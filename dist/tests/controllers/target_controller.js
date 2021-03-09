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
var BaseTargetController = /** @class */ (function (_super) {
    __extends(BaseTargetController, _super);
    function BaseTargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTargetController.targets = ["alpha"];
    return BaseTargetController;
}(Controller));
var TargetController = /** @class */ (function (_super) {
    __extends(TargetController, _super);
    function TargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetController.targets = ["beta", "input"];
    return TargetController;
}(BaseTargetController));
export { TargetController };
//# sourceMappingURL=target_controller.js.map