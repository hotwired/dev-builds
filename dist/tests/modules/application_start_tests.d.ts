import { DOMTestCase } from "@stimulus/test";
export default class ApplicationStartTests extends DOMTestCase {
    iframe: HTMLIFrameElement;
    setup(): Promise<void>;
    "test starting an application when the document is loading"(): Promise<void>;
    "test starting an application when the document is interactive"(): Promise<void>;
    "test starting an application when the document is complete"(): Promise<void>;
    private messageFromStartState;
    private assertIn;
}
//# sourceMappingURL=application_start_tests.d.ts.map