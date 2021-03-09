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
import { Application, Controller } from "../../..";
export function startApplication() {
    var startState = document.readyState;
    var PostMessageController = /** @class */ (function (_super) {
        __extends(PostMessageController, _super);
        function PostMessageController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PostMessageController.prototype.connect = function () {
            var connectState = document.readyState;
            var targetCount = this.itemTargets.length;
            var message = JSON.stringify({ startState: startState, connectState: connectState, targetCount: targetCount });
            parent.postMessage(message, location.origin);
        };
        PostMessageController.targets = ["item"];
        return PostMessageController;
    }(Controller));
    var application = Application.start();
    application.register("a", PostMessageController);
}
//# sourceMappingURL=helpers.js.map