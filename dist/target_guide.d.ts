import { Controller } from "./controller";
import { Scope } from "./scope";
export declare class TargetGuide {
    readonly scope: Scope;
    readonly controller: Controller;
    readonly definedTargets: Array<String>;
    constructor(scope: Scope, controller: Controller);
    get identifier(): string;
    get targets(): import("./target_set").TargetSet;
    get registeredControllers(): Array<String>;
    controllerRegistered(controllerName: string): Boolean;
    targetDefined(targetName: string): Boolean;
    private getAllTargets;
    private getAllLegacyTargets;
    private searchForUndefinedTargets;
    private handleWarningForUndefinedTarget;
}
//# sourceMappingURL=target_guide.d.ts.map