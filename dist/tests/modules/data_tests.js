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
var DataTests = /** @class */ (function (_super) {
    __extends(DataTests, _super);
    function DataTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "\n    <div data-controller=\"" + _this.identifier + "\"\n      data-" + _this.identifier + "-alpha=\"hello world\"\n      data-" + _this.identifier + "-beta-gamma=\"123\">\n    </div>\n  ";
        return _this;
    }
    DataTests.prototype["test DataSet#get"] = function () {
        this.assert.equal(this.controller.data.get("alpha"), "hello world");
        this.assert.equal(this.controller.data.get("betaGamma"), "123");
        this.assert.equal(this.controller.data.get("nonexistent"), null);
    };
    DataTests.prototype["test DataSet#set"] = function () {
        this.assert.equal(this.controller.data.set("alpha", "ok"), "ok");
        this.assert.equal(this.controller.data.get("alpha"), "ok");
        this.assert.equal(this.findElement("div").getAttribute("data-" + this.identifier + "-alpha"), "ok");
    };
    DataTests.prototype["test DataSet#has"] = function () {
        this.assert.ok(this.controller.data.has("alpha"));
        this.assert.ok(this.controller.data.has("betaGamma"));
        this.assert.notOk(this.controller.data.has("nonexistent"));
    };
    DataTests.prototype["test DataSet#delete"] = function () {
        this.controller.data.delete("alpha");
        this.assert.equal(this.controller.data.get("alpha"), null);
        this.assert.notOk(this.controller.data.has("alpha"));
        this.assert.notOk(this.findElement("div").hasAttribute("data-" + this.identifier + "-alpha"));
    };
    return DataTests;
}(ControllerTestCase()));
export default DataTests;
//# sourceMappingURL=data_tests.js.map