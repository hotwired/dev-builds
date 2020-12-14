import { Snapshot } from "./snapshot";
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
    get currentElement(): E;
    get newElement(): E;
}
