import { Adapter } from "./native/adapter";
import { FormMode, Session } from "./session";
import { Cache } from "./cache";
import { Locatable } from "./url";
import { StreamMessage } from "./streams/stream_message";
import { StreamSource } from "./types";
import { VisitOptions } from "./drive/visit";
import { PageRenderer } from "./drive/page_renderer";
import { PageSnapshot } from "./drive/page_snapshot";
import { FrameRenderer } from "./frames/frame_renderer";
declare const session: Session;
declare const cache: Cache;
declare const navigator: import("./drive/navigator").Navigator;
export { navigator, session, cache, PageRenderer, PageSnapshot, FrameRenderer };
export { TurboBeforeCacheEvent, TurboBeforeRenderEvent, TurboBeforeVisitEvent, TurboClickEvent, TurboFetchRequestErrorEvent, TurboFrameLoadEvent, TurboFrameRenderEvent, TurboLoadEvent, TurboRenderEvent, TurboVisitEvent, } from "./session";
export { TurboSubmitStartEvent, TurboSubmitEndEvent } from "./drive/form_submission";
export { TurboFrameMissingEvent } from "./frames/frame_controller";
export { StreamActions, TurboStreamAction, TurboStreamActions } from "./streams/stream_actions";
export declare function start(): void;
export declare function registerAdapter(adapter: Adapter): void;
export declare function visit(location: Locatable, options?: Partial<VisitOptions>): Promise<void>;
export declare function connectStreamSource(source: StreamSource): void;
export declare function disconnectStreamSource(source: StreamSource): void;
export declare function renderStreamMessage(message: StreamMessage | string): void;
export declare function clearCache(): void;
export declare function setProgressBarDelay(delay: number): void;
export declare function setConfirmMethod(confirmMethod: (message: string, element: HTMLFormElement, submitter: HTMLElement | undefined) => Promise<boolean>): void;
export declare function setFormMode(mode: FormMode): void;
