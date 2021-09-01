import "@stimulus/polyfills";
var context = require.context("./modules", true, /\.js$/);
var modules = context.keys().map(function (key) { return context(key).default; });
modules.forEach(function (constructor) { return constructor.defineModule(); });
//# sourceMappingURL=index.js.map