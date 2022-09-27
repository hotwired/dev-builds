import { FormSubmitObserver, FormSubmitObserverDelegate } from "../../observers/form_submit_observer";
import { LinkClickObserver, LinkClickObserverDelegate } from "../../observers/link_click_observer";
import { Session } from "../session";
export declare class FrameRedirector implements LinkClickObserverDelegate, FormSubmitObserverDelegate {
    readonly session: Session;
    readonly element: Element;
    readonly linkClickObserver: LinkClickObserver;
    readonly formSubmitObserver: FormSubmitObserver;
    constructor(session: Session, element: Element);
    start(): void;
    stop(): void;
    willFollowLinkToLocation(element: Element, location: URL, event: MouseEvent): boolean;
    followedLinkToLocation(element: Element, url: URL): void;
    willSubmitForm(element: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmitted(element: HTMLFormElement, submitter?: HTMLElement): void;
    private frameAllowsVisitingLocation;
    private shouldSubmit;
    private shouldRedirect;
    private findFrameElement;
}
