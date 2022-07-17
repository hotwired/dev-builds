import { LinkInterceptor, LinkInterceptorDelegate } from "../core/frames/link_interceptor";
export declare type FormLinkInterceptorDelegate = {
    shouldInterceptFormLinkClick(link: Element): boolean;
    formLinkClickIntercepted(link: Element, form: HTMLFormElement): void;
};
export declare class FormLinkInterceptor implements LinkInterceptorDelegate {
    readonly linkInterceptor: LinkInterceptor;
    readonly delegate: FormLinkInterceptorDelegate;
    constructor(delegate: FormLinkInterceptorDelegate, element: HTMLElement);
    start(): void;
    stop(): void;
    shouldInterceptLinkClick(link: Element): boolean;
    linkClickIntercepted(link: Element, action: string): void;
}
