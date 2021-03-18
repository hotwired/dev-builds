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
import { ClassPropertiesMacro } from "./class_properties";
import { BasicController } from "./basic_controller";
import { TargetPropertiesMacro } from "./target_properties";
import { ValuePropertiesMacro } from "./value_properties";
var BikeshedController = /** @class */ (function (_super) {
    __extends(BikeshedController, _super);
    function BikeshedController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BikeshedController;
}(BasicController
    .uses(ClassPropertiesMacro)
    .uses(TargetPropertiesMacro)
    .uses(ValuePropertiesMacro)));
export { BikeshedController };
//# sourceMappingURL=bikeshed_controller.js.map