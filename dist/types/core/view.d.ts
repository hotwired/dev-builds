import { Renderer } from "./renderer";
import { Snapshot } from "./snapshot";
import { Position } from "./types";
export interface ViewDelegate<S extends Snapshot> {
    viewWillRenderSnapshot(snapshot: S, isPreview: boolean): void;
    viewRenderedSnapshot(snapshot: S, isPreview: boolean): void;
    viewInvalidated(): void;
}
export declare abstract class View<E extends Element, S extends Snapshot<E> = Snapshot<E>, R extends Renderer<E, S> = Renderer<E, S>, D extends ViewDelegate<S> = ViewDelegate<S>> {
    readonly delegate: D;
    readonly element: E;
    renderer?: R;
    abstract readonly snapshot: S;
    constructor(delegate: D, element: E);
    scrollToAnchor(anchor: string): void;
    scrollToElement(element: Element): void;
    scrollToPosition({ x, y }: Position): void;
    get scrollRoot(): {
        scrollTo(x: number, y: number): void;
    };
    focusElement(element: Element | HTMLElement): void;
    render(renderer: R): Promise<void>;
    invalidate(): void;
    prepareToRenderSnapshot(renderer: R): void;
    markAsPreview(isPreview: boolean): void;
    renderSnapshot(renderer: R): Promise<void>;
    finishRenderingSnapshot(renderer: R): void;
}
