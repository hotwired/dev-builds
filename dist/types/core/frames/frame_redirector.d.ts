import { FormSubmitObserver, FormSubmitObserverDelegate } from "../../observers/form_submit_observer";
import { LinkInterceptor, LinkInterceptorDelegate } from "./link_interceptor";
export declare class FrameRedirector implements LinkInterceptorDelegate, FormSubmitObserverDelegate {
    readonly element: Element;
    readonly linkInterceptor: LinkInterceptor;
    readonly formSubmitObserver: FormSubmitObserver;
    constructor(element: Element);
    start(): void;
    stop(): void;
    shouldInterceptLinkClick(element: Element, _url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
    willSubmitForm(element: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmitted(element: HTMLFormElement, submitter?: HTMLElement): void;
    private shouldSubmit;
    private shouldRedirect;
    private findFrameElement;
}
