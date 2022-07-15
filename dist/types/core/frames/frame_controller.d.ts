import { FrameElement, FrameElementDelegate, FrameLoadingStyle } from "../../elements/frame_element";
import { FetchRequest, FetchRequestDelegate, FetchRequestHeaders } from "../../http/fetch_request";
import { FetchResponse } from "../../http/fetch_response";
import { AppearanceObserver, AppearanceObserverDelegate } from "../../observers/appearance_observer";
import { FormSubmission, FormSubmissionDelegate } from "../drive/form_submission";
import { Snapshot } from "../snapshot";
import { ViewDelegate } from "../view";
import { FormInterceptor, FormInterceptorDelegate } from "./form_interceptor";
import { FrameView } from "./frame_view";
import { LinkInterceptor, LinkInterceptorDelegate } from "./link_interceptor";
export declare class FrameController implements AppearanceObserverDelegate, FetchRequestDelegate, FormInterceptorDelegate, FormSubmissionDelegate, FrameElementDelegate, LinkInterceptorDelegate, ViewDelegate<Snapshot<FrameElement>> {
    readonly element: FrameElement;
    readonly view: FrameView;
    readonly appearanceObserver: AppearanceObserver;
    readonly linkInterceptor: LinkInterceptor;
    readonly formInterceptor: FormInterceptor;
    formSubmission?: FormSubmission;
    fetchResponseLoaded: (_fetchResponse: FetchResponse) => void;
    private currentFetchRequest;
    private resolveVisitPromise;
    private connected;
    private hasBeenLoaded;
    private ignoredAttributes;
    constructor(element: FrameElement);
    connect(): void;
    disconnect(): void;
    disabledChanged(): void;
    sourceURLChanged(): void;
    completeChanged(): void;
    loadingStyleChanged(): void;
    private loadSourceURL;
    loadResponse(fetchResponse: FetchResponse): Promise<void>;
    elementAppearedInViewport(_element: Element): void;
    shouldInterceptLinkClick(element: Element, _url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
    shouldInterceptFormSubmission(element: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmissionIntercepted(element: HTMLFormElement, submitter?: HTMLElement): void;
    prepareHeadersForRequest(headers: FetchRequestHeaders, _request: FetchRequest): void;
    requestStarted(_request: FetchRequest): void;
    requestPreventedHandlingResponse(_request: FetchRequest, _response: FetchResponse): void;
    requestSucceededWithResponse(request: FetchRequest, response: FetchResponse): Promise<void>;
    requestFailedWithResponse(request: FetchRequest, response: FetchResponse): void;
    requestErrored(request: FetchRequest, error: Error): void;
    requestFinished(_request: FetchRequest): void;
    formSubmissionStarted({ formElement }: FormSubmission): void;
    formSubmissionSucceededWithResponse(formSubmission: FormSubmission, response: FetchResponse): void;
    formSubmissionFailedWithResponse(formSubmission: FormSubmission, fetchResponse: FetchResponse): void;
    formSubmissionErrored(formSubmission: FormSubmission, error: Error): void;
    formSubmissionFinished({ formElement }: FormSubmission): void;
    allowsImmediateRender(_snapshot: Snapshot, _resume: (value: any) => void): boolean;
    viewRenderedSnapshot(_snapshot: Snapshot, _isPreview: boolean): void;
    preloadOnLoadLinksForView(element: Element): void;
    viewInvalidated(): void;
    private visit;
    private navigateFrame;
    private proposeVisitIfNavigatedWithAction;
    private findFrameElement;
    extractForeignFrameElement(container: ParentNode): Promise<FrameElement>;
    private formActionIsVisitable;
    private shouldInterceptNavigation;
    get id(): string;
    get enabled(): boolean;
    get sourceURL(): string | undefined;
    set sourceURL(sourceURL: string | undefined);
    get loadingStyle(): FrameLoadingStyle;
    get isLoading(): boolean;
    get complete(): boolean;
    set complete(value: boolean);
    get isActive(): boolean;
    get rootLocation(): URL;
    private isIgnoringChangesTo;
    private ignoringChangesToAttribute;
}
