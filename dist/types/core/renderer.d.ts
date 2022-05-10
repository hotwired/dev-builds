import { Snapshot } from "./snapshot";
import { ReloadReason } from "./native/browser_adapter";
export declare abstract class Renderer<E extends Element, S extends Snapshot<E> = Snapshot<E>> {
    readonly currentSnapshot: S;
    readonly newSnapshot: S;
    readonly isPreview: boolean;
    readonly willRender: boolean;
    readonly promise: Promise<void>;
    private resolvingFunctions?;
    constructor(currentSnapshot: S, newSnapshot: S, isPreview: boolean, willRender?: boolean);
    get shouldRender(): boolean;
    get reloadReason(): ReloadReason;
    prepareToRender(): void;
    abstract render(): Promise<void>;
    finishRendering(): void;
    createScriptElement(element: Element): Element;
    preservingPermanentElements(callback: () => void): void;
    focusFirstAutofocusableElement(): void;
    get connectedSnapshot(): S;
    get currentElement(): E;
    get newElement(): E;
    get permanentElementMap(): import("./snapshot").PermanentElementMap;
    get cspNonce(): string | null | undefined;
}
