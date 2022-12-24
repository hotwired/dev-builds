export declare type Action = "advance" | "replace" | "restore";
export declare type Position = {
    x: number;
    y: number;
};
export declare type StreamSource = {
    addEventListener(type: "message", listener: (event: MessageEvent) => void, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: "message", listener: (event: MessageEvent) => void, options?: boolean | EventListenerOptions): void;
};
