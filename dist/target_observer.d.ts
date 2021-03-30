import { Multimap } from "@stimulus/multimap";
import { Token, TokenListObserverDelegate } from "@stimulus/mutation-observers";
import { Context } from "./context";
export interface TargetObserverDelegate {
    targetConnected(element: Element, name: string): void;
    targetDisconnected(element: Element, name: string): void;
}
export declare class TargetObserver implements TokenListObserverDelegate {
    readonly context: Context;
    readonly delegate: TargetObserverDelegate;
    readonly targetsByName: Multimap<string, Element>;
    private tokenListObserver?;
    constructor(context: Context, delegate: TargetObserverDelegate);
    start(): void;
    stop(): void;
    tokenMatched({ element, content: name }: Token): void;
    tokenUnmatched({ element, content: name }: Token): void;
    connectTarget(element: Element, name: string): void;
    disconnectTarget(element: Element, name: string): void;
    disconnectAllTargets(): void;
    get element(): Element;
    get identifier(): string;
    get scope(): import("./scope").Scope;
    get attributeName(): string;
}
//# sourceMappingURL=target_observer.d.ts.map