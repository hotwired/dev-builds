import { LinkClickObserver, LinkClickObserverDelegate } from "./link_click_observer";
export declare type FormLinkClickObserverDelegate = {
    willSubmitFormLinkToLocation(link: Element, location: URL, event: MouseEvent): boolean;
    submittedFormLinkToLocation(link: Element, location: URL, form: HTMLFormElement): void;
};
export declare class FormLinkClickObserver implements LinkClickObserverDelegate {
    readonly linkClickObserver: LinkClickObserver;
    readonly delegate: FormLinkClickObserverDelegate;
    constructor(delegate: FormLinkClickObserverDelegate, element: HTMLElement);
    start(): void;
    stop(): void;
    willFollowLinkToLocation(link: Element, location: URL, originalEvent: MouseEvent): boolean;
    followedLinkToLocation(link: Element, location: URL): void;
}
