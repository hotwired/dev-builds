'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var intern = require('intern');
var http = require('http');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var intern__default = /*#__PURE__*/_interopDefaultLegacy(intern);

class InternTestCase {
    constructor(internTest) {
        this.internTest = internTest;
    }
    static registerSuite() {
        return intern__default['default'].getInterface("object").registerSuite(this.name, { tests: this.tests });
    }
    static get tests() {
        return this.testNames.reduce((tests, testName) => {
            return Object.assign(Object.assign({}, tests), { [testName]: internTest => this.runTest(internTest) });
        }, {});
    }
    static get testNames() {
        return this.testKeys.map(key => key.slice(5));
    }
    static get testKeys() {
        return Object.getOwnPropertyNames(this.prototype).filter(key => key.match(/^test /));
    }
    static runTest(internTest) {
        const testCase = new this(internTest);
        return testCase.runTest();
    }
    get testName() {
        return this.internTest.name;
    }
    async runTest() {
        try {
            await this.setup();
            await this.beforeTest();
            await this.test();
            await this.afterTest();
        }
        finally {
            await this.teardown();
        }
    }
    get assert() {
        return intern__default['default'].getPlugin("chai").assert;
    }
    async setup() {
    }
    async beforeTest() {
    }
    get test() {
        const method = this[`test ${this.testName}`];
        if (method != null && typeof method == "function") {
            return method;
        }
        else {
            throw new Error(`No such test "${this.testName}"`);
        }
    }
    async afterTest() {
    }
    async teardown() {
    }
}

class FunctionalTestCase extends InternTestCase {
    get remote() {
        return this.internTest.remote;
    }
    async goToLocation(location) {
        const processedLocation = location.match(/^\//) ? location.slice(1) : location;
        return this.remote.get(processedLocation);
    }
    async goBack() {
        return this.remote.goBack();
    }
    async goForward() {
        return this.remote.goForward();
    }
    async reload() {
        await this.evaluate(() => location.reload());
        return this.nextBeat;
    }
    async hasSelector(selector) {
        return (await this.remote.findAllByCssSelector(selector)).length > 0;
    }
    async selectorHasFocus(selector) {
        const activeElement = await this.remote.getActiveElement();
        return activeElement.equals(await this.querySelector(selector));
    }
    async querySelector(selector) {
        return this.remote.findByCssSelector(selector);
    }
    async waitUntilSelector(selector) {
        return (async () => {
            let hasSelector = false;
            do
                hasSelector = await this.hasSelector(selector);
            while (!hasSelector);
        })();
    }
    async waitUntilNoSelector(selector) {
        return (async () => {
            let hasSelector = true;
            do
                hasSelector = await this.hasSelector(selector);
            while (hasSelector);
        })();
    }
    async querySelectorAll(selector) {
        return this.remote.findAllByCssSelector(selector);
    }
    async clickSelector(selector) {
        return (await this.remote.findByCssSelector(selector)).click();
    }
    async scrollToSelector(selector) {
        const element = await this.remote.findByCssSelector(selector);
        return this.evaluate(element => element.scrollIntoView(), element);
    }
    async pressTab() {
        return this.remote.getActiveElement().then(activeElement => activeElement.type(('\uE004')));
    }
    async outerHTMLForSelector(selector) {
        const element = await this.remote.findByCssSelector(selector);
        return this.evaluate(element => element.outerHTML, element);
    }
    async innerHTMLForSelector(selector) {
        const element = await this.remote.findAllByCssSelector(selector);
        return this.evaluate(element => element.innerHTML, element);
    }
    async attributeForSelector(selector, attributeName) {
        const element = await this.querySelector(selector);
        return await element.getAttribute(attributeName);
    }
    async propertyForSelector(selector, attributeName) {
        const element = await this.querySelector(selector);
        return await element.getProperty(attributeName);
    }
    get scrollPosition() {
        return this.evaluate(() => ({ x: window.scrollX, y: window.scrollY }));
    }
    async isScrolledToTop() {
        const { y: pageY } = await this.scrollPosition;
        return pageY === 0;
    }
    async isScrolledToSelector(selector) {
        const { y: pageY } = await this.scrollPosition;
        const { y: elementY } = await this.remote.findByCssSelector(selector).getPosition();
        const offset = pageY - elementY;
        return Math.abs(offset) < 2;
    }
    get nextBeat() {
        return this.sleep(100);
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async evaluate(callback, ...args) {
        return await this.remote.execute(callback, args);
    }
    get head() {
        return this.evaluate(() => document.head);
    }
    get body() {
        return this.evaluate(() => document.body);
    }
    get location() {
        return this.evaluate(() => location.toString());
    }
    get origin() {
        return this.evaluate(() => location.origin.toString());
    }
    get pathname() {
        return this.evaluate(() => location.pathname);
    }
    get search() {
        return this.evaluate(() => location.search);
    }
    get searchParams() {
        return this.evaluate(() => location.search).then(search => new URLSearchParams(search));
    }
    async getSearchParam(key) {
        return (await this.searchParams).get(key) || "";
    }
    async getAllSearchParams(key) {
        return (await this.searchParams).getAll(key) || [];
    }
    get hash() {
        return this.evaluate(() => location.hash);
    }
    async acceptAlert() {
        return this.remote.acceptAlert();
    }
    async dismissAlert() {
        return this.remote.dismissAlert();
    }
    async getAlertText() {
        return this.remote.getAlertText();
    }
}

class RemoteChannel {
    constructor(remote, identifier) {
        this.index = 0;
        this.remote = remote;
        this.identifier = identifier;
    }
    async read(length) {
        const records = (await this.newRecords).slice(0, length);
        this.index += records.length;
        return records;
    }
    async drain() {
        await this.read();
    }
    get newRecords() {
        return this.remote.execute((identifier, index) => {
            const records = window[identifier];
            if (records != null && typeof records.slice == "function") {
                return records.slice(index);
            }
            else {
                return [];
            }
        }, [this.identifier, this.index]);
    }
}

class TurboDriveTestCase extends FunctionalTestCase {
    constructor() {
        super(...arguments);
        this.eventLogChannel = new RemoteChannel(this.remote, "eventLogs");
        this.mutationLogChannel = new RemoteChannel(this.remote, "mutationLogs");
    }
    async beforeTest() {
        await this.drainEventLog();
        this.lastBody = await this.body;
    }
    get nextWindowHandle() {
        return (async (nextHandle) => {
            do {
                const handle = await this.remote.getCurrentWindowHandle();
                const handles = await this.remote.getAllWindowHandles();
                nextHandle = handles[handles.indexOf(handle) + 1];
            } while (!nextHandle);
            return nextHandle;
        })();
    }
    async nextEventNamed(eventName) {
        let record;
        while (!record) {
            const records = await this.eventLogChannel.read(1);
            record = records.find(([name]) => name == eventName);
        }
        return record[1];
    }
    async noNextEventNamed(eventName) {
        const records = await this.eventLogChannel.read(1);
        return !records.some(([name]) => name == eventName);
    }
    async nextEventOnTarget(elementId, eventName) {
        let record;
        while (!record) {
            const records = await this.eventLogChannel.read(1);
            record = records.find(([name, _, id]) => name == eventName && id == elementId);
        }
        return record[1];
    }
    async nextAttributeMutationNamed(elementId, attributeName) {
        let record;
        while (!record) {
            const records = await this.mutationLogChannel.read(1);
            record = records.find(([name, id]) => name == attributeName && id == elementId);
        }
        const attributeValue = record[2];
        return attributeValue;
    }
    get nextBody() {
        return (async () => {
            let body;
            do
                body = await this.changedBody;
            while (!body);
            return this.lastBody = body;
        })();
    }
    get changedBody() {
        return (async () => {
            const body = await this.body;
            if (!this.lastBody || this.lastBody.elementId != body.elementId) {
                return body;
            }
        })();
    }
    get visitAction() {
        return this.evaluate(() => {
            try {
                return window.Turbo.navigator.currentVisit.action;
            }
            catch (error) {
                return "load";
            }
        });
    }
    drainEventLog() {
        return this.eventLogChannel.drain();
    }
}

class AsyncScriptTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/async_script.html");
    }
    async "test does not emit turbo:load when loaded asynchronously after DOMContentLoaded"() {
        const events = await this.eventLogChannel.read();
        this.assert.deepEqual(events, []);
    }
    async "test following a link when loaded asynchronously after DOMContentLoaded"() {
        this.clickSelector("#async-link");
        await this.nextBody;
        this.assert.equal(await this.visitAction, "advance");
    }
}
AsyncScriptTests.registerSuite();

class AutofocusTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/autofocus.html");
    }
    async "test autofocus first autofocus element on load"() {
        await this.nextBeat;
        this.assert.ok(await this.hasSelector("#first-autofocus-element:focus"), "focuses the first [autofocus] element on the page");
        this.assert.notOk(await this.hasSelector("#second-autofocus-element:focus"), "focuses the first [autofocus] element on the page");
    }
    async "test autofocus first [autofocus] element on visit"() {
        await this.goToLocation("/src/tests/fixtures/navigation.html");
        await this.clickSelector("#autofocus-link");
        await this.sleep(500);
        this.assert.ok(await this.hasSelector("#first-autofocus-element:focus"), "focuses the first [autofocus] element on the page");
        this.assert.notOk(await this.hasSelector("#second-autofocus-element:focus"), "focuses the first [autofocus] element on the page");
    }
    async "test navigating a frame with a descendant link autofocuses [autofocus]:first-of-type"() {
        await this.clickSelector("#frame-inner-link");
        await this.nextBeat;
        this.assert.ok(await this.hasSelector("#frames-form-first-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
        this.assert.notOk(await this.hasSelector("#frames-form-second-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
    }
    async "test navigating a frame with a link targeting the frame autofocuses [autofocus]:first-of-type"() {
        await this.clickSelector("#frame-outer-link");
        await this.nextBeat;
        this.assert.ok(await this.hasSelector("#frames-form-first-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
        this.assert.notOk(await this.hasSelector("#frames-form-second-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
    }
    async "test navigating a frame with a turbo-frame targeting the frame autofocuses [autofocus]:first-of-type"() {
        await this.clickSelector("#drives-frame-target-link");
        await this.nextBeat;
        this.assert.ok(await this.hasSelector("#frames-form-first-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
        this.assert.notOk(await this.hasSelector("#frames-form-second-autofocus-element:focus"), "focuses the first [autofocus] element in frame");
    }
}
AutofocusTests.registerSuite();

class CacheObserverTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/cache_observer.html");
    }
    async "test removes stale elements"() {
        this.assert(await this.hasSelector("#flash"));
        this.clickSelector("#link");
        await this.nextBody;
        await this.goBack();
        await this.nextBody;
        this.assert.notOk(await this.hasSelector("#flash"));
    }
}
CacheObserverTests.registerSuite();

class DriveDisabledTests extends TurboDriveTestCase {
    constructor() {
        super(...arguments);
        this.path = "/src/tests/fixtures/drive_disabled.html";
    }
    async setup() {
        await this.goToLocation(this.path);
    }
    async "test drive disabled by default; click normal link"() {
        this.clickSelector("#drive_disabled");
        await this.nextBody;
        this.assert.equal(await this.pathname, this.path);
        this.assert.equal(await this.visitAction, "load");
    }
    async "test drive disabled by default; click link inside data-turbo='true'"() {
        this.clickSelector("#drive_enabled");
        await this.nextBody;
        this.assert.equal(await this.pathname, this.path);
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test drive disabled by default; submit form inside data-turbo='true'"() {
        await this.remote.execute(() => {
            addEventListener("turbo:submit-start", () => document.documentElement.setAttribute("data-form-submitted", ""), { once: true });
        });
        this.clickSelector("#no_submitter_drive_enabled a#requestSubmit");
        await this.nextBody;
        this.assert.ok(await this.formSubmitted);
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.visitAction, "advance");
        this.assert.equal(await this.getSearchParam("greeting"), "Hello from a redirect");
    }
    get formSubmitted() {
        return this.hasSelector("html[data-form-submitted]");
    }
}
DriveDisabledTests.registerSuite();

class DriveTests extends TurboDriveTestCase {
    constructor() {
        super(...arguments);
        this.path = "/src/tests/fixtures/drive.html";
    }
    async setup() {
        await this.goToLocation(this.path);
    }
    async "test drive enabled by default; click normal link"() {
        this.clickSelector("#drive_enabled");
        await this.nextBody;
        this.assert.equal(await this.pathname, this.path);
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test drive to external link"() {
        this.clickSelector("#drive_enabled_external");
        await this.nextBody;
        this.assert.equal(await this.remote.execute(() => window.location.href), "https://example.com/");
    }
    async "test drive enabled by default; click link inside data-turbo='false'"() {
        this.clickSelector("#drive_disabled");
        await this.nextBody;
        this.assert.equal(await this.pathname, this.path);
        this.assert.equal(await this.visitAction, "load");
    }
}
DriveTests.registerSuite();

class FormSubmissionTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/form.html");
        await this.remote.execute(() => {
            addEventListener("turbo:submit-start", () => document.documentElement.setAttribute("data-form-submit-start", ""), { once: true });
            addEventListener("turbo:submit-end", () => document.documentElement.setAttribute("data-form-submit-end", ""), { once: true });
        });
    }
    async "test standard form submission renders a progress bar"() {
        await this.remote.execute(() => window.Turbo.setProgressBarDelay(0));
        await this.clickSelector("#standard form.sleep input[type=submit]");
        await this.waitUntilSelector(".turbo-progress-bar");
        this.assert.ok(await this.hasSelector(".turbo-progress-bar"), "displays progress bar");
        await this.nextBody;
        await this.waitUntilNoSelector(".turbo-progress-bar");
        this.assert.notOk(await this.hasSelector(".turbo-progress-bar"), "hides progress bar");
    }
    async "test form submission with confirmation confirmed"() {
        await this.clickSelector("#standard form.confirm input[type=submit]");
        this.assert.equal(await this.getAlertText(), "Are you sure?");
        await this.acceptAlert();
        this.assert.ok(await this.formSubmitStarted);
    }
    async "test form submission with confirmation cancelled"() {
        await this.clickSelector("#standard form.confirm input[type=submit]");
        this.assert.equal(await this.getAlertText(), "Are you sure?");
        await this.dismissAlert();
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test from submission with confirmation overriden"() {
        await this.remote.execute(() => window.Turbo.setConfirmMethod((message, element) => confirm("Overriden message")));
        await this.clickSelector("#standard form.confirm input[type=submit]");
        this.assert.equal(await this.getAlertText(), "Overriden message");
        await this.acceptAlert();
        this.assert.ok(await this.formSubmitStarted);
    }
    async "test standard form submission does not render a progress bar before expiring the delay"() {
        await this.remote.execute(() => window.Turbo.setProgressBarDelay(500));
        await this.clickSelector("#standard form.redirect input[type=submit]");
        this.assert.notOk(await this.hasSelector(".turbo-progress-bar"), "does not show progress bar before delay");
    }
    async "test standard form submission with redirect response"() {
        await this.clickSelector("#standard form.redirect input[type=submit]");
        await this.nextBody;
        this.assert.ok(await this.formSubmitStarted);
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.visitAction, "advance");
        this.assert.equal(await this.getSearchParam("greeting"), "Hello from a redirect");
        this.assert.equal(await this.nextAttributeMutationNamed("html", "aria-busy"), "true", "sets [aria-busy] on the document element");
        this.assert.equal(await this.nextAttributeMutationNamed("html", "aria-busy"), null, "removes [aria-busy] from the document element");
    }
    async "test standard POST form submission events"() {
        await this.clickSelector("#standard-post-form-submit");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.ok(fetchOptions.headers["Accept"].includes("text/vnd.turbo-stream.html"));
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:before-visit");
        await this.nextEventNamed("turbo:visit");
        await this.nextEventNamed("turbo:before-cache");
        await this.nextEventNamed("turbo:before-render");
        await this.nextEventNamed("turbo:render");
        await this.nextEventNamed("turbo:load");
    }
    async "test standard POST form submission merges values from both searchParams and body"() {
        await this.clickSelector("#form-action-post-redirect-self-q-b");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("q"), "b");
        this.assert.equal(await this.getSearchParam("sort"), "asc");
    }
    async "test standard POST form submission toggles submitter [disabled] attribute"() {
        await this.clickSelector("#standard-post-form-submit");
        this.assert.equal(await this.nextAttributeMutationNamed("standard-post-form-submit", "disabled"), "", "sets [disabled] on the submitter");
        this.assert.equal(await this.nextAttributeMutationNamed("standard-post-form-submit", "disabled"), null, "removes [disabled] from the submitter");
    }
    async "test standard GET form submission"() {
        await this.clickSelector("#standard form.greeting input[type=submit]");
        await this.nextBody;
        this.assert.ok(await this.formSubmitStarted);
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "advance");
        this.assert.equal(await this.getSearchParam("greeting"), "Hello from a form");
    }
    async "test standard GET form submission events"() {
        await this.clickSelector("#standard-get-form-submit");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.notOk(fetchOptions.headers["Accept"].includes("text/vnd.turbo-stream.html"));
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:before-visit");
        await this.nextEventNamed("turbo:visit");
        await this.nextEventNamed("turbo:before-cache");
        await this.nextEventNamed("turbo:before-render");
        await this.nextEventNamed("turbo:render");
        await this.nextEventNamed("turbo:load");
    }
    async "test standard GET form submission does not incorporate the current page's URLSearchParams values into the submission"() {
        await this.clickSelector("#form-action-self-sort");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.search, "?sort=asc");
        await this.clickSelector("#form-action-none-q-a");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.search, "?q=a", "navigates without omitted keys");
    }
    async "test standard GET form submission does not merge values into the [action] attribute"() {
        await this.clickSelector("#form-action-self-sort");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.search, "?sort=asc");
        await this.clickSelector("#form-action-self-q-b");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.search, "?q=b", "navigates without omitted keys");
    }
    async "test standard GET form submission omits the [action] value's URLSearchParams from the submission"() {
        await this.clickSelector("#form-action-self-submit");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.search, "");
    }
    async "test standard GET form submission toggles submitter [disabled] attribute"() {
        await this.clickSelector("#standard-get-form-submit");
        this.assert.equal(await this.nextAttributeMutationNamed("standard-get-form-submit", "disabled"), "", "sets [disabled] on the submitter");
        this.assert.equal(await this.nextAttributeMutationNamed("standard-get-form-submit", "disabled"), null, "removes [disabled] from the submitter");
    }
    async "test standard GET form submission appending keys"() {
        await this.goToLocation("/src/tests/fixtures/form.html?query=1");
        await this.clickSelector("#standard form.conflicting-values input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "2");
    }
    async "test standard form submission with empty created response"() {
        const htmlBefore = await this.outerHTMLForSelector("body");
        const button = await this.querySelector("#standard form.created input[type=submit]");
        await button.click();
        await this.nextBeat;
        const htmlAfter = await this.outerHTMLForSelector("body");
        this.assert.equal(htmlAfter, htmlBefore);
    }
    async "test standard form submission with empty no-content response"() {
        const htmlBefore = await this.outerHTMLForSelector("body");
        const button = await this.querySelector("#standard form.no-content input[type=submit]");
        await button.click();
        await this.nextBeat;
        const htmlAfter = await this.outerHTMLForSelector("body");
        this.assert.equal(htmlAfter, htmlBefore);
    }
    async "test standard POST form submission with multipart/form-data enctype"() {
        await this.clickSelector("#standard form[method=post][enctype] input[type=submit]");
        await this.nextBeat;
        const enctype = await this.getSearchParam("enctype");
        this.assert.ok(enctype === null || enctype === void 0 ? void 0 : enctype.startsWith("multipart/form-data"), "submits a multipart/form-data request");
    }
    async "test standard GET form submission ignores enctype"() {
        await this.clickSelector("#standard form[method=get][enctype] input[type=submit]");
        await this.nextBeat;
        const enctype = await this.getSearchParam("enctype");
        this.assert.notOk(enctype, "GET form submissions ignore enctype");
    }
    async "test standard POST form submission without an enctype"() {
        await this.clickSelector("#standard form[method=post].no-enctype input[type=submit]");
        await this.nextBeat;
        const enctype = await this.getSearchParam("enctype");
        this.assert.ok(enctype === null || enctype === void 0 ? void 0 : enctype.startsWith("application/x-www-form-urlencoded"), "submits a application/x-www-form-urlencoded request");
    }
    async "test no-action form submission with single parameter"() {
        await this.clickSelector("#no-action form.single input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "1");
        await this.clickSelector("#no-action form.single input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "1");
        await this.goToLocation("/src/tests/fixtures/form.html?query=2");
        await this.clickSelector("#no-action form.single input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "1");
    }
    async "test no-action form submission with multiple parameters"() {
        await this.goToLocation("/src/tests/fixtures/form.html?query=2");
        await this.clickSelector("#no-action form.multiple input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.deepEqual(await this.getAllSearchParams("query"), ["1", "2"]);
        await this.clickSelector("#no-action form.multiple input[type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.deepEqual(await this.getAllSearchParams("query"), ["1", "2"]);
    }
    async "test no-action form submission submitter parameters"() {
        await this.clickSelector("#no-action form.button-param [type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "1");
        this.assert.deepEqual(await this.getAllSearchParams("button"), []);
        await this.clickSelector("#no-action form.button-param [type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("query"), "1");
        this.assert.deepEqual(await this.getAllSearchParams("button"), []);
    }
    async "test input named action with no action attribute"() {
        await this.clickSelector("#action-input form.no-action [type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.equal(await this.getSearchParam("action"), "1");
        this.assert.equal(await this.getSearchParam("query"), "1");
    }
    async "test input named action with action attribute"() {
        await this.clickSelector("#action-input form.action [type=submit]");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.getSearchParam("action"), "1");
        this.assert.equal(await this.getSearchParam("query"), "1");
    }
    async "test invalid form submission with unprocessable entity status"() {
        await this.clickSelector("#reject form.unprocessable_entity input[type=submit]");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Unprocessable Entity", "renders the response HTML");
        this.assert.notOk(await this.hasSelector("#frame form.reject"), "replaces entire page");
    }
    async "test invalid form submission with long form"() {
        await this.scrollToSelector("#reject form.unprocessable_entity_with_tall_form input[type=submit]");
        await this.clickSelector("#reject form.unprocessable_entity_with_tall_form input[type=submit]");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Unprocessable Entity", "renders the response HTML");
        this.assert(await this.isScrolledToTop(), "page is scrolled to the top");
        this.assert.notOk(await this.hasSelector("#frame form.reject"), "replaces entire page");
    }
    async "test invalid form submission with server error status"() {
        this.assert(await this.hasSelector("head > #form-fixture-styles"));
        await this.clickSelector("#reject form.internal_server_error input[type=submit]");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Internal Server Error", "renders the response HTML");
        this.assert.notOk(await this.hasSelector("head > #form-fixture-styles"), "replaces head");
        this.assert.notOk(await this.hasSelector("#frame form.reject"), "replaces entire page");
    }
    async "test submitter form submission reads button attributes"() {
        const button = await this.querySelector("#submitter form button[type=submit]");
        await button.click();
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/two.html");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test submitter POST form submission with multipart/form-data formenctype"() {
        await this.clickSelector("#submitter form[method=post]:not([enctype]) input[formenctype]");
        await this.nextBeat;
        const enctype = await this.getSearchParam("enctype");
        this.assert.ok(enctype === null || enctype === void 0 ? void 0 : enctype.startsWith("multipart/form-data"), "submits a multipart/form-data request");
    }
    async "test submitter GET submission from submitter with data-turbo-frame"() {
        await this.clickSelector("#submitter form[method=get] [type=submit][data-turbo-frame]");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Form");
        this.assert.equal(await message.getVisibleText(), "Frame redirected");
    }
    async "test submitter POST submission from submitter with data-turbo-frame"() {
        await this.clickSelector("#submitter form[method=post] [type=submit][data-turbo-frame]");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Form");
        this.assert.equal(await message.getVisibleText(), "Frame redirected");
    }
    async "test frame form GET submission from submitter with data-turbo-frame=_top"() {
        await this.clickSelector("#frame form[method=get] [type=submit][data-turbo-frame=_top]");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "One");
    }
    async "test frame form POST submission from submitter with data-turbo-frame=_top"() {
        await this.clickSelector("#frame form[method=post] [type=submit][data-turbo-frame=_top]");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "One");
    }
    async "test frame POST form targetting frame submission"() {
        await this.clickSelector("#targets-frame-post-form-submit");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.ok(fetchOptions.headers["Accept"].includes("text/vnd.turbo-stream.html"));
        this.assert.equal("frame", fetchOptions.headers["Turbo-Frame"]);
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:frame-render");
        await this.nextEventNamed("turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
        const src = await (await this.querySelector("#frame")).getAttribute("src") || "";
        this.assert.equal((new URL(src)).pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test frame POST form targetting frame toggles submitter's [disabled] attribute"() {
        await this.clickSelector("#targets-frame-post-form-submit");
        this.assert.equal(await this.nextAttributeMutationNamed("targets-frame-post-form-submit", "disabled"), "", "sets [disabled] on the submitter");
        this.assert.equal(await this.nextAttributeMutationNamed("targets-frame-post-form-submit", "disabled"), null, "removes [disabled] from the submitter");
    }
    async "test frame GET form targetting frame submission"() {
        await this.clickSelector("#targets-frame-get-form-submit");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.notOk(fetchOptions.headers["Accept"].includes("text/vnd.turbo-stream.html"));
        this.assert.equal("frame", fetchOptions.headers["Turbo-Frame"]);
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:frame-render");
        await this.nextEventNamed("turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
        const src = await (await this.querySelector("#frame")).getAttribute("src") || "";
        this.assert.equal((new URL(src)).pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test frame GET form targetting frame toggles submitter's [disabled] attribute"() {
        await this.clickSelector("#targets-frame-get-form-submit");
        this.assert.equal(await this.nextAttributeMutationNamed("targets-frame-get-form-submit", "disabled"), "", "sets [disabled] on the submitter");
        this.assert.equal(await this.nextAttributeMutationNamed("targets-frame-get-form-submit", "disabled"), null, "removes [disabled] from the submitter");
    }
    async "test frame form GET submission from submitter referencing another frame"() {
        await this.clickSelector("#frame form[method=get] [type=submit][data-turbo-frame=hello]");
        await this.nextBeat;
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#hello h2");
        this.assert.equal(await frameTitle.getVisibleText(), "Hello from a frame");
        this.assert.equal(await title.getVisibleText(), "Form");
    }
    async "test frame form POST submission from submitter referencing another frame"() {
        await this.clickSelector("#frame form[method=post] [type=submit][data-turbo-frame=hello]");
        await this.nextBeat;
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#hello h2");
        this.assert.equal(await frameTitle.getVisibleText(), "Hello from a frame");
        this.assert.equal(await title.getVisibleText(), "Form");
    }
    async "test frame form submission with redirect response"() {
        const path = await this.attributeForSelector("#frame form.redirect input[name=path]", "value") || "";
        const url = new URL(path, "http://localhost:9000");
        url.searchParams.set("enctype", "application/x-www-form-urlencoded;charset=UTF-8");
        const button = await this.querySelector("#frame form.redirect input[type=submit]");
        await button.click();
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.notOk(await this.hasSelector("#frame form.redirect"));
        this.assert.equal(await message.getVisibleText(), "Frame redirected");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html", "does not redirect _top");
        this.assert.notOk(await this.search, "does not redirect _top");
        this.assert.equal(await this.attributeForSelector("#frame", "src"), url.href, "redirects the target frame");
    }
    async "test frame form submission toggles the ancestor frame's [aria-busy] attribute"() {
        await this.clickSelector("#frame form.redirect input[type=submit]");
        await this.nextBeat;
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), "", "sets [busy] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), "true", "sets [aria-busy] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), null, "removes [busy] from the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), null, "removes [aria-busy] from the #frame");
    }
    async "test frame form submission toggles the target frame's [aria-busy] attribute"() {
        await this.clickSelector('#targets-frame form.frame [type="submit"]');
        await this.nextBeat;
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), "", "sets [busy] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), "true", "sets [aria-busy] on the #frame");
        const title = await this.querySelector("#frame h2");
        this.assert.equal(await title.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), null, "removes [busy] from the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), null, "removes [aria-busy] from the #frame");
    }
    async "test frame form submission with empty created response"() {
        const htmlBefore = await this.outerHTMLForSelector("#frame");
        const button = await this.querySelector("#frame form.created input[type=submit]");
        await button.click();
        await this.nextBeat;
        const htmlAfter = await this.outerHTMLForSelector("#frame");
        this.assert.equal(htmlAfter, htmlBefore);
    }
    async "test frame form submission with empty no-content response"() {
        const htmlBefore = await this.outerHTMLForSelector("#frame");
        const button = await this.querySelector("#frame form.no-content input[type=submit]");
        await button.click();
        await this.nextBeat;
        const htmlAfter = await this.outerHTMLForSelector("#frame");
        this.assert.equal(htmlAfter, htmlBefore);
    }
    async "test frame form submission within a frame submits the Turbo-Frame header"() {
        await this.clickSelector("#frame form.redirect input[type=submit]");
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.ok(fetchOptions.headers["Turbo-Frame"], "submits with the Turbo-Frame header");
    }
    async "test invalid frame form submission with unprocessable entity status"() {
        await this.clickSelector("#frame form.unprocessable_entity input[type=submit]");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:frame-render");
        await this.nextEventNamed("turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
        const title = await this.querySelector("#frame h2");
        this.assert.ok(await this.hasSelector("#reject form"), "only replaces frame");
        this.assert.equal(await title.getVisibleText(), "Frame: Unprocessable Entity");
    }
    async "test invalid frame form submission with internal server errror status"() {
        await this.clickSelector("#frame form.internal_server_error input[type=submit]");
        this.assert.ok(await this.formSubmitStarted, "fires turbo:submit-start");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.nextEventNamed("turbo:before-fetch-response");
        this.assert.ok(await this.formSubmitEnded, "fires turbo:submit-end");
        await this.nextEventNamed("turbo:frame-render");
        await this.nextEventNamed("turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
        const title = await this.querySelector("#frame h2");
        this.assert.ok(await this.hasSelector("#reject form"), "only replaces frame");
        this.assert.equal(await title.getVisibleText(), "Frame: Internal Server Error");
    }
    async "test frame form submission with stream response"() {
        const button = await this.querySelector("#frame form.stream input[type=submit]");
        await button.click();
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.ok(await this.hasSelector("#frame form.redirect"));
        this.assert.equal(await message.getVisibleText(), "Hello!");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
        this.assert.notOk(await this.propertyForSelector("#frame", "src"), "does not change frame's src");
    }
    async "test frame form submission with HTTP verb other than GET or POST"() {
        await this.clickSelector("#frame form.put.stream input[type=submit]");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.ok(await this.hasSelector("#frame form.redirect"));
        this.assert.equal(await message.getVisibleText(), "1: Hello!");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/form.html");
    }
    async "test frame form submission with [data-turbo=false] on the form"() {
        await this.clickSelector('#frame form[data-turbo="false"] input[type=submit]');
        await this.nextBody;
        await this.querySelector("#element-id");
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test frame form submission with [data-turbo=false] on the submitter"() {
        await this.clickSelector('#frame form:not([data-turbo]) input[data-turbo="false"]');
        await this.nextBody;
        await this.querySelector("#element-id");
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test frame form submission ignores submissions with their defaultPrevented"() {
        await this.evaluate(() => document.addEventListener("submit", (event) => event.preventDefault(), true));
        await this.clickSelector("#frame .redirect [type=submit]");
        await this.nextBeat;
        this.assert.equal(await (await this.querySelector("#frame h2")).getVisibleText(), "Frame: Form");
        this.assert.equal(await this.attributeForSelector("#frame", "src"), null, "does not navigate frame");
    }
    async "test form submission with [data-turbo=false] on the form"() {
        await this.clickSelector('#turbo-false form[data-turbo="false"] input[type=submit]');
        await this.nextBody;
        await this.querySelector("#element-id");
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test form submission with [data-turbo=false] on the submitter"() {
        await this.clickSelector('#turbo-false form:not([data-turbo]) input[data-turbo="false"]');
        await this.nextBody;
        await this.querySelector("#element-id");
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test form submission skipped within method=dialog"() {
        await this.clickSelector('#dialog-method [type="submit"]');
        await this.nextBeat;
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test form submission skipped with submitter formmethod=dialog"() {
        await this.clickSelector('#dialog-formmethod-turbo-frame [formmethod="dialog"]');
        await this.nextBeat;
        this.assert.notOk(await this.formSubmitEnded);
    }
    async "test form submission targetting frame skipped within method=dialog"() {
        await this.clickSelector('#dialog-method-turbo-frame button');
        await this.nextBeat;
        this.assert.notOk(await this.formSubmitEnded);
    }
    async "test form submission targetting frame skipped with submitter formmethod=dialog"() {
        await this.clickSelector('#dialog-formmethod [formmethod="dialog"]');
        await this.nextBeat;
        this.assert.notOk(await this.formSubmitStarted);
    }
    async "test form submission targets disabled frame"() {
        await this.remote.execute(() => { var _a; return (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", ""); });
        await this.clickSelector('#targets-frame form.one [type="submit"]');
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
    }
    async "test form submission targeting a frame submits the Turbo-Frame header"() {
        await this.clickSelector('#targets-frame [type="submit"]');
        const { fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.ok(fetchOptions.headers["Turbo-Frame"], "submits with the Turbo-Frame header");
    }
    async "test link method form submission inside frame"() {
        await this.clickSelector("#link-method-inside-frame");
        await this.nextBeat;
        const title = await this.querySelector("#frame h2");
        this.assert.equal(await title.getVisibleText(), "Frame: Loaded");
        this.assert.notOk(await this.hasSelector("#nested-child"));
    }
    async "test link method form submission inside frame with data-turbo-frame=_top"() {
        await this.clickSelector("#link-method-inside-frame-target-top");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Hello");
    }
    async "test link method form submission inside frame with data-turbo-frame target"() {
        await this.clickSelector("#link-method-inside-frame-with-target");
        await this.nextBeat;
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#hello h2");
        this.assert.equal(await frameTitle.getVisibleText(), "Hello from a frame");
        this.assert.equal(await title.getVisibleText(), "Form");
    }
    async "test stream link method form submission inside frame"() {
        await this.clickSelector("#stream-link-method-inside-frame");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.equal(await message.getVisibleText(), "Link!");
    }
    async "test link method form submission within form inside frame"() {
        await this.clickSelector("#stream-link-method-within-form-inside-frame");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.equal(await message.getVisibleText(), "Link!");
    }
    async "test link method form submission inside frame with confirmation confirmed"() {
        await this.clickSelector("#link-method-inside-frame-with-confirmation");
        this.assert.equal(await this.getAlertText(), "Are you sure?");
        await this.acceptAlert();
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.equal(await message.getVisibleText(), "Link!");
    }
    async "test link method form submission inside frame with confirmation cancelled"() {
        await this.clickSelector("#link-method-inside-frame-with-confirmation");
        this.assert.equal(await this.getAlertText(), "Are you sure?");
        await this.dismissAlert();
        await this.nextBeat;
        this.assert.notOk(await this.hasSelector("#frame div.message"), "Not confirming form submission does not submit the form");
    }
    async "test link method form submission outside frame"() {
        await this.clickSelector("#link-method-outside-frame");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Hello");
    }
    async "test stream link method form submission outside frame"() {
        await this.clickSelector("#stream-link-method-outside-frame");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.equal(await message.getVisibleText(), "Link!");
    }
    async "test link method form submission within form outside frame"() {
        await this.clickSelector("#link-method-within-form-outside-frame");
        await this.nextBody;
        const title = await this.querySelector("h1");
        this.assert.equal(await title.getVisibleText(), "Hello");
    }
    async "test stream link method form submission within form outside frame"() {
        await this.clickSelector("#stream-link-method-within-form-outside-frame");
        await this.nextBeat;
        const message = await this.querySelector("#frame div.message");
        this.assert.equal(await message.getVisibleText(), "Link!");
    }
    async "test turbo:before-fetch-request fires on the form element"() {
        await this.clickSelector('#targets-frame form.one [type="submit"]');
        this.assert.ok(await this.nextEventOnTarget("form_one", "turbo:before-fetch-request"));
    }
    async "test turbo:before-fetch-response fires on the form element"() {
        await this.clickSelector('#targets-frame form.one [type="submit"]');
        this.assert.ok(await this.nextEventOnTarget("form_one", "turbo:before-fetch-response"));
    }
    async "test POST to external action ignored"() {
        await this.clickSelector("#submit-external");
        await this.noNextEventNamed("turbo:before-fetch-request");
        await this.nextBody;
        this.assert.equal(await this.location, "https://httpbin.org/post");
    }
    async "test POST to external action within frame ignored"() {
        await this.clickSelector("#submit-external-within-ignored");
        await this.noNextEventNamed("turbo:before-fetch-request");
        await this.nextBody;
        this.assert.equal(await this.location, "https://httpbin.org/post");
    }
    async "test POST to external action targetting frame ignored"() {
        await this.clickSelector("#submit-external-target-ignored");
        await this.noNextEventNamed("turbo:before-fetch-request");
        await this.nextBody;
        this.assert.equal(await this.location, "https://httpbin.org/post");
    }
    get formSubmitStarted() {
        return this.hasSelector("html[data-form-submit-start]");
    }
    get formSubmitEnded() {
        return this.hasSelector("html[data-form-submit-end]");
    }
}
FormSubmissionTests.registerSuite();

class FrameTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/frames.html");
    }
    async "test navigating a frame a second time does not leak event listeners"() {
        await this.withoutChangingEventListenersCount(async () => {
            await this.clickSelector("#outer-frame-link");
            await this.nextEventOnTarget("frame", "turbo:frame-load");
            await this.clickSelector("#outside-frame-form");
            await this.nextEventOnTarget("frame", "turbo:frame-load");
            await this.clickSelector("#outer-frame-link");
            await this.nextEventOnTarget("frame", "turbo:frame-load");
        });
    }
    async "test following a link preserves the current <turbo-frame> element's attributes"() {
        const currentPath = await this.pathname;
        await this.clickSelector("#hello a");
        await this.nextBeat;
        const frame = await this.querySelector("turbo-frame#frame");
        this.assert.equal(await frame.getAttribute("data-loaded-from"), currentPath);
        this.assert.equal(await frame.getAttribute("src"), await this.propertyForSelector("#hello a", "href"));
    }
    async "test following a link sets the frame element's [src]"() {
        await this.clickSelector("#link-frame-with-search-params");
        const { url } = await this.nextEventOnTarget("frame", "turbo:before-fetch-request");
        const fetchRequestUrl = new URL(url);
        this.assert.equal(fetchRequestUrl.pathname, "/src/tests/fixtures/frames/frame.html");
        this.assert.equal(fetchRequestUrl.searchParams.get("key"), "value", "fetch request encodes query parameters");
        await this.nextBeat;
        const src = new URL(await this.attributeForSelector("#frame", "src") || "");
        this.assert.equal(src.pathname, "/src/tests/fixtures/frames/frame.html");
        this.assert.equal(src.searchParams.get("key"), "value", "[src] attribute encodes query parameters");
    }
    async "test a frame whose src references itself does not infinitely loop"() {
        await this.clickSelector("#frame-self");
        await this.nextEventOnTarget("frame", "turbo:frame-render");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
    }
    async "test following a link driving a frame toggles the [aria-busy=true] attribute"() {
        await this.clickSelector("#hello a");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), "", "sets [busy] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), "true", "sets [aria-busy=true] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "busy"), null, "removes [busy] on the #frame");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), null, "removes [aria-busy] from the #frame");
    }
    async "test following a link to a page without a matching frame results in an empty frame"() {
        await this.clickSelector("#missing a");
        await this.nextBeat;
        this.assert.notOk(await this.innerHTMLForSelector("#missing"));
    }
    async "test following a link within a frame with a target set navigates the target frame"() {
        await this.clickSelector("#hello a");
        await this.nextBeat;
        const frameText = await this.querySelector("#frame h2");
        this.assert.equal(await frameText.getVisibleText(), "Frame: Loaded");
    }
    async "test following a link in rapid succession cancels the previous request"() {
        await this.clickSelector("#outside-frame-form");
        await this.clickSelector("#outer-frame-link");
        await this.nextBeat;
        const frameText = await this.querySelector("#frame h2");
        this.assert.equal(await frameText.getVisibleText(), "Frame: Loaded");
    }
    async "test following a link within a descendant frame whose ancestor declares a target set navigates the descendant frame"() {
        const link = await this.querySelector("#nested-root[target=frame] #nested-child a:not([data-turbo-frame])");
        const href = await link.getProperty("href");
        await link.click();
        await this.nextBeat;
        const frame = await this.querySelector("#frame h2");
        const nestedRoot = await this.querySelector("#nested-root h2");
        const nestedChild = await this.querySelector("#nested-child");
        this.assert.equal(await frame.getVisibleText(), "Frames: #frame");
        this.assert.equal(await nestedRoot.getVisibleText(), "Frames: #nested-root");
        this.assert.equal(await nestedChild.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.attributeForSelector("#frame", "src"), null);
        this.assert.equal(await this.attributeForSelector("#nested-root", "src"), null);
        this.assert.equal(await this.attributeForSelector("#nested-child", "src"), href);
    }
    async "test following a link that declares data-turbo-frame within a frame whose ancestor respects the override"() {
        await this.clickSelector("#nested-root[target=frame] #nested-child a[data-turbo-frame]");
        await this.nextBeat;
        const frameText = await this.querySelector("body > h1");
        this.assert.equal(await frameText.getVisibleText(), "One");
        this.assert.notOk(await this.hasSelector("#frame"));
        this.assert.notOk(await this.hasSelector("#nested-root"));
        this.assert.notOk(await this.hasSelector("#nested-child"));
    }
    async "test following a form within a nested frame with form target top"() {
        await this.clickSelector("#nested-child-navigate-form-top-submit");
        await this.nextBeat;
        const frameText = await this.querySelector("body > h1");
        this.assert.equal(await frameText.getVisibleText(), "One");
        this.assert.notOk(await this.hasSelector("#frame"));
        this.assert.notOk(await this.hasSelector("#nested-root"));
        this.assert.notOk(await this.hasSelector("#nested-child"));
    }
    async "test following a form within a nested frame with child frame target top"() {
        await this.clickSelector("#nested-child-navigate-top-submit");
        await this.nextBeat;
        const frameText = await this.querySelector("body > h1");
        this.assert.equal(await frameText.getVisibleText(), "One");
        this.assert.notOk(await this.hasSelector("#frame"));
        this.assert.notOk(await this.hasSelector("#nested-root"));
        this.assert.notOk(await this.hasSelector("#nested-child-navigate-top"));
    }
    async "test following a link within a frame with target=_top navigates the page"() {
        this.assert.equal(await this.attributeForSelector("#navigate-top", "src"), null);
        await this.clickSelector("#navigate-top a:not([data-turbo-frame])");
        await this.nextBeat;
        const frameText = await this.querySelector("body > h1");
        this.assert.equal(await frameText.getVisibleText(), "One");
        this.assert.notOk(await this.hasSelector("#navigate-top a"));
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.getSearchParam("key"), "value");
    }
    async "test following a link that declares data-turbo-frame='_self' within a frame with target=_top navigates the frame itself"() {
        this.assert.equal(await this.attributeForSelector("#navigate-top", "src"), null);
        await this.clickSelector("#navigate-top a[data-turbo-frame='_self']");
        await this.nextBeat;
        const title = await this.querySelector("body > h1");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.ok(await this.hasSelector("#navigate-top"));
        const frame = await this.querySelector("#navigate-top");
        this.assert.equal(await frame.getVisibleText(), "Replaced only the frame");
    }
    async "test following a link to a page with a <turbo-frame recurse> which lazily loads a matching frame"() {
        await this.nextBeat;
        await this.clickSelector("#recursive summary");
        this.assert.ok(await this.querySelector("#recursive details[open]"));
        await this.clickSelector("#recursive a");
        await this.nextBeat;
        this.assert.ok(await this.querySelector("#recursive details:not([open])"));
    }
    async "test submitting a form that redirects to a page with a <turbo-frame recurse> which lazily loads a matching frame"() {
        await this.nextBeat;
        await this.clickSelector("#recursive summary");
        this.assert.ok(await this.querySelector("#recursive details[open]"));
        await this.clickSelector("#recursive input[type=submit]");
        await this.nextBeat;
        this.assert.ok(await this.querySelector("#recursive details:not([open])"));
    }
    async "test removing [disabled] attribute from eager-loaded frame navigates it"() {
        await this.remote.execute(() => { var _a; return (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", ""); });
        await this.remote.execute((src) => { var _a; return (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "/src/tests/fixtures/frames/frame.html"); });
        this.assert.ok(await this.noNextEventNamed("turbo:before-fetch-request"), "[disabled] frames do not submit requests");
        await this.remote.execute(() => { var _a; return (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled"); });
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test evaluates frame script elements on each render"() {
        this.assert.equal(await this.frameScriptEvaluationCount, undefined);
        this.clickSelector("#body-script-link");
        await this.sleep(200);
        this.assert.equal(await this.frameScriptEvaluationCount, 1);
        this.clickSelector("#body-script-link");
        await this.sleep(200);
        this.assert.equal(await this.frameScriptEvaluationCount, 2);
    }
    async "test does not evaluate data-turbo-eval=false scripts"() {
        this.clickSelector("#eval-false-script-link");
        await this.nextBeat;
        this.assert.equal(await this.frameScriptEvaluationCount, undefined);
    }
    async "test redirecting in a form is still navigatable after redirect"() {
        await this.nextBeat;
        await this.clickSelector("#navigate-form-redirect");
        await this.nextBeat;
        this.assert.ok(await this.querySelector("#form-redirect"));
        await this.nextBeat;
        await this.clickSelector("#submit-form");
        await this.nextBeat;
        this.assert.ok(await this.querySelector("#form-redirected-header"));
        await this.nextBeat;
        await this.clickSelector("#navigate-form-redirect");
        await this.nextBeat;
        this.assert.ok(await this.querySelector("#form-redirect-header"));
    }
    async "test 'turbo:frame-render' is triggered after frame has finished rendering"() {
        await this.clickSelector("#frame-part");
        await this.nextEventNamed("turbo:frame-render");
        const { fetchResponse } = await this.nextEventNamed("turbo:frame-render");
        this.assert.include(fetchResponse.response.url, "/src/tests/fixtures/frames/part.html");
    }
    async "test navigating a frame fires events"() {
        await this.clickSelector("#outside-frame-form");
        const { fetchResponse } = await this.nextEventOnTarget("frame", "turbo:frame-render");
        this.assert.include(fetchResponse.response.url, "/src/tests/fixtures/frames/form.html");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
        const otherEvents = await this.eventLogChannel.read();
        this.assert.equal(otherEvents.length, 0, "no more events");
    }
    async "test following inner link reloads frame on every click"() {
        await this.clickSelector("#hello a");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.clickSelector("#hello a");
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test following outer link reloads frame on every click"() {
        await this.clickSelector("#outer-frame-link");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.clickSelector("#outer-frame-link");
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test following outer form reloads frame on every submit"() {
        await this.clickSelector("#outer-frame-submit");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.clickSelector("#outer-frame-submit");
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test an inner/outer link reloads frame on every click"() {
        await this.clickSelector("#inner-outer-frame-link");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.clickSelector("#inner-outer-frame-link");
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test an inner/outer form reloads frame on every submit"() {
        await this.clickSelector("#inner-outer-frame-submit");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.clickSelector("#inner-outer-frame-submit");
        await this.nextEventNamed("turbo:before-fetch-request");
    }
    async "test reconnecting after following a link does not reload the frame"() {
        await this.clickSelector("#hello a");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.remote.execute(() => {
            var _a;
            window.savedElement = document.querySelector("#frame");
            (_a = window.savedElement) === null || _a === void 0 ? void 0 : _a.remove();
        });
        await this.nextBeat;
        await this.remote.execute(() => {
            if (window.savedElement) {
                document.body.appendChild(window.savedElement);
            }
        });
        await this.nextBeat;
        const eventLogs = await this.eventLogChannel.read();
        const requestLogs = eventLogs.filter(([name]) => name == "turbo:before-fetch-request");
        this.assert.equal(requestLogs.length, 0);
    }
    async "test navigating pushing URL state from a frame navigation fires events"() {
        await this.clickSelector("#link-outside-frame-action-advance");
        this.assert.equal(await this.nextAttributeMutationNamed("frame", "aria-busy"), "true", "sets aria-busy on the <turbo-frame>");
        await this.nextEventOnTarget("frame", "turbo:before-fetch-request");
        await this.nextEventOnTarget("frame", "turbo:before-fetch-response");
        await this.nextEventOnTarget("frame", "turbo:frame-render");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
        this.assert.notOk(await this.nextAttributeMutationNamed("frame", "aria-busy"), "removes aria-busy from the <turbo-frame>");
        this.assert.equal(await this.nextAttributeMutationNamed("html", "aria-busy"), "true", "sets aria-busy on the <html>");
        await this.nextEventOnTarget("html", "turbo:before-visit");
        await this.nextEventOnTarget("html", "turbo:visit");
        await this.nextEventOnTarget("html", "turbo:before-cache");
        await this.nextEventOnTarget("html", "turbo:before-render");
        await this.nextEventOnTarget("html", "turbo:render");
        await this.nextEventOnTarget("html", "turbo:load");
        this.assert.notOk(await this.nextAttributeMutationNamed("html", "aria-busy"), "removes aria-busy from the <html>");
    }
    async "test navigating a frame with a form[method=get] that does not redirect still updates the [src]"() {
        var _a;
        await this.clickSelector("#frame-form-get-no-redirect");
        await this.nextEventNamed("turbo:before-fetch-request");
        await this.nextEventNamed("turbo:before-fetch-response");
        await this.nextEventOnTarget("frame", "turbo:frame-render");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
        await this.noNextEventNamed("turbo:before-fetch-request");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await (await this.querySelector("h1")).getVisibleText(), "Frames");
        this.assert.equal(await (await this.querySelector("#frame h2")).getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames.html");
    }
    async "test navigating turbo-frame[data-turbo-action=advance] from within pushes URL state"() {
        await this.clickSelector("#add-turbo-action-to-frame");
        await this.clickSelector("#link-frame");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating turbo-frame[data-turbo-action=advance] to the same URL clears the [aria-busy] and [data-turbo-preview] state"() {
        await this.clickSelector("#link-outside-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#link-outside-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#link-outside-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        this.assert.equal(await this.attributeForSelector("#frame", "aria-busy"), null, "clears turbo-frame[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "aria-busy"), null, "clears html[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "data-turbo-preview"), null, "clears html[aria-busy]");
    }
    async "test navigating a turbo-frame with an a[data-turbo-action=advance] preserves page state"() {
        var _a;
        await this.scrollToSelector("#below-the-fold-input");
        await this.fillInSelector("#below-the-fold-input", "a value");
        await this.clickSelector("#below-the-fold-link-frame-action");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
        this.assert.equal(await this.propertyForSelector("#below-the-fold-input", "value"), "a value", "preserves page state");
        const { y } = await this.scrollPosition;
        this.assert.notEqual(y, 0, "preserves Y scroll position");
    }
    async "test a turbo-frame that has been driven by a[data-turbo-action] can be navigated normally"() {
        await this.clickSelector("#remove-target-from-hello");
        await this.clickSelector("#link-hello-advance");
        await this.nextEventNamed("turbo:load");
        this.assert.equal(await (await this.querySelector("h1")).getVisibleText(), "Frames");
        this.assert.equal(await (await this.querySelector("#hello h2")).getVisibleText(), "Hello from a frame");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/hello.html");
        await this.clickSelector("#hello a");
        await this.nextEventOnTarget("hello", "turbo:frame-load");
        await this.noNextEventNamed("turbo:load");
        this.assert.equal(await (await this.querySelector("#hello h2")).getVisibleText(), "Frames: #hello");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/hello.html");
    }
    async "test navigating turbo-frame from within with a[data-turbo-action=advance] pushes URL state"() {
        var _a;
        await this.clickSelector("#link-nested-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating frame with a[data-turbo-action=advance] pushes URL state"() {
        var _a;
        await this.clickSelector("#link-outside-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating frame with form[method=get][data-turbo-action=advance] pushes URL state"() {
        var _a;
        await this.clickSelector("#form-get-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating frame with form[method=get][data-turbo-action=advance] to the same URL clears the [aria-busy] and [data-turbo-preview] state"() {
        await this.clickSelector("#form-get-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#form-get-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#form-get-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        this.assert.equal(await this.attributeForSelector("#frame", "aria-busy"), null, "clears turbo-frame[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "aria-busy"), null, "clears html[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "data-turbo-preview"), null, "clears html[aria-busy]");
    }
    async "test navigating frame with form[method=post][data-turbo-action=advance] pushes URL state"() {
        var _a;
        await this.clickSelector("#form-post-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating frame with form[method=post][data-turbo-action=advance] to the same URL clears the [aria-busy] and [data-turbo-preview] state"() {
        await this.clickSelector("#form-post-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#form-post-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        await this.clickSelector("#form-post-frame-action-advance button");
        await this.nextEventNamed("turbo:load");
        this.assert.equal(await this.attributeForSelector("#frame", "aria-busy"), null, "clears turbo-frame[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "aria-busy"), null, "clears html[aria-busy]");
        this.assert.equal(await this.attributeForSelector("#html", "data-turbo-preview"), null, "clears html[aria-busy]");
    }
    async "test navigating frame with button[data-turbo-action=advance] pushes URL state"() {
        var _a;
        await this.clickSelector("#button-frame-action-advance");
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test navigating back after pushing URL state from a turbo-frame[data-turbo-action=advance] restores the frames previous contents"() {
        await this.clickSelector("#add-turbo-action-to-frame");
        await this.clickSelector("#link-frame");
        await this.nextEventNamed("turbo:load");
        await this.goBack();
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frames: #frame");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames.html");
        this.assert.equal(await this.propertyForSelector("#frame", "src"), null);
    }
    async "test navigating back then forward after pushing URL state from a turbo-frame[data-turbo-action=advance] restores the frames next contents"() {
        var _a;
        await this.clickSelector("#add-turbo-action-to-frame");
        await this.clickSelector("#link-frame");
        await this.nextEventNamed("turbo:load");
        await this.goBack();
        await this.nextEventNamed("turbo:load");
        await this.goForward();
        await this.nextEventNamed("turbo:load");
        const title = await this.querySelector("h1");
        const frameTitle = await this.querySelector("#frame h2");
        const src = (_a = await this.attributeForSelector("#frame", "src")) !== null && _a !== void 0 ? _a : "";
        this.assert.ok(src.includes("/src/tests/fixtures/frames/frame.html"), "updates src attribute");
        this.assert.equal(await title.getVisibleText(), "Frames");
        this.assert.equal(await frameTitle.getVisibleText(), "Frame: Loaded");
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/frame.html");
    }
    async "test turbo:before-fetch-request fires on the frame element"() {
        await this.clickSelector("#hello a");
        this.assert.ok(await this.nextEventOnTarget("frame", "turbo:before-fetch-request"));
    }
    async "test turbo:before-fetch-response fires on the frame element"() {
        await this.clickSelector("#hello a");
        this.assert.ok(await this.nextEventOnTarget("frame", "turbo:before-fetch-response"));
    }
    async withoutChangingEventListenersCount(callback) {
        const name = "eventListenersAttachedToDocument";
        const setup = () => {
            return this.evaluate((name) => {
                const context = window;
                context[name] = 0;
                context.originals = { addEventListener: document.addEventListener, removeEventListener: document.removeEventListener };
                document.addEventListener = (type, listener, options) => {
                    context.originals.addEventListener.call(document, type, listener, options);
                    context[name] += 1;
                };
                document.removeEventListener = (type, listener, options) => {
                    context.originals.removeEventListener.call(document, type, listener, options);
                    context[name] -= 1;
                };
                return context[name] || 0;
            }, [name]);
        };
        const teardown = () => {
            return this.evaluate((name) => {
                const context = window;
                const { addEventListener, removeEventListener } = context.originals;
                document.addEventListener = addEventListener;
                document.removeEventListener = removeEventListener;
                return context[name] || 0;
            }, [name]);
        };
        const originalCount = await setup();
        await callback();
        const finalCount = await teardown();
        this.assert.equal(finalCount, originalCount, "expected callback not to leak event listeners");
    }
    async fillInSelector(selector, value) {
        const element = await this.querySelector(selector);
        await element.click();
        return element.type(value);
    }
    get frameScriptEvaluationCount() {
        return this.evaluate(() => window.frameScriptEvaluationCount);
    }
}
FrameTests.registerSuite();

class ImportTests extends TurboDriveTestCase {
    async "test window variable with ESM"() {
        await this.goToLocation("/src/tests/fixtures/esm.html");
        const type = await this.evaluate(() => {
            return typeof window.Turbo;
        });
        this.assert.equal(type, "object");
    }
}
ImportTests.registerSuite();

class FrameNavigationTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/frame_navigation.html");
    }
    async "test frame navigation with descendant link"() {
        await this.clickSelector("#inside");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
    }
    async "test frame navigation with self link"() {
        await this.clickSelector("#self");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
    }
    async "test frame navigation with exterior link"() {
        await this.clickSelector("#outside");
        await this.nextEventOnTarget("frame", "turbo:frame-load");
    }
}
FrameNavigationTests.registerSuite();

class LoadingTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/loading.html");
    }
    async "test eager loading within a details element"() {
        await this.nextBeat;
        this.assert.ok(await this.hasSelector("#loading-eager turbo-frame#frame h2"));
    }
    async "test lazy loading within a details element"() {
        await this.nextBeat;
        const frameContents = "#loading-lazy turbo-frame h2";
        this.assert.notOk(await this.hasSelector(frameContents));
        await this.clickSelector("#loading-lazy summary");
        await this.nextBeat;
        const contents = await this.querySelector(frameContents);
        this.assert.equal(await contents.getVisibleText(), "Hello from a frame");
    }
    async "test changing loading attribute from lazy to eager loads frame"() {
        const frameContents = "#loading-lazy turbo-frame h2";
        await this.nextBeat;
        this.assert.notOk(await this.hasSelector(frameContents));
        await this.remote.execute(() => { var _a; return (_a = document.querySelector("#loading-lazy turbo-frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("loading", "eager"); });
        await this.nextBeat;
        const contents = await this.querySelector(frameContents);
        await this.clickSelector("#loading-lazy summary");
        this.assert.equal(await contents.getVisibleText(), "Hello from a frame");
    }
    async "test navigating a visible frame with loading=lazy navigates"() {
        await this.clickSelector("#loading-lazy summary");
        await this.nextBeat;
        const initialContents = await this.querySelector("#hello h2");
        this.assert.equal(await initialContents.getVisibleText(), "Hello from a frame");
        await this.clickSelector("#hello a");
        await this.nextBeat;
        const navigatedContents = await this.querySelector("#hello h2");
        this.assert.equal(await navigatedContents.getVisibleText(), "Frames: #hello");
    }
    async "test changing src attribute on a frame with loading=lazy defers navigation"() {
        const frameContents = "#loading-lazy turbo-frame h2";
        await this.nextBeat;
        await this.remote.execute(() => { var _a; return (_a = document.querySelector("#loading-lazy turbo-frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "/src/tests/fixtures/frames.html"); });
        this.assert.notOk(await this.hasSelector(frameContents));
        await this.clickSelector("#loading-lazy summary");
        await this.nextBeat;
        const contents = await this.querySelector(frameContents);
        this.assert.equal(await contents.getVisibleText(), "Frames: #hello");
    }
    async "test changing src attribute on a frame with loading=eager navigates"() {
        const frameContents = "#loading-eager turbo-frame h2";
        await this.nextBeat;
        await this.remote.execute(() => { var _a; return (_a = document.querySelector("#loading-eager turbo-frame")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "/src/tests/fixtures/frames.html"); });
        await this.clickSelector("#loading-eager summary");
        await this.nextBeat;
        const contents = await this.querySelector(frameContents);
        this.assert.equal(await contents.getVisibleText(), "Frames: #frame");
    }
    async "test reloading a frame reloads the content"() {
        await this.nextBeat;
        await this.clickSelector("#loading-eager summary");
        await this.nextBeat;
        const frameContent = "#loading-eager turbo-frame#frame h2";
        this.assert.ok(await this.hasSelector(frameContent));
        await this.remote.execute(() => { var _a; return (_a = document.querySelector("#loading-eager turbo-frame")) === null || _a === void 0 ? void 0 : _a.reload(); });
        this.assert.ok(await this.hasSelector(frameContent));
    }
    async "test navigating away from a page does not reload its frames"() {
        await this.clickSelector("#one");
        await this.nextBody;
        const eventLogs = await this.eventLogChannel.read();
        const requestLogs = eventLogs.filter(([name]) => name == "turbo:before-fetch-request");
        this.assert.equal(requestLogs.length, 1);
    }
    async "test disconnecting and reconnecting a frame does not reload the frame"() {
        await this.nextBeat;
        await this.remote.execute(() => {
            var _a;
            window.savedElement = document.querySelector("#loading-eager");
            (_a = window.savedElement) === null || _a === void 0 ? void 0 : _a.remove();
        });
        await this.nextBeat;
        await this.remote.execute(() => {
            if (window.savedElement) {
                document.body.appendChild(window.savedElement);
            }
        });
        await this.nextBeat;
        const eventLogs = await this.eventLogChannel.read();
        const requestLogs = eventLogs.filter(([name]) => name == "turbo:before-fetch-request");
        this.assert.equal(requestLogs.length, 0);
    }
}
LoadingTests.registerSuite();

class NavigationTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/navigation.html");
    }
    async "test navigating renders a progress bar"() {
        await this.remote.execute(() => window.Turbo.setProgressBarDelay(0));
        await this.clickSelector("#delayed-link");
        await this.waitUntilSelector(".turbo-progress-bar");
        this.assert.ok(await this.hasSelector(".turbo-progress-bar"), "displays progress bar");
        await this.nextEventNamed("turbo:load");
        await this.waitUntilNoSelector(".turbo-progress-bar");
        this.assert.notOk(await this.hasSelector(".turbo-progress-bar"), "hides progress bar");
    }
    async "test navigating does not render a progress bar before expiring the delay"() {
        await this.remote.execute(() => window.Turbo.setProgressBarDelay(1000));
        await this.clickSelector("#same-origin-unannotated-link");
        this.assert.notOk(await this.hasSelector(".turbo-progress-bar"), "does not show progress bar before delay");
    }
    async "test after loading the page"() {
        this.assert.equal(await this.pathname, "/src/tests/fixtures/navigation.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin unannotated link"() {
        this.clickSelector("#same-origin-unannotated-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "advance");
        this.assert.equal(await this.nextAttributeMutationNamed("html", "aria-busy"), "true", "sets [aria-busy] on the document element");
        this.assert.equal(await this.nextAttributeMutationNamed("html", "aria-busy"), null, "removes [aria-busy] from the document element");
    }
    async "test following a same-origin unannotated custom element link"() {
        await this.nextBeat;
        await this.remote.execute(() => {
            var _a;
            const shadowRoot = (_a = document.querySelector("#custom-link-element")) === null || _a === void 0 ? void 0 : _a.shadowRoot;
            const link = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector("a");
            link === null || link === void 0 ? void 0 : link.click();
        });
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.search, "");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test following a same-origin unannotated link with search params"() {
        this.clickSelector("#same-origin-unannotated-link-search-params");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.search, "?key=value");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test following a same-origin unannotated form[method=GET]"() {
        this.clickSelector("#same-origin-unannotated-form button");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test following a same-origin data-turbo-action=replace link"() {
        this.clickSelector("#same-origin-replace-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test following a same-origin GET form[data-turbo-action=replace]"() {
        this.clickSelector("#same-origin-replace-form-get button");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test following a same-origin GET form button[data-turbo-action=replace]"() {
        this.clickSelector("#same-origin-replace-form-submitter-get button");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test following a same-origin POST form[data-turbo-action=replace]"() {
        this.clickSelector("#same-origin-replace-form-post button");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test following a same-origin POST form button[data-turbo-action=replace]"() {
        this.clickSelector("#same-origin-replace-form-submitter-post button");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test following a same-origin data-turbo=false link"() {
        this.clickSelector("#same-origin-false-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin unannotated link inside a data-turbo=false container"() {
        this.clickSelector("#same-origin-unannotated-link-inside-false-container");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin data-turbo=true link inside a data-turbo=false container"() {
        this.clickSelector("#same-origin-true-link-inside-false-container");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test following a same-origin anchored link"() {
        this.clickSelector("#same-origin-anchored-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.hash, "#element-id");
        this.assert.equal(await this.visitAction, "advance");
        this.assert(await this.isScrolledToSelector("#element-id"));
    }
    async "test following a same-origin link to a named anchor"() {
        this.clickSelector("#same-origin-anchored-link-named");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.hash, "#named-anchor");
        this.assert.equal(await this.visitAction, "advance");
        this.assert(await this.isScrolledToSelector("[name=named-anchor]"));
    }
    async "test following a cross-origin unannotated link"() {
        this.clickSelector("#cross-origin-unannotated-link");
        await this.nextBody;
        this.assert.equal(await this.location, "about:blank");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin [target] link"() {
        this.clickSelector("#same-origin-targeted-link");
        await this.nextBeat;
        this.remote.switchToWindow(await this.nextWindowHandle);
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin [download] link"() {
        this.clickSelector("#same-origin-download-link");
        await this.nextBeat;
        this.assert(!await this.changedBody);
        this.assert.equal(await this.pathname, "/src/tests/fixtures/navigation.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test following a same-origin link inside an SVG element"() {
        this.clickSelector("#same-origin-link-inside-svg-element");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test following a cross-origin link inside an SVG element"() {
        this.clickSelector("#cross-origin-link-inside-svg-element");
        await this.nextBody;
        this.assert.equal(await this.location, "about:blank");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test clicking the back button"() {
        this.clickSelector("#same-origin-unannotated-link");
        await this.nextBody;
        await this.goBack();
        this.assert.equal(await this.pathname, "/src/tests/fixtures/navigation.html");
        this.assert.equal(await this.visitAction, "restore");
    }
    async "test clicking the forward button"() {
        this.clickSelector("#same-origin-unannotated-link");
        await this.nextBody;
        await this.goBack();
        await this.goForward();
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "restore");
    }
    async "test link targeting a disabled turbo-frame navigates the page"() {
        await this.clickSelector("#link-to-disabled-frame");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/frames/hello.html");
    }
    async "test skip link with hash-only path scrolls to the anchor without a visit"() {
        const bodyElementId = (await this.body).elementId;
        await this.clickSelector('a[href="#main"]');
        await this.nextBeat;
        this.assert.equal((await this.body).elementId, bodyElementId, "does not reload page");
        this.assert.ok(await this.isScrolledToSelector("#main"), "scrolled to #main");
    }
    async "test skip link with hash-only path moves focus and changes tab order"() {
        await this.clickSelector('a[href="#main"]');
        await this.nextBeat;
        await this.pressTab();
        this.assert.notOk(await this.selectorHasFocus("#ignored-link"), "skips interactive elements before #main");
        this.assert.ok(await this.selectorHasFocus("#main a:first-of-type"), "skips to first interactive element after #main");
    }
    async "test same-page anchored replace link assumes the intention was a refresh"() {
        await this.clickSelector('#refresh-link');
        await this.nextBody;
        this.assert.ok(await this.isScrolledToSelector("#main"), "scrolled to #main");
    }
    async "test navigating back to anchored URL"() {
        await this.clickSelector('a[href="#main"]');
        await this.nextBeat;
        await this.clickSelector("#same-origin-unannotated-link");
        await this.nextBody;
        await this.nextBeat;
        await this.goBack();
        await this.nextBody;
        this.assert.ok(await this.isScrolledToSelector("#main"), "scrolled to #main");
    }
    async "test following a redirection"() {
        await this.clickSelector('#redirection-link');
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/one.html");
        this.assert.equal(await this.visitAction, "replace");
    }
    async "test clicking the back button after redirection"() {
        await this.clickSelector('#redirection-link');
        await this.nextBody;
        await this.goBack();
        this.assert.equal(await this.pathname, "/src/tests/fixtures/navigation.html");
        this.assert.equal(await this.visitAction, "restore");
    }
    async "test same-page anchor visits do not trigger visit events"() {
        const events = [
            "turbo:before-visit",
            "turbo:visit",
            "turbo:before-cache",
            "turbo:before-render",
            "turbo:render",
            "turbo:load"
        ];
        for (const eventName in events) {
            await this.goToLocation("/src/tests/fixtures/navigation.html");
            await this.clickSelector('a[href="#main"]');
            this.assert.ok(await this.noNextEventNamed(eventName), `same-page links do not trigger ${eventName} events`);
        }
    }
    async "test correct referrer header"() {
        this.clickSelector("#headers-link");
        await this.nextBody;
        const pre = await this.querySelector('pre');
        const headers = await JSON.parse(await pre.getVisibleText());
        this.assert.equal(headers.referer, 'http://localhost:9000/src/tests/fixtures/navigation.html', `referer header is correctly set`);
    }
    async "test double-clicking on a link"() {
        this.clickSelector("#delayed-link");
        this.clickSelector("#delayed-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/__turbo/delayed_response");
        this.assert.equal(await this.visitAction, "advance");
    }
}
NavigationTests.registerSuite();

class PausableRenderingTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/pausable_rendering.html");
    }
    async "test pauses and resumes rendering"() {
        await this.clickSelector("#link");
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Continue rendering?');
        await this.acceptAlert();
        await this.nextBeat;
        const h1 = await this.querySelector("h1");
        this.assert.equal(await h1.getVisibleText(), "One");
    }
    async "test aborts rendering"() {
        await this.clickSelector("#link");
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Continue rendering?');
        await this.dismissAlert();
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Rendering aborted');
        await this.acceptAlert();
        await this.nextBeat;
        const h1 = await this.querySelector("h1");
        this.assert.equal(await h1.getVisibleText(), "Pausable Rendering");
    }
}
PausableRenderingTests.registerSuite();

class PausableRequestsTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/pausable_requests.html");
    }
    async "test pauses and resumes request"() {
        await this.clickSelector("#link");
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Continue request?');
        await this.acceptAlert();
        await this.nextBeat;
        const h1 = await this.querySelector("h1");
        this.assert.equal(await h1.getVisibleText(), "One");
    }
    async "test aborts request"() {
        await this.clickSelector("#link");
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Continue request?');
        await this.dismissAlert();
        await this.nextBeat;
        this.assert.strictEqual(await this.getAlertText(), 'Request aborted');
        await this.acceptAlert();
        await this.nextBeat;
        const h1 = await this.querySelector("h1");
        this.assert.equal(await h1.getVisibleText(), "Pausable Requests");
    }
}
PausableRequestsTests.registerSuite();

class RenderingTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/rendering.html");
    }
    async "test triggers before-render and render events"() {
        this.clickSelector("#same-origin-link");
        const { newBody } = await this.nextEventNamed("turbo:before-render");
        const h1 = await this.querySelector("h1");
        this.assert.equal(await h1.getVisibleText(), "One");
        await this.nextEventNamed("turbo:render");
        this.assert(await newBody.equals(await this.body));
    }
    async "test triggers before-render and render events for error pages"() {
        this.clickSelector("#nonexistent-link");
        const { newBody } = await this.nextEventNamed("turbo:before-render");
        this.assert.equal(await newBody.getVisibleText(), "404 Not Found: /nonexistent");
        await this.nextEventNamed("turbo:render");
        this.assert(await newBody.equals(await this.body));
    }
    async "test reloads when tracked elements change"() {
        this.clickSelector("#tracked-asset-change-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/tracked_asset_change.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test wont reload when tracked elements has a nonce"() {
        this.clickSelector("#tracked-nonce-tag-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/tracked_nonce_tag.html");
        this.assert.equal(await this.visitAction, "advance");
    }
    async "test reloads when turbo-visit-control setting is reload"() {
        this.clickSelector("#visit-control-reload-link");
        await this.nextBody;
        this.assert.equal(await this.pathname, "/src/tests/fixtures/visit_control_reload.html");
        this.assert.equal(await this.visitAction, "load");
    }
    async "test accumulates asset elements in head"() {
        const originalElements = await this.assetElements;
        this.clickSelector("#additional-assets-link");
        await this.nextBody;
        const newElements = await this.assetElements;
        this.assert.notDeepEqual(newElements, originalElements);
        this.goBack();
        await this.nextBody;
        const finalElements = await this.assetElements;
        this.assert.deepEqual(finalElements, newElements);
    }
    async "test replaces provisional elements in head"() {
        const originalElements = await this.provisionalElements;
        this.assert(!await this.hasSelector("meta[name=test]"));
        this.clickSelector("#same-origin-link");
        await this.nextBody;
        const newElements = await this.provisionalElements;
        this.assert.notDeepEqual(newElements, originalElements);
        this.assert(await this.hasSelector("meta[name=test]"));
        this.goBack();
        await this.nextBody;
        const finalElements = await this.provisionalElements;
        this.assert.notDeepEqual(finalElements, newElements);
        this.assert(!await this.hasSelector("meta[name=test]"));
    }
    async "test evaluates head stylesheet elements"() {
        this.assert.equal(await this.isStylesheetEvaluated, false);
        this.clickSelector("#additional-assets-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.isStylesheetEvaluated, true);
    }
    async "test does not evaluate head stylesheet elements inside noscript elements"() {
        this.assert.equal(await this.isNoscriptStylesheetEvaluated, false);
        this.clickSelector("#additional-assets-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.isNoscriptStylesheetEvaluated, false);
    }
    async "skip evaluates head script elements once"() {
        this.assert.equal(await this.headScriptEvaluationCount, undefined);
        this.clickSelector("#head-script-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.headScriptEvaluationCount, 1);
        this.goBack();
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.headScriptEvaluationCount, 1);
        this.clickSelector("#head-script-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.headScriptEvaluationCount, 1);
    }
    async "test evaluates body script elements on each render"() {
        this.assert.equal(await this.bodyScriptEvaluationCount, undefined);
        this.clickSelector("#body-script-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.bodyScriptEvaluationCount, 1);
        this.goBack();
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.bodyScriptEvaluationCount, 1);
        this.clickSelector("#body-script-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.bodyScriptEvaluationCount, 2);
    }
    async "test does not evaluate data-turbo-eval=false scripts"() {
        this.clickSelector("#eval-false-script-link");
        await this.nextEventNamed("turbo:render");
        this.assert.equal(await this.bodyScriptEvaluationCount, undefined);
    }
    async "test preserves permanent elements"() {
        let permanentElement = await this.permanentElement;
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
        this.clickSelector("#permanent-element-link");
        await this.nextEventNamed("turbo:render");
        this.assert(await permanentElement.equals(await this.permanentElement));
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
        this.goBack();
        await this.nextEventNamed("turbo:render");
        this.assert(await permanentElement.equals(await this.permanentElement));
    }
    async "test preserves permanent elements within turbo-frames"() {
        let permanentElement = await this.querySelector("#permanent-in-frame");
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
        await this.clickSelector("#permanent-in-frame-element-link");
        await this.nextBeat;
        permanentElement = await this.querySelector("#permanent-in-frame");
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
    }
    async "test preserves permanent elements within turbo-frames rendered without layouts"() {
        let permanentElement = await this.querySelector("#permanent-in-frame");
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
        await this.clickSelector("#permanent-in-frame-without-layout-element-link");
        await this.nextBeat;
        permanentElement = await this.querySelector("#permanent-in-frame");
        this.assert.equal(await permanentElement.getVisibleText(), "Rendering");
    }
    async "test preserves permanent element video playback"() {
        let videoElement = await this.querySelector("#permanent-video");
        await this.clickSelector("#permanent-video-button");
        await this.sleep(500);
        const timeBeforeRender = await videoElement.getProperty("currentTime");
        this.assert.notEqual(timeBeforeRender, 0, "playback has started");
        await this.clickSelector("#permanent-element-link");
        await this.nextBody;
        videoElement = await this.querySelector("#permanent-video");
        const timeAfterRender = await videoElement.getProperty("currentTime");
        this.assert.equal(timeAfterRender, timeBeforeRender, "element state is preserved");
    }
    async "test before-cache event"() {
        this.beforeCache(body => body.innerHTML = "Modified");
        this.clickSelector("#same-origin-link");
        await this.nextBody;
        await this.goBack();
        const body = await this.nextBody;
        this.assert(await body.getVisibleText(), "Modified");
    }
    async "test mutation record as before-cache notification"() {
        this.modifyBodyAfterRemoval();
        this.clickSelector("#same-origin-link");
        await this.nextBody;
        await this.goBack();
        const body = await this.nextBody;
        this.assert(await body.getVisibleText(), "Modified");
    }
    async "test error pages"() {
        this.clickSelector("#nonexistent-link");
        const body = await this.nextBody;
        this.assert.equal(await body.getVisibleText(), "404 Not Found: /nonexistent");
        await this.goBack();
    }
    get assetElements() {
        return filter(this.headElements, isAssetElement);
    }
    get provisionalElements() {
        return filter(this.headElements, async (element) => !await isAssetElement(element));
    }
    get headElements() {
        return this.evaluate(() => Array.from(document.head.children));
    }
    get permanentElement() {
        return this.querySelector("#permanent");
    }
    get headScriptEvaluationCount() {
        return this.evaluate(() => window.headScriptEvaluationCount);
    }
    get bodyScriptEvaluationCount() {
        return this.evaluate(() => window.bodyScriptEvaluationCount);
    }
    get isStylesheetEvaluated() {
        return this.evaluate(() => getComputedStyle(document.body).getPropertyValue("--black-if-evaluated").trim() === "black");
    }
    get isNoscriptStylesheetEvaluated() {
        return this.evaluate(() => getComputedStyle(document.body).getPropertyValue("--black-if-noscript-evaluated").trim() === "black");
    }
    async modifyBodyBeforeCaching() {
        return this.remote.execute(() => addEventListener("turbo:before-cache", function eventListener(event) {
            removeEventListener("turbo:before-cache", eventListener, false);
            document.body.innerHTML = "Modified";
        }, false));
    }
    async beforeCache(callback) {
        return this.remote.execute((callback) => {
            addEventListener("turbo:before-cache", function eventListener(event) {
                removeEventListener("turbo:before-cache", eventListener, false);
                callback(document.body);
            }, false);
        }, [callback]);
    }
    async modifyBodyAfterRemoval() {
        return this.remote.execute(() => {
            const { documentElement, body } = document;
            const observer = new MutationObserver(records => {
                for (const record of records) {
                    if (Array.from(record.removedNodes).indexOf(body) > -1) {
                        body.innerHTML = "Modified";
                        observer.disconnect();
                        break;
                    }
                }
            });
            observer.observe(documentElement, { childList: true });
        });
    }
}
async function filter(promisedValues, predicate) {
    const values = await promisedValues;
    const matches = await Promise.all(values.map(value => predicate(value)));
    return matches.reduce((result, match, index) => result.concat(match ? values[index] : []), []);
}
async function isAssetElement(element) {
    const tagName = await element.getTagName();
    const relValue = await element.getAttribute("rel");
    return tagName == "script" || tagName == "style" || (tagName == "link" && relValue == "stylesheet");
}
RenderingTests.registerSuite();

class ScrollRestorationTests extends TurboDriveTestCase {
    async "test landing on an anchor"() {
        await this.goToLocation("/src/tests/fixtures/scroll_restoration.html#three");
        await this.nextBody;
        const { y: yAfterLoading } = await this.scrollPosition;
        this.assert.notEqual(yAfterLoading, 0);
    }
    async "test reloading after scrolling"() {
        await this.goToLocation("/src/tests/fixtures/scroll_restoration.html");
        await this.scrollToSelector("#three");
        const { y: yAfterScrolling } = await this.scrollPosition;
        this.assert.notEqual(yAfterScrolling, 0);
        await this.reload();
        const { y: yAfterReloading } = await this.scrollPosition;
        this.assert.notEqual(yAfterReloading, 0);
    }
    async "test returning from history"() {
        await this.goToLocation("/src/tests/fixtures/scroll_restoration.html");
        await this.scrollToSelector("#three");
        await this.goToLocation("/src/tests/fixtures/bare.html");
        await this.goBack();
        const { y: yAfterReturning } = await this.scrollPosition;
        this.assert.notEqual(yAfterReturning, 0);
    }
}
ScrollRestorationTests.registerSuite();

class StreamTests extends FunctionalTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/stream.html");
    }
    async "test receiving a stream message"() {
        let element;
        const selector = "#messages div.message:last-child";
        element = await this.querySelector(selector);
        this.assert.equal(await element.getVisibleText(), "First");
        await this.clickSelector("#create [type=submit]");
        await this.nextBeat;
        element = await this.querySelector(selector);
        this.assert.equal(await element.getVisibleText(), "Hello world!");
    }
    async "test receiving a stream message with css selector target"() {
        let element;
        const selector = ".messages div.message:last-child";
        element = await this.querySelectorAll(selector);
        this.assert.equal(await element[0].getVisibleText(), "Second");
        this.assert.equal(await element[1].getVisibleText(), "Third");
        await this.clickSelector("#replace [type=submit]");
        await this.nextBeat;
        element = await this.querySelectorAll(selector);
        this.assert.equal(await element[0].getVisibleText(), "Hello CSS!");
        this.assert.equal(await element[1].getVisibleText(), "Hello CSS!");
    }
}
StreamTests.registerSuite();

class VisitTests extends TurboDriveTestCase {
    async setup() {
        await this.goToLocation("/src/tests/fixtures/visit.html");
    }
    async "test programmatically visiting a same-origin location"() {
        const urlBeforeVisit = await this.location;
        await this.visitLocation("/src/tests/fixtures/one.html");
        const urlAfterVisit = await this.location;
        this.assert.notEqual(urlBeforeVisit, urlAfterVisit);
        this.assert.equal(await this.visitAction, "advance");
        const { url: urlFromBeforeVisitEvent } = await this.nextEventNamed("turbo:before-visit");
        this.assert.equal(urlFromBeforeVisitEvent, urlAfterVisit);
        const { url: urlFromVisitEvent } = await this.nextEventNamed("turbo:visit");
        this.assert.equal(urlFromVisitEvent, urlAfterVisit);
        const { timing } = await this.nextEventNamed("turbo:load");
        this.assert.ok(timing);
    }
    async "skip programmatically visiting a cross-origin location falls back to window.location"() {
        const urlBeforeVisit = await this.location;
        await this.visitLocation("about:blank");
        const urlAfterVisit = await this.location;
        this.assert.notEqual(urlBeforeVisit, urlAfterVisit);
        this.assert.equal(await this.visitAction, "load");
    }
    async "test visiting a location served with a non-HTML content type"() {
        const urlBeforeVisit = await this.location;
        await this.visitLocation("/src/tests/fixtures/svg.svg");
        await this.nextBeat;
        const url = await this.remote.getCurrentUrl();
        const contentType = await contentTypeOfURL(url);
        this.assert.equal(contentType, "image/svg+xml");
        const urlAfterVisit = await this.location;
        this.assert.notEqual(urlBeforeVisit, urlAfterVisit);
        this.assert.equal(await this.visitAction, "load");
    }
    async "test canceling a before-visit event prevents navigation"() {
        this.cancelNextVisit();
        const urlBeforeVisit = await this.location;
        this.clickSelector("#same-origin-link");
        await this.nextBeat;
        this.assert(!await this.changedBody);
        const urlAfterVisit = await this.location;
        this.assert.equal(urlAfterVisit, urlBeforeVisit);
    }
    async "test navigation by history is not cancelable"() {
        this.clickSelector("#same-origin-link");
        await this.drainEventLog();
        await this.nextBeat;
        this.cancelNextVisit();
        await this.goBack();
        this.assert(await this.changedBody);
    }
    async "test turbo:before-fetch-request event.detail"() {
        await this.clickSelector("#same-origin-link");
        const { url, fetchOptions } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.equal(fetchOptions.method, "GET");
        this.assert.ok(url.toString().includes("/src/tests/fixtures/one.html"));
    }
    async "test turbo:before-fetch-request event.detail encodes searchParams"() {
        await this.clickSelector("#same-origin-link-search-params");
        const { url } = await this.nextEventNamed("turbo:before-fetch-request");
        this.assert.ok(url.includes("/src/tests/fixtures/one.html?key=value"));
    }
    async "test turbo:before-fetch-response open new site"() {
        this.remote.execute(() => addEventListener("turbo:before-fetch-response", async function eventListener(event) {
            removeEventListener("turbo:before-fetch-response", eventListener, false);
            window.fetchResponseResult = {
                responseText: await event.detail.fetchResponse.responseText,
                responseHTML: await event.detail.fetchResponse.responseHTML,
            };
        }, false));
        await this.clickSelector("#sample-response");
        await this.nextEventNamed("turbo:before-fetch-response");
        const fetchResponseResult = await this.evaluate(() => window.fetchResponseResult);
        this.assert.isTrue(fetchResponseResult.responseText.indexOf('An element with an ID') > -1);
        this.assert.isTrue(fetchResponseResult.responseHTML.indexOf('An element with an ID') > -1);
    }
    async "test cache does not override response after redirect"() {
        await this.remote.execute(() => {
            const cachedElement = document.createElement("some-cached-element");
            document.body.appendChild(cachedElement);
        });
        this.assert(await this.hasSelector("some-cached-element"));
        this.clickSelector("#same-origin-link");
        await this.nextBeat;
        this.clickSelector("#redirection-link");
        await this.nextBeat;
        await this.nextBeat;
        this.assert.notOk(await this.hasSelector("some-cached-element"));
    }
    async visitLocation(location) {
        this.remote.execute((location) => window.Turbo.visit(location), [location]);
    }
    async cancelNextVisit() {
        this.remote.execute(() => addEventListener("turbo:before-visit", function eventListener(event) {
            removeEventListener("turbo:before-visit", eventListener, false);
            event.preventDefault();
        }, false));
    }
}
function contentTypeOfURL(url) {
    return new Promise(resolve => {
        http.get(url, ({ headers }) => resolve(headers["content-type"]));
    });
}
VisitTests.registerSuite();

exports.AsyncScriptTests = AsyncScriptTests;
exports.AutofocusTests = AutofocusTests;
exports.CacheObserverTests = CacheObserverTests;
exports.DriveDisabledTests = DriveDisabledTests;
exports.DriveTests = DriveTests;
exports.FormSubmissionTests = FormSubmissionTests;
exports.FrameNavigationTests = FrameNavigationTests;
exports.FrameTests = FrameTests;
exports.ImportTests = ImportTests;
exports.LoadingTests = LoadingTests;
exports.NavigationTests = NavigationTests;
exports.PausableRenderingTests = PausableRenderingTests;
exports.PausableRequestsTests = PausableRequestsTests;
exports.RenderingTests = RenderingTests;
exports.ScrollRestorationTests = ScrollRestorationTests;
exports.StreamTests = StreamTests;
exports.VisitTests = VisitTests;
//# sourceMappingURL=functional.js.map
