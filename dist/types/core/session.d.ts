import { Adapter } from "./native/adapter";
import { CacheObserver } from "../observers/cache_observer";
import { FormSubmitObserver, FormSubmitObserverDelegate } from "../observers/form_submit_observer";
import { FrameRedirector } from "./frames/frame_redirector";
import { History, HistoryDelegate } from "./drive/history";
import { LinkClickObserver, LinkClickObserverDelegate } from "../observers/link_click_observer";
import { Locatable } from "./url";
import { Navigator, NavigatorDelegate } from "./drive/navigator";
import { PageObserver, PageObserverDelegate } from "../observers/page_observer";
import { ScrollObserver } from "../observers/scroll_observer";
import { StreamMessage } from "./streams/stream_message";
import { StreamObserver } from "../observers/stream_observer";
import { Action, Position, StreamSource } from "./types";
import { PageView, PageViewDelegate } from "./drive/page_view";
import { Visit, VisitOptions } from "./drive/visit";
import { PageSnapshot } from "./drive/page_snapshot";
export declare type TimingData = {};
export declare class Session implements FormSubmitObserverDelegate, HistoryDelegate, LinkClickObserverDelegate, NavigatorDelegate, PageObserverDelegate, PageViewDelegate {
    readonly navigator: Navigator;
    readonly history: History;
    readonly view: PageView;
    adapter: Adapter;
    readonly pageObserver: PageObserver;
    readonly cacheObserver: CacheObserver;
    readonly linkClickObserver: LinkClickObserver;
    readonly formSubmitObserver: FormSubmitObserver;
    readonly scrollObserver: ScrollObserver;
    readonly streamObserver: StreamObserver;
    readonly frameRedirector: FrameRedirector;
    enabled: boolean;
    progressBarDelay: number;
    started: boolean;
    start(): void;
    disable(): void;
    stop(): void;
    registerAdapter(adapter: Adapter): void;
    visit(location: Locatable, options?: Partial<VisitOptions>): void;
    connectStreamSource(source: StreamSource): void;
    disconnectStreamSource(source: StreamSource): void;
    renderStreamMessage(message: StreamMessage | string): void;
    clearCache(): void;
    setProgressBarDelay(delay: number): void;
    get location(): URL;
    get restorationIdentifier(): string;
    historyPoppedToLocationWithRestorationIdentifier(location: URL, restorationIdentifier: string): void;
    scrollPositionChanged(position: Position): void;
    willFollowLinkToLocation(link: Element, location: URL): boolean;
    followedLinkToLocation(link: Element, location: URL): void;
    allowsVisitingLocation(location: URL): boolean;
    visitProposedToLocation(location: URL, options: Partial<VisitOptions>): void;
    visitStarted(visit: Visit): void;
    visitCompleted(visit: Visit): void;
    willSubmitForm(form: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmitted(form: HTMLFormElement, submitter?: HTMLElement): void;
    pageBecameInteractive(): void;
    pageLoaded(): void;
    pageWillUnload(): void;
    receivedMessageFromStream(message: StreamMessage): void;
    viewWillCacheSnapshot(): void;
    viewWillRenderSnapshot({ element }: PageSnapshot, isPreview: boolean): void;
    viewRenderedSnapshot(snapshot: PageSnapshot, isPreview: boolean): void;
    viewInvalidated(): void;
    applicationAllowsFollowingLinkToLocation(link: Element, location: URL): boolean;
    applicationAllowsVisitingLocation(location: URL): boolean;
    notifyApplicationAfterClickingLinkToLocation(link: Element, location: URL): CustomEvent<any>;
    notifyApplicationBeforeVisitingLocation(location: URL): CustomEvent<any>;
    notifyApplicationAfterVisitingLocation(location: URL): CustomEvent<any>;
    notifyApplicationBeforeCachingSnapshot(): CustomEvent<any>;
    notifyApplicationBeforeRender(newBody: HTMLBodyElement): CustomEvent<any>;
    notifyApplicationAfterRender(): CustomEvent<any>;
    notifyApplicationAfterPageLoad(timing?: TimingData): CustomEvent<any>;
    getActionForLink(link: Element): Action;
    locationIsVisitable(location: URL): boolean;
    get snapshot(): PageSnapshot;
}
export declare function elementIsNavigable(element?: Element): boolean;
