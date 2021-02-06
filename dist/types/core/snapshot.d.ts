export declare class Snapshot<E extends Element = Element> {
    readonly element: E;
    constructor(element: E);
    get children(): Element[];
    hasAnchor(anchor: string): boolean;
    getElementForAnchor(anchor: string): Element | null;
    get firstAutofocusableElement(): Element | null;
    get permanentElements(): Element[];
    getPermanentElementById(id: string): Element | null;
    getPermanentElementsPresentInSnapshot(snapshot: Snapshot): Element[];
}
