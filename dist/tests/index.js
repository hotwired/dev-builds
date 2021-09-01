"use strict";
var context = require.context("./cases", true, /\.js$/);
var modules = context.keys().map(function (key) { return context(key).default; });
modules.forEach(function (constructor) { return constructor.defineModule(); });
//# sourceMappingURL=index.js.map