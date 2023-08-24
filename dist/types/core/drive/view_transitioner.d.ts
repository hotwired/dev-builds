declare global {
    type ViewTransition = {
        finished: Promise<void>;
    };
    interface Document {
        startViewTransition?(callback: () => Promise<void>): ViewTransition;
    }
}
export declare class ViewTransitioner {
    private viewTransitionStarted;
    private lastOperation;
    renderChange(useViewTransition: boolean, render: () => Promise<void>): Promise<void>;
    private get viewTransitionsAvailable();
}
