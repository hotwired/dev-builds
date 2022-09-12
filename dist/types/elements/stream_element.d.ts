export declare type TurboBeforeStreamRenderEvent = CustomEvent<{
    newStream: StreamElement;
}>;
export declare class StreamElement extends HTMLElement {
    connectedCallback(): Promise<void>;
    private renderPromise?;
    render(): Promise<void>;
    disconnect(): void;
    removeDuplicateTargetChildren(): void;
    get duplicateChildren(): any[];
    get performAction(): import("../core/streams/stream_actions").TurboStreamAction;
    get targetElements(): any[];
    get templateContent(): DocumentFragment;
    get templateElement(): HTMLTemplateElement;
    get action(): string | null;
    get target(): string | null;
    get targets(): string | null;
    private raise;
    private get description();
    private get beforeRenderEvent();
    private get targetElementsById();
    private get targetElementsByQuery();
}
