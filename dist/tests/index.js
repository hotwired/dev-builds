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
import { TestCase } from "@stimulus/test";
import { identifierForContextKey } from "..";
(/** @class */ (function (_super) {
    __extends(WebpackHelperTests, _super);
    function WebpackHelperTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebpackHelperTests.prototype["test filenames require an extension"] = function () {
        this.assertContextKeyMapsToIdentifier("./hello_controller", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_controller.js", "hello");
        this.assertContextKeyMapsToIdentifier("./hello_controller.ts", "hello");
    };
    WebpackHelperTests.prototype["test filenames require a controller suffix"] = function () {
        this.assertContextKeyMapsToIdentifier("./hello.js", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_world.js", undefined);
        this.assertContextKeyMapsToIdentifier("./hello_controller.js", "hello");
        this.assertContextKeyMapsToIdentifier("./hello-controller.js", "hello");
    };
    WebpackHelperTests.prototype["test underscores map to one dash"] = function () {
        this.assertContextKeyMapsToIdentifier("./remote_content_controller.js", "remote-content");
        this.assertContextKeyMapsToIdentifier("./date_range_editor_controller.js", "date-range-editor");
    };
    WebpackHelperTests.prototype["test slashes map to two dashes"] = function () {
        this.assertContextKeyMapsToIdentifier("./users/list_item_controller.js", "users--list-item");
        this.assertContextKeyMapsToIdentifier("./my/navigation/menu_controller.js", "my--navigation--menu");
    };
    WebpackHelperTests.prototype.assertContextKeyMapsToIdentifier = function (contextKey, expectedIdentifier) {
        var actualIdentifier = identifierForContextKey(contextKey);
        this.assert.equal(actualIdentifier, expectedIdentifier);
    };
    return WebpackHelperTests;
}(TestCase))).defineModule();
//# sourceMappingURL=index.js.map