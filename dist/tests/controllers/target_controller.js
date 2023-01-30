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
var BaseTargetController = (function (_super) {
    __extends(BaseTargetController, _super);
    function BaseTargetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTargetController.targets = ["alpha"];
    return BaseTargetController;
}(Controller));
var TargetController = (function (_super) {
    __extends(TargetController, _super);
    function TargetController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputTargetConnectedCallCountValue = 0;
        _this.inputTargetDisconnectedCallCountValue = 0;
        _this.recursiveTargetConnectedCallCountValue = 0;
        _this.recursiveTargetDisconnectedCallCountValue = 0;
        return _this;
    }
    TargetController.prototype.inputTargetConnected = function (element) {
        if (this.hasConnectedClass)
            element.classList.add(this.connectedClass);
        this.inputTargetConnectedCallCountValue++;
    };
    TargetController.prototype.inputTargetDisconnected = function (element) {
        if (this.hasDisconnectedClass)
            element.classList.add(this.disconnectedClass);
        this.inputTargetDisconnectedCallCountValue++;
    };
    TargetController.prototype.recursiveTargetConnected = function (element) {
        element.remove();
        this.recursiveTargetConnectedCallCountValue++;
        this.element.append(element);
    };
    TargetController.prototype.recursiveTargetDisconnected = function (_element) {
        this.recursiveTargetDisconnectedCallCountValue++;
    };
    TargetController.classes = ["connected", "disconnected"];
    TargetController.targets = ["beta", "input", "recursive"];
    TargetController.values = {
        inputTargetConnectedCallCount: Number,
        inputTargetDisconnectedCallCount: Number,
        recursiveTargetConnectedCallCount: Number,
        recursiveTargetDisconnectedCallCount: Number,
    };
    return TargetController;
}(BaseTargetController));
export { TargetController };
