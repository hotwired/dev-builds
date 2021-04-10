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
    "test following a link within a frame with target=_top navigates the page"(): Promise<void>;
    "test following a link to a page with a <turbo-frame recurse> which lazily loads a matching frame"(): Promise<void>;
    "test submitting a form that redirects to a page with a <turbo-frame recurse> which lazily loads a matching frame"(): Promise<void>;
    "test removing [disabled] attribute from eager-loaded frame navigates it"(): Promise<void>;
}
