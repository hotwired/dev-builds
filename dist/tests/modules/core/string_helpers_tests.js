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
import { TestCase } from "../../cases/test_case";
import * as helpers from "../../../core/string_helpers";
var StringHelpersTests = (function (_super) {
    __extends(StringHelpersTests, _super);
    function StringHelpersTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringHelpersTests.prototype["test should camelize strings"] = function () {
        this.assert.equal(helpers.camelize("underscore_value"), "underscoreValue");
        this.assert.equal(helpers.camelize("Underscore_value"), "UnderscoreValue");
        this.assert.equal(helpers.camelize("underscore_Value"), "underscore_Value");
        this.assert.equal(helpers.camelize("Underscore_Value"), "Underscore_Value");
        this.assert.equal(helpers.camelize("multi_underscore_value"), "multiUnderscoreValue");
        this.assert.equal(helpers.camelize("dash-value"), "dashValue");
        this.assert.equal(helpers.camelize("Dash-value"), "DashValue");
        this.assert.equal(helpers.camelize("dash-Value"), "dash-Value");
        this.assert.equal(helpers.camelize("Dash-Value"), "Dash-Value");
        this.assert.equal(helpers.camelize("multi-dash-value"), "multiDashValue");
    };
    StringHelpersTests.prototype["test should namespace camelize strings"] = function () {
        this.assert.equal(helpers.namespaceCamelize("underscore__value"), "underscoreValue");
        this.assert.equal(helpers.namespaceCamelize("Underscore__value"), "UnderscoreValue");
        this.assert.equal(helpers.namespaceCamelize("underscore__Value"), "underscore_Value");
        this.assert.equal(helpers.namespaceCamelize("Underscore__Value"), "Underscore_Value");
        this.assert.equal(helpers.namespaceCamelize("multi__underscore__value"), "multiUnderscoreValue");
        this.assert.equal(helpers.namespaceCamelize("dash--value"), "dashValue");
        this.assert.equal(helpers.namespaceCamelize("Dash--value"), "DashValue");
        this.assert.equal(helpers.namespaceCamelize("dash--Value"), "dash-Value");
        this.assert.equal(helpers.namespaceCamelize("Dash--Value"), "Dash-Value");
        this.assert.equal(helpers.namespaceCamelize("multi--dash--value"), "multiDashValue");
    };
    StringHelpersTests.prototype["test should dasherize strings"] = function () {
        this.assert.equal(helpers.dasherize("camelizedValue"), "camelized-value");
        this.assert.equal(helpers.dasherize("longCamelizedValue"), "long-camelized-value");
    };
    StringHelpersTests.prototype["test should capitalize strings"] = function () {
        this.assert.equal(helpers.capitalize("lowercase"), "Lowercase");
        this.assert.equal(helpers.capitalize("Uppercase"), "Uppercase");
    };
    StringHelpersTests.prototype["test should tokenize strings"] = function () {
        this.assert.deepEqual(helpers.tokenize(""), []);
        this.assert.deepEqual(helpers.tokenize("one"), ["one"]);
        this.assert.deepEqual(helpers.tokenize("two words"), ["two", "words"]);
        this.assert.deepEqual(helpers.tokenize("a_lot of-words with special--chars mixed__in"), [
            "a_lot",
            "of-words",
            "with",
            "special--chars",
            "mixed__in",
        ]);
    };
    return StringHelpersTests;
}(TestCase));
export default StringHelpersTests;
