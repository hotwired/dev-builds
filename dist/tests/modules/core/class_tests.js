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
import { ControllerTestCase } from "../../cases/controller_test_case";
import { ClassController } from "../../controllers/class_controller";
var ClassTests = (function (_super) {
    __extends(ClassTests, _super);
    function ClassTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"".concat(_this.identifier, "\"\n      data-").concat(_this.identifier, "-active-class=\"test--active\"\n      data-").concat(_this.identifier, "-loading-class=\"busy\"\n      data-").concat(_this.identifier, "-success-class=\"bg-green-400 border border-green-600\"\n      data-loading-class=\"xxx\"\n    ></div>\n  ");
        return _this;
    }
    ClassTests.prototype["test accessing a class property"] = function () {
        this.assert.ok(this.controller.hasActiveClass);
        this.assert.equal(this.controller.activeClass, "test--active");
        this.assert.deepEqual(this.controller.activeClasses, ["test--active"]);
    };
    ClassTests.prototype["test accessing a missing class property throws an error"] = function () {
        var _this = this;
        this.assert.notOk(this.controller.hasEnabledClass);
        this.assert.raises(function () { return _this.controller.enabledClass; });
        this.assert.equal(this.controller.enabledClasses.length, 0);
    };
    ClassTests.prototype["test classes must be scoped by identifier"] = function () {
        this.assert.equal(this.controller.loadingClass, "busy");
    };
    ClassTests.prototype["test multiple classes map to array"] = function () {
        this.assert.deepEqual(this.controller.successClasses, ["bg-green-400", "border", "border-green-600"]);
    };
    ClassTests.prototype["test accessing a class property returns first class if multiple classes are used"] = function () {
        this.assert.equal(this.controller.successClass, "bg-green-400");
    };
    return ClassTests;
}(ControllerTestCase(ClassController)));
export default ClassTests;
