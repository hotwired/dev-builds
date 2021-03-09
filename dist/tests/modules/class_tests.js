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
import { ControllerTestCase } from "../cases/controller_test_case";
import { ClassController } from "../controllers/class_controller";
var ValueTests = /** @class */ (function (_super) {
    __extends(ValueTests, _super);
    function ValueTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-active-class=\"test--active\"\n      data-" + _this.identifier + "-loading-class=\"busy\"\n      data-loading-class=\"xxx\"\n    ></div>\n  ";
        return _this;
    }
    ValueTests.prototype["test accessing a class property"] = function () {
        this.assert.ok(this.controller.hasActiveClass);
        this.assert.equal(this.controller.activeClass, "test--active");
    };
    ValueTests.prototype["test accessing a missing class property throws an error"] = function () {
        var _this = this;
        this.assert.notOk(this.controller.hasEnabledClass);
        this.assert.raises(function () { return _this.controller.enabledClass; });
    };
    ValueTests.prototype["test classes must be scoped by identifier"] = function () {
        this.assert.equal(this.controller.loadingClass, "busy");
    };
    return ValueTests;
}(ControllerTestCase(ClassController)));
export default ValueTests;
//# sourceMappingURL=class_tests.js.map