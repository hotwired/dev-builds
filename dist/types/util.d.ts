import { Action } from "./core/types";
export declare type DispatchOptions<T extends CustomEvent> = {
    target: EventTarget;
    cancelable: boolean;
    detail: T["detail"];
};
export declare function activateScriptElement(element: HTMLScriptElement): HTMLScriptElement;
export declare function createDocumentFragment(html: string): DocumentFragment;
export declare function dispatch<T extends CustomEvent>(eventName: string, { target, cancelable, detail }?: Partial<DispatchOptions<T>>): CustomEvent<T["detail"]>;
export declare function nextAnimationFrame(): Promise<void>;
export declare function nextEventLoopTick(): Promise<void>;
export declare function nextMicrotask(): Promise<void>;
export declare function parseHTMLDocument(html?: string): Document;
export declare function unindent(strings: TemplateStringsArray, ...values: any[]): string;
export declare function uuid(): string;
export declare function getAttribute(attributeName: string, ...elements: (Element | undefined)[]): string | null;
export declare function hasAttribute(attributeName: string, ...elements: (Element | undefined)[]): boolean;
export declare function markAsBusy(...elements: Element[]): void;
export declare function clearBusyState(...elements: Element[]): void;
export declare function waitForLoad(element: HTMLLinkElement, timeoutInMilliseconds?: number): Promise<void>;
export declare function getHistoryMethodForAction(action: Action): (data: any, unused: string, url?: string | URL | null | undefined) => void;
export declare function getVisitAction(...elements: (Element | undefined)[]): Action | null;
export declare function getMetaElement(name: string): HTMLMetaElement | null;
export declare function getMetaContent(name: string): string | null;
export declare function setMetaContent(name: string, content: string): HTMLMetaElement;
