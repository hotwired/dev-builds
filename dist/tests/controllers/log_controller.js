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
var LogController = (function (_super) {
    __extends(LogController, _super);
    function LogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initializeCount = 0;
        _this.connectCount = 0;
        _this.disconnectCount = 0;
        return _this;
    }
    LogController.prototype.initialize = function () {
        this.initializeCount++;
    };
    LogController.prototype.connect = function () {
        this.connectCount++;
    };
    LogController.prototype.disconnect = function () {
        this.disconnectCount++;
    };
    LogController.prototype.log = function (event) {
        this.recordAction("log", event);
    };
    LogController.prototype.log2 = function (event) {
        this.recordAction("log2", event);
    };
    LogController.prototype.log3 = function (event) {
        this.recordAction("log3", event);
    };
    LogController.prototype.logPassive = function (event) {
        event.preventDefault();
        if (event.defaultPrevented) {
            this.recordAction("logPassive", event, false);
        }
        else {
            this.recordAction("logPassive", event, true);
        }
    };
    LogController.prototype.stop = function (event) {
        this.recordAction("stop", event);
        event.stopImmediatePropagation();
    };
    Object.defineProperty(LogController.prototype, "actionLog", {
        get: function () {
            return this.constructor.actionLog;
        },
        enumerable: false,
        configurable: true
    });
    LogController.prototype.recordAction = function (name, event, passive) {
        this.actionLog.push({
            name: name,
            controller: this,
            identifier: this.identifier,
            eventType: event.type,
            currentTarget: event.currentTarget,
            params: event.params,
            defaultPrevented: event.defaultPrevented,
            passive: passive || false,
        });
    };
    LogController.actionLog = [];
    return LogController;
}(Controller));
export { LogController };
