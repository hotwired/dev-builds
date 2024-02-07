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
var BaseOutletController = (function (_super) {
    __extends(BaseOutletController, _super);
    function BaseOutletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseOutletController.outlets = ["alpha"];
    return BaseOutletController;
}(Controller));
export var OutletController = (function (_super) {
    __extends(OutletController, _super);
    function OutletController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alphaOutletConnectedCallCountValue = 0;
        _this.alphaOutletDisconnectedCallCountValue = 0;
        _this.betaOutletConnectedCallCountValue = 0;
        _this.betaOutletDisconnectedCallCountValue = 0;
        _this.betaOutletsInConnectValue = 0;
        _this.gammaOutletConnectedCallCountValue = 0;
        _this.gammaOutletDisconnectedCallCountValue = 0;
        _this.namespacedEpsilonOutletConnectedCallCountValue = 0;
        _this.namespacedEpsilonOutletDisconnectedCallCountValue = 0;
        return _this;
    }
    OutletController.prototype.connect = function () {
        this.betaOutletsInConnectValue = this.betaOutlets.length;
    };
    OutletController.prototype.alphaOutletConnected = function (_outlet, element) {
        if (this.hasConnectedClass)
            element.classList.add(this.connectedClass);
        this.alphaOutletConnectedCallCountValue++;
    };
    OutletController.prototype.alphaOutletDisconnected = function (_outlet, element) {
        if (this.hasDisconnectedClass)
            element.classList.add(this.disconnectedClass);
        this.alphaOutletDisconnectedCallCountValue++;
    };
    OutletController.prototype.betaOutletConnected = function (_outlet, element) {
        if (this.hasConnectedClass)
            element.classList.add(this.connectedClass);
        this.betaOutletConnectedCallCountValue++;
    };
    OutletController.prototype.betaOutletDisconnected = function (_outlet, element) {
        if (this.hasDisconnectedClass)
            element.classList.add(this.disconnectedClass);
        this.betaOutletDisconnectedCallCountValue++;
    };
    OutletController.prototype.gammaOutletConnected = function (_outlet, element) {
        if (this.hasConnectedClass)
            element.classList.add(this.connectedClass);
        this.gammaOutletConnectedCallCountValue++;
    };
    OutletController.prototype.namespacedEpsilonOutletConnected = function (_outlet, element) {
        if (this.hasConnectedClass)
            element.classList.add(this.connectedClass);
        this.namespacedEpsilonOutletConnectedCallCountValue++;
    };
    OutletController.prototype.namespacedEpsilonOutletDisconnected = function (_outlet, element) {
        if (this.hasDisconnectedClass)
            element.classList.add(this.disconnectedClass);
        this.namespacedEpsilonOutletDisconnectedCallCountValue++;
    };
    OutletController.classes = ["connected", "disconnected"];
    OutletController.outlets = ["beta", "gamma", "delta", "omega", "namespaced--epsilon"];
    OutletController.values = {
        alphaOutletConnectedCallCount: Number,
        alphaOutletDisconnectedCallCount: Number,
        betaOutletConnectedCallCount: Number,
        betaOutletDisconnectedCallCount: Number,
        betaOutletsInConnect: Number,
        gammaOutletConnectedCallCount: Number,
        gammaOutletDisconnectedCallCount: Number,
        namespacedEpsilonOutletConnectedCallCount: Number,
        namespacedEpsilonOutletDisconnectedCallCount: Number,
    };
    return OutletController;
}(BaseOutletController));
