'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var express = require('express');
var multer = require('multer');
var path = require('path');
var url = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var multer__default = /*#__PURE__*/_interopDefaultLegacy(multer);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var url__default = /*#__PURE__*/_interopDefaultLegacy(url);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const router = express.Router();
const streamResponses = new Set;
router.use(multer__default['default']().none());
router.use((request, response, next) => {
    if (request.accepts(["text/html", "application/xhtml+xml"])) {
        next();
    }
    else {
        response.sendStatus(422);
    }
});
router.post("/redirect", (request, response) => {
    const _a = request.body, { path } = _a, query = __rest(_a, ["path"]);
    const pathname = path !== null && path !== void 0 ? path : "/src/tests/fixtures/one.html";
    const enctype = request.get("Content-Type");
    if (enctype) {
        query.enctype = enctype;
    }
    response.redirect(303, url__default['default'].format({ pathname, query }));
});
router.get("/redirect", (request, response) => {
    const _a = request.query, { path } = _a, query = __rest(_a, ["path"]);
    const pathname = path !== null && path !== void 0 ? path : "/src/tests/fixtures/one.html";
    const enctype = request.get("Content-Type");
    if (enctype) {
        query.enctype = enctype;
    }
    response.redirect(301, url__default['default'].format({ pathname, query }));
});
router.post("/reject", (request, response) => {
    const { status } = request.body;
    const fixture = path__default['default'].join(__dirname, `../../src/tests/fixtures/${status}.html`);
    response.status(parseInt(status || "422", 10)).sendFile(fixture);
});
router.post("/messages", (request, response) => {
    const { content, status, type } = request.body;
    if (typeof content == "string") {
        receiveMessage(content);
        if (type == "stream" && acceptsStreams(request)) {
            response.type("text/vnd.turbo-stream.html; charset=utf-8");
            response.send(renderMessage(content));
        }
        else {
            response.sendStatus(parseInt(status || "201", 10));
        }
    }
    else {
        response.sendStatus(422);
    }
});
router.put("/messages/:id", (request, response) => {
    const { content, type } = request.body;
    const { id } = request.params;
    if (typeof content == "string") {
        receiveMessage(content);
        if (type == "stream" && acceptsStreams(request)) {
            response.type("text/vnd.turbo-stream.html; charset=utf-8");
            response.send(renderMessage(id + ": " + content));
        }
        else {
            response.sendStatus(200);
        }
    }
    else {
        response.sendStatus(422);
    }
});
router.get("/messages", (request, response) => {
    response.set({
        "Cache-Control": "no-cache",
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive"
    });
    response.on("close", () => {
        streamResponses.delete(response);
        response.end();
    });
    response.flushHeaders();
    response.write("data:\n\n");
    streamResponses.add(response);
});
function receiveMessage(content) {
    var _a;
    const data = renderSSEData(renderMessage(content));
    for (const response of streamResponses) {
        intern.log("delivering message to stream", (_a = response.socket) === null || _a === void 0 ? void 0 : _a.remotePort);
        response.write(data);
    }
}
function renderMessage(content) {
    return `
    <turbo-stream action="append" target="messages"><template>
      <div class="message">${escapeHTML(content)}</div>
    </template></turbo-stream>
  `;
}
function acceptsStreams(request) {
    return !!request.accepts("text/vnd.turbo-stream.html");
}
function renderSSEData(data) {
    return `${data}`.split("\n").map(line => "data:" + line).join("\n") + "\n\n";
}
function escapeHTML(html) {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
const TestServer = router;

exports.TestServer = TestServer;
//# sourceMappingURL=server.js.map
