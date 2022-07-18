export interface LinkClickObserverDelegate {
    willFollowLinkToLocation(link: Element, location: URL, event: MouseEvent): boolean;
    followedLinkToLocation(link: Element, location: URL): void;
}
export declare class LinkClickObserver {
    readonly delegate: LinkClickObserverDelegate;
    started: boolean;
    constructor(delegate: LinkClickObserverDelegate);
    start(): void;
    stop(): void;
    clickCaptured: () => void;
    clickBubbled: (event: MouseEvent) => void;
    clickEventIsSignificant(event: MouseEvent): boolean;
    findLinkFromClickTarget(target: EventTarget | null): HTMLAnchorElement | null | undefined;
    getLocationForLink(link: Element): URL;
}
