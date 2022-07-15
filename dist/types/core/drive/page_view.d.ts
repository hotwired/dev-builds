import { View, ViewDelegate } from "../view";
import { ErrorRenderer } from "./error_renderer";
import { PageRenderer } from "./page_renderer";
import { PageSnapshot } from "./page_snapshot";
import { SnapshotCache } from "./snapshot_cache";
import { Visit } from "./visit";
export interface PageViewDelegate extends ViewDelegate<PageSnapshot> {
    viewWillCacheSnapshot(): void;
}
declare type PageViewRenderer = PageRenderer | ErrorRenderer;
export declare class PageView extends View<Element, PageSnapshot, PageViewRenderer, PageViewDelegate> {
    readonly snapshotCache: SnapshotCache;
    lastRenderedLocation: URL;
    forceReloaded: boolean;
    renderPage(snapshot: PageSnapshot, isPreview?: boolean, willRender?: boolean, visit?: Visit): Promise<void>;
    renderError(snapshot: PageSnapshot, visit?: Visit): Promise<void>;
    clearSnapshotCache(): void;
    cacheSnapshot(): Promise<PageSnapshot | undefined>;
    getCachedSnapshotForLocation(location: URL): PageSnapshot | undefined;
    get snapshot(): PageSnapshot;
    get shouldCacheSnapshot(): boolean;
}
export {};
