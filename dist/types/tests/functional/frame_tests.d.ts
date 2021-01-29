import { FunctionalTestCase } from "../helpers/functional_test_case";
export declare class FrameTests extends FunctionalTestCase {
    setup(): Promise<void>;
    "test following a link to a page without a matching frame results in an empty frame"(): Promise<void>;
    "test following a link within a frame with a target set navigates the target frame"(): Promise<void>;
    "test following a link within a descendant frame whose ancestor declares a target set navigates the descendant frame"(): Promise<void>;
    "test following a link that declares data-turbo-frame within a frame whose ancestor respects the override"(): Promise<void>;
    "test following a link within a frame with target=_top navigates the page"(): Promise<void>;
}
