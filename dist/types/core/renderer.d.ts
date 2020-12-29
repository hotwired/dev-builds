import { Snapshot } from "./snapshot";
export declare type PermanentElement = Element & {
    id: string;
};
export declare type Placeholder = {
    element: Element;
    permanentElement: PermanentElement;
};
export declare abstract class Renderer<E extends Element, S extends Snapshot<E> = Snapshot<E>> {
    readonly currentSnapshot: S;
    readonly newSnapshot: S;
    readonly isPreview: boolean;
    readonly promise: Promise<void>;
    private resolvingFunctions?;
    constructor(currentSnapshot: S, newSnapshot: S, isPreview: boolean);
    get shouldRender(): boolean;
    prepareToRender(): void;
    abstract render(): Promise<void>;
    finishRendering(): void;
    createScriptElement(element: Element): Element;
    preservingPermanentElements(callback: () => void): void;
    focusFirstAutofocusableElement(): void;
    get currentElement(): E;
    get newElement(): E;
}
export declare function replaceElementWithElement(fromElement: Element, toElement: Element): Element | undefined;
