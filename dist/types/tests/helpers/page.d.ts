import { JSHandle, Locator, Page } from "@playwright/test";
declare type Target = string | null;
declare type EventType = string;
declare type EventDetail = any;
declare type EventLog = [EventType, EventDetail, Target];
declare type MutationAttributeName = string;
declare type MutationAttributeValue = string | null;
declare type MutationLog = [MutationAttributeName, Target, MutationAttributeValue];
declare type BodyHTML = string;
declare type BodyMutationLog = [BodyHTML];
export declare function attributeForSelector(page: Page, selector: string, attributeName: string): Promise<string | null>;
declare type CancellableEvent = "turbo:click" | "turbo:before-visit";
export declare function cancelNextEvent(page: Page, eventName: CancellableEvent): Promise<void>;
export declare function clickWithoutScrolling(page: Page, selector: string, options?: {}): Promise<false | void>;
export declare function clearLocalStorage(page: Page): Promise<void>;
export declare function disposeAll(...handles: JSHandle[]): Promise<void[]>;
export declare function getFromLocalStorage(page: Page, key: string): Promise<string | null>;
export declare function getSearchParam(url: string, key: string): string | null;
export declare function hash(url: string): string;
export declare function hasSelector(page: Page, selector: string): Promise<boolean>;
export declare function innerHTMLForSelector(page: Page, selector: string): Promise<string>;
export declare function isScrolledToSelector(page: Page, selector: string): Promise<boolean>;
export declare function nextBeat(): Promise<void>;
export declare function nextBody(_page: Page, timeout?: number): Promise<void>;
export declare function nextEventNamed(page: Page, eventName: string): Promise<any>;
export declare function nextEventOnTarget(page: Page, elementId: string, eventName: string): Promise<any>;
export declare function listenForEventOnTarget(page: Page, elementId: string, eventName: string): Promise<void>;
export declare function nextBodyMutation(page: Page): Promise<string | null>;
export declare function noNextBodyMutation(page: Page): Promise<boolean>;
export declare function nextAttributeMutationNamed(page: Page, elementId: string, attributeName: string): Promise<string | null>;
export declare function noNextAttributeMutationNamed(page: Page, elementId: string, attributeName: string): Promise<boolean>;
export declare function noNextEventNamed(page: Page, eventName: string): Promise<boolean>;
export declare function noNextEventOnTarget(page: Page, elementId: string, eventName: string): Promise<boolean>;
export declare function outerHTMLForSelector(page: Page, selector: string): Promise<string>;
export declare function pathname(url: string): string;
export declare function pathnameForIFrame(page: Page, name: string): Promise<string>;
export declare function propertyForSelector(page: Page, selector: string, propertyName: string): Promise<any>;
export declare function readBodyMutationLogs(page: Page, length?: number): Promise<BodyMutationLog[]>;
export declare function readEventLogs(page: Page, length?: number): Promise<EventLog[]>;
export declare function readMutationLogs(page: Page, length?: number): Promise<MutationLog[]>;
export declare function search(url: string): string;
export declare function searchParams(url: string): URLSearchParams;
export declare function selectorHasFocus(page: Page, selector: string): Promise<boolean>;
export declare function setLocalStorageFromEvent(page: Page, eventName: string, storageKey: string, storageValue: string): Promise<void>;
export declare function scrollPosition(page: Page): Promise<{
    x: number;
    y: number;
}>;
export declare function isScrolledToTop(page: Page): Promise<boolean>;
export declare function scrollToSelector(page: Page, selector: string): Promise<void>;
export declare function sleep(timeout?: number): Promise<void>;
export declare function strictElementEquals(left: Locator, right: Locator): Promise<boolean>;
export declare function textContent(page: Page, html: string): Promise<string | null>;
export declare function visitAction(page: Page): Promise<string>;
export declare function waitForPathname(page: Page, pathname: string): Promise<void>;
export declare function waitUntilSelector(page: Page, selector: string, state?: "visible" | "attached"): Promise<import("playwright-core").ElementHandle<HTMLElement | SVGElement>>;
export declare function waitUntilNoSelector(page: Page, selector: string, state?: "hidden" | "detached"): Promise<import("playwright-core").ElementHandle<HTMLElement | SVGElement> | null>;
export declare function willChangeBody(page: Page, callback: () => Promise<void>): Promise<boolean>;
export {};
