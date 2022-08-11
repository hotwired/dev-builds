export declare type Action = "advance" | "replace" | "restore";
export declare function isAction(action: any): action is Action;
export declare type Position = {
    x: number;
    y: number;
};
export declare type StreamSource = {
    addEventListener(type: "message", listener: (event: MessageEvent) => void, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: "message", listener: (event: MessageEvent) => void, options?: boolean | EventListenerOptions): void;
};
export declare type ResolvingFunctions<T = unknown> = {
    resolve(value: T | PromiseLike<T>): void;
    reject(reason?: any): void;
};
