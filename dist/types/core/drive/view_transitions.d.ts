declare global {
    type ViewTransition = {
        finished: Promise<void>;
    };
    interface Document {
        startViewTransition?(callback: () => void): ViewTransition;
    }
}
export declare function withViewTransition(shouldTransition: boolean, callback: () => Promise<void>): Promise<void>;
