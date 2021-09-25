import { TurboDriveTestCase } from "../helpers/turbo_drive_test_case";
export declare class FrameTests extends TurboDriveTestCase {
    setup(): Promise<void>;
    "test following a link preserves the current <turbo-frame> element's attributes"(): Promise<void>;
    "test a frame whose src references itself does not infinitely loop"(): Promise<void>;
    "test following a link driving a frame toggles the [busy] attribute"(): Promise<void>;
    "test following a link to a page without a matching frame results in an empty frame"(): Promise<void>;
    "test following a link within a frame with a target set navigates the target frame"(): Promise<void>;
    "test following a link within a descendant frame whose ancestor declares a target set navigates the descendant frame"(): Promise<void>;
    "test following a link that declares data-turbo-frame within a frame whose ancestor respects the override"(): Promise<void>;
    "test following a form within a nested frame with form target top"(): Promise<void>;
    "test following a form within a nested frame with child frame target top"(): Promise<void>;
    "test following a link within a frame with target=_top navigates the page"(): Promise<void>;
    "test following a link that declares data-turbo-frame='_self' within a frame with target=_top navigates the frame itself"(): Promise<void>;
    "test following a link to a page with a <turbo-frame recurse> which lazily loads a matching frame"(): Promise<void>;
    "test submitting a form that redirects to a page with a <turbo-frame recurse> which lazily loads a matching frame"(): Promise<void>;
    "test removing [disabled] attribute from eager-loaded frame navigates it"(): Promise<void>;
    "test evaluates frame script elements on each render"(): Promise<void>;
    "test does not evaluate data-turbo-eval=false scripts"(): Promise<void>;
    "test redirecting in a form is still navigatable after redirect"(): Promise<void>;
    "test 'turbo:frame-render' is triggered after frame has finished rendering"(): Promise<void>;
    "test following inner link reloads frame on every click"(): Promise<void>;
    "test following outer link reloads frame on every click"(): Promise<void>;
    "test following outer form reloads frame on every submit"(): Promise<void>;
    "test an inner/outer link reloads frame on every click"(): Promise<void>;
    "test an inner/outer form reloads frame on every submit"(): Promise<void>;
    "test reconnecting after following a link does not reload the frame"(): Promise<void>;
    "test turbo:before-fetch-request fires on the frame element"(): Promise<void>;
    "test turbo:before-fetch-response fires on the frame element"(): Promise<void>;
    get frameScriptEvaluationCount(): Promise<number | undefined>;
}
declare global {
    interface Window {
        frameScriptEvaluationCount?: number;
    }
}
