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
    currentURL?: string | null;
    formSubmission?: FormSubmission;
    private currentFetchRequest;
    private resolveVisitPromise;
    private connected;
    private hasBeenLoaded;
    private settingSourceURL;
    constructor(element: FrameElement);
    connect(): void;
    disconnect(): void;
    disabledChanged(): void;
    sourceURLChanged(): void;
    loadingStyleChanged(): void;
    loadSourceURL(): Promise<void>;
    loadResponse(fetchResponse: FetchResponse): Promise<void>;
    elementAppearedInViewport(element: Element): void;
    shouldInterceptLinkClick(element: Element, url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
    shouldInterceptFormSubmission(element: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmissionIntercepted(element: HTMLFormElement, submitter?: HTMLElement): void;
    prepareHeadersForRequest(headers: FetchRequestHeaders, request: FetchRequest): void;
    requestStarted(request: FetchRequest): void;
    requestPreventedHandlingResponse(request: FetchRequest, response: FetchResponse): void;
    requestSucceededWithResponse(request: FetchRequest, response: FetchResponse): Promise<void>;
    requestFailedWithResponse(request: FetchRequest, response: FetchResponse): void;
    requestErrored(request: FetchRequest, error: Error): void;
    requestFinished(request: FetchRequest): void;
    formSubmissionStarted(formSubmission: FormSubmission): void;
    formSubmissionSucceededWithResponse(formSubmission: FormSubmission, response: FetchResponse): void;
    formSubmissionFailedWithResponse(formSubmission: FormSubmission, fetchResponse: FetchResponse): void;
    formSubmissionErrored(formSubmission: FormSubmission, error: Error): void;
    formSubmissionFinished(formSubmission: FormSubmission): void;
    allowsImmediateRender(snapshot: Snapshot, resume: (value: any) => void): boolean;
    viewRenderedSnapshot(snapshot: Snapshot, isPreview: boolean): void;
    viewInvalidated(): void;
    private visit;
    private navigateFrame;
    private findFrameElement;
    extractForeignFrameElement(container: ParentNode): Promise<FrameElement>;
    private formActionIsVisitable;
    private shouldInterceptNavigation;
    get id(): string;
    get enabled(): boolean;
    get sourceURL(): string | undefined;
    get reloadable(): boolean;
    set reloadable(value: boolean);
    set sourceURL(sourceURL: string | undefined);
    get loadingStyle(): FrameLoadingStyle;
    get isLoading(): boolean;
    get isActive(): boolean;
    get rootLocation(): URL;
}
