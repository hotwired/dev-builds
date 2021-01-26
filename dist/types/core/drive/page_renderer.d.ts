import { Renderer } from "../renderer";
import { PageSnapshot } from "./page_snapshot";
export declare type PermanentElement = Element & {
    id: string;
};
export declare type Placeholder = {
    element: Element;
    permanentElement: PermanentElement;
};
export declare class PageRenderer extends Renderer<HTMLBodyElement, PageSnapshot> {
    get shouldRender(): boolean;
    prepareToRender(): void;
    render(): Promise<void>;
    finishRendering(): void;
    get currentHeadSnapshot(): import("./head_snapshot").HeadSnapshot;
    get newHeadSnapshot(): import("./head_snapshot").HeadSnapshot;
    get newElement(): HTMLBodyElement;
    mergeHead(): void;
    replaceBody(): void;
    get trackedElementsAreIdentical(): boolean;
    copyNewHeadStylesheetElements(): void;
    copyNewHeadScriptElements(): void;
    removeCurrentHeadProvisionalElements(): void;
    copyNewHeadProvisionalElements(): void;
    relocateCurrentBodyPermanentElements(): Placeholder[];
    replacePlaceholderElementsWithClonedPermanentElements(placeholders: Placeholder[]): void;
    activateNewBody(): void;
    activateNewBodyScriptElements(): void;
    assignNewBody(): void;
    focusFirstAutofocusableElement(): void;
    get newHeadStylesheetElements(): Element[];
    get newHeadScriptElements(): Element[];
    get currentHeadProvisionalElements(): Element[];
    get newHeadProvisionalElements(): Element[];
    get currentBodyPermanentElements(): PermanentElement[];
    get newBodyScriptElements(): HTMLScriptElement[];
}
