import { Snapshot } from "../snapshot";
import { HeadSnapshot } from "./head_snapshot";
export declare class PageSnapshot extends Snapshot<HTMLBodyElement> {
    static fromHTMLString(html?: string): PageSnapshot;
    static fromElement(element: Element): PageSnapshot;
    static fromDocument({ head, body, documentElement }: Document): PageSnapshot;
    readonly headSnapshot: HeadSnapshot;
    readonly htmlElement: HTMLHtmlElement;
    constructor(element: HTMLBodyElement, headSnapshot: HeadSnapshot, htmlElement: HTMLHtmlElement);
    clone(): PageSnapshot;
    get headElement(): HTMLHeadElement;
    get rootLocation(): URL;
    get cacheControlValue(): string | null;
    get isPreviewable(): boolean;
    get isCacheable(): boolean;
    get isVisitable(): boolean;
    getSetting(name: string): string | null;
}
