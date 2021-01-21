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
import { TargetController } from "../controllers/target_controller";
var TargetTests = /** @class */ (function (_super) {
    __extends(TargetTests, _super);
    function TargetTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\">\n      <div data-" + _this.identifier + "-target=\"alpha\" id=\"alpha1\"></div>\n      <div data-" + _this.identifier + "-target=\"alpha\" id=\"alpha2\"></div>\n      <div data-" + _this.identifier + "-target=\"beta\" id=\"beta1\">\n        <div data-" + _this.identifier + "-target=\"gamma\" id=\"gamma1\"></div>\n      </div>\n      <div data-controller=\"" + _this.identifier + "\" id=\"child\">\n        <div data-" + _this.identifier + "-target=\"delta\" id=\"delta1\"></div>\n      </div>\n      <textarea data-" + _this.identifier + "-target=\"input\" id=\"input1\"></textarea>\n    </div>\n  ";
        return _this;
    }
    TargetTests.prototype["test TargetSet#find"] = function () {
        this.assert.equal(this.controller.targets.find("alpha"), this.findElement("#alpha1"));
    };
    TargetTests.prototype["test TargetSet#findAll"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha"), this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test TargetSet#findAll with multiple arguments"] = function () {
        this.assert.deepEqual(this.controller.targets.findAll("alpha", "beta"), this.findElements("#alpha1", "#alpha2", "#beta1"));
    };
    TargetTests.prototype["test TargetSet#has"] = function () {
        this.assert.equal(this.controller.targets.has("gamma"), true);
        this.assert.equal(this.controller.targets.has("delta"), false);
    };
    TargetTests.prototype["test TargetSet#find ignores child controller targets"] = function () {
        this.assert.equal(this.controller.targets.find("delta"), null);
        this.findElement("#child").removeAttribute("data-controller");
        this.assert.equal(this.controller.targets.find("delta"), this.findElement("#delta1"));
    };
    TargetTests.prototype["test linked target properties"] = function () {
        this.assert.equal(this.controller.betaTarget, this.findElement("#beta1"));
        this.assert.deepEqual(this.controller.betaTargets, this.findElements("#beta1"));
        this.assert.equal(this.controller.hasBetaTarget, true);
    };
    TargetTests.prototype["test inherited linked target properties"] = function () {
        this.assert.equal(this.controller.alphaTarget, this.findElement("#alpha1"));
        this.assert.deepEqual(this.controller.alphaTargets, this.findElements("#alpha1", "#alpha2"));
    };
    TargetTests.prototype["test singular linked target property throws an error when no target is found"] = function () {
        var _this = this;
        this.findElement("#beta1").removeAttribute("data-" + this.identifier + "-target");
        this.assert.equal(this.controller.hasBetaTarget, false);
        this.assert.equal(this.controller.betaTargets.length, 0);
        this.assert.throws(function () { return _this.controller.betaTarget; });
    };
    return TargetTests;
}(ControllerTestCase(TargetController)));
export default TargetTests;
//# sourceMappingURL=target_tests.js.map