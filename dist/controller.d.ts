import { ClassPropertiesBlessing } from "./class_properties";
import { Constructor } from "./constructor";
import { Context } from "./context";
import { ValueDefinitionMap } from "./value_properties";
export declare type ControllerConstructor = Constructor<Controller>;
export declare class Controller {
    static blessings: (typeof ClassPropertiesBlessing)[];
    static targets: string[];
    static values: ValueDefinitionMap;
    readonly context: Context;
    constructor(context: Context);
    get application(): import("./application").Application;
    get scope(): import("./scope").Scope;
    get element(): Element;
    get identifier(): string;
    get targets(): import("./target_set").TargetSet;
    get classes(): import("./class_map").ClassMap;
    get data(): import("./data_map").DataMap;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=controller.d.ts.map