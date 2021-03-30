import { Application } from "./application";
import { Controller } from "./controller";
import { Dispatcher } from "./dispatcher";
import { ErrorHandler } from "./error_handler";
import { Module } from "./module";
import { Schema } from "./schema";
import { Scope } from "./scope";
export declare class Context implements ErrorHandler {
    readonly module: Module;
    readonly scope: Scope;
    readonly controller: Controller;
    private bindingObserver;
    private targetObserver;
    private valueObserver;
    constructor(module: Module, scope: Scope);
    connect(): void;
    disconnect(): void;
    get application(): Application;
    get identifier(): string;
    get schema(): Schema;
    get dispatcher(): Dispatcher;
    get element(): Element;
    get parentElement(): Element | null;
    handleError(error: Error, message: string, detail?: object): void;
    targetConnected(element: Element, name: string): void;
    targetDisconnected(element: Element, name: string): void;
    invokeControllerMethod(methodName: string, ...args: any[]): void;
}
//# sourceMappingURL=context.d.ts.map