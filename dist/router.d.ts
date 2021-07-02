import { Application } from "./application";
import { Context } from "./context";
import { Definition } from "./definition";
import { Module } from "./module";
import { Scope } from "./scope";
import { ScopeObserverDelegate } from "./scope_observer";
export declare class Router implements ScopeObserverDelegate {
    readonly application: Application;
    private scopeObserver;
    private scopesByIdentifier;
    private modulesByIdentifier;
    constructor(application: Application);
    get element(): Element;
    get schema(): import("./schema").Schema;
    get logger(): import("./logger").Logger;
    get controllerAttribute(): string;
    get modules(): Module[];
    get contexts(): Context[];
    start(): void;
    stop(): void;
    loadDefinition(definition: Definition): void;
    unloadIdentifier(identifier: string): void;
    getContextForElementAndIdentifier(element: Element, identifier: string): Context | undefined;
    handleError(error: Error, message: string, detail: any): void;
    createScopeForElementAndIdentifier(element: Element, identifier: string): Scope;
    scopeConnected(scope: Scope): void;
    scopeDisconnected(scope: Scope): void;
    private connectModule;
    private disconnectModule;
}
//# sourceMappingURL=router.d.ts.map