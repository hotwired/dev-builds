import { FetchResponse } from "../http/fetch_response";
import { Snapshot } from "../core/snapshot";
export declare enum FrameLoadingStyle {
    eager = "eager",
    lazy = "lazy"
}
export declare type FrameElementObservedAttribute = keyof FrameElement & ("disabled" | "complete" | "loading" | "src");
export interface FrameElementDelegate {
    connect(): void;
    disconnect(): void;
    completeChanged(): void;
    loadingStyleChanged(): void;
    sourceURLChanged(): void;
    disabledChanged(): void;
    formSubmissionIntercepted(element: HTMLFormElement, submitter?: HTMLElement): void;
    linkClickIntercepted(element: Element, url: string): void;
    loadResponse(response: FetchResponse): void;
    fetchResponseLoaded: (fetchResponse: FetchResponse) => void;
    visitCachedSnapshot: (snapshot: Snapshot) => void;
    isLoading: boolean;
}
export declare class FrameElement extends HTMLElement {
    static delegateConstructor: new (element: FrameElement) => FrameElementDelegate;
    loaded: Promise<FetchResponse | void>;
    readonly delegate: FrameElementDelegate;
    static get observedAttributes(): FrameElementObservedAttribute[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    reload(): void;
    attributeChangedCallback(name: string): void;
    get src(): string | null;
    set src(value: string | null);
    get loading(): FrameLoadingStyle;
    set loading(value: FrameLoadingStyle);
    get disabled(): boolean;
    set disabled(value: boolean);
    get autoscroll(): boolean;
    set autoscroll(value: boolean);
    get complete(): boolean;
    get isActive(): boolean;
    get isPreview(): boolean;
}
