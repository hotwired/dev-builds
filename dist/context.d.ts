import { Application } from "./application";
import { Controller } from "./controller";
import { Dispatcher } from "./dispatcher";
import { ErrorHandler } from "./error_handler";
import { Module } from "./module";
import { Schema } from "./schema";
import { Scope } from "./scope";
import { TargetGuide } from "./target_guide";
import { TargetObserverDelegate } from "./target_observer";
export declare class Context implements ErrorHandler, TargetObserverDelegate {
    readonly module: Module;
    readonly scope: Scope;
    readonly controller: Controller;
    readonly targetGuide: TargetGuide;
    private bindingObserver;
    private valueObserver;
    private targetObserver;
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
    handleWarning(warning: string, message: string, detail?: object): void;
    logDebugActivity: (functionName: string, detail?: object) => void;
    targetConnected(element: Element, name: string): void;
    targetDisconnected(element: Element, name: string): void;
    invokeControllerMethod(methodName: string, ...args: any[]): void;
}
//# sourceMappingURL=context.d.ts.map