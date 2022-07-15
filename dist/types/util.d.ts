export declare type DispatchOptions<T extends CustomEvent> = {
    target: EventTarget;
    cancelable: boolean;
    detail: T["detail"];
};
export declare function dispatch<T extends CustomEvent>(eventName: string, { target, cancelable, detail }?: Partial<DispatchOptions<T>>): CustomEvent<T["detail"]>;
export declare function nextAnimationFrame(): Promise<void>;
export declare function nextEventLoopTick(): Promise<void>;
export declare function nextMicrotask(): Promise<void>;
export declare function parseHTMLDocument(html?: string): Document;
export declare function unindent(strings: TemplateStringsArray, ...values: any[]): string;
export declare function uuid(): string;
export declare function getAttribute(attributeName: string, ...elements: (Element | undefined)[]): string | null;
export declare function markAsBusy(...elements: Element[]): void;
export declare function clearBusyState(...elements: Element[]): void;
export declare function attributeTrue(element: Element, attributeName: string): boolean;
