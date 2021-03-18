import { BasicController } from "./basic_controller";
import { Constructor } from "./class";
export declare type ControllerConstructor = Constructor<BasicController>;
declare const Controller_base: Constructor<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly targets: import("./target_set").TargetSet;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly targets: import("./target_set").TargetSet;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}> & import("./class").OmitClass<Constructor<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly targets: import("./target_set").TargetSet;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
} & {
    readonly targets: import("./target_set").TargetSet;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}> & import("./class").OmitClass<Constructor<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly classes: import("./class_map").ClassMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}> & import("./class").OmitClass<typeof BasicController> & import("./class").OmitClass<{
    new (...args: any[]): {
        readonly classes: import("./class_map").ClassMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    };
    classes: string[];
    uses: typeof BasicController.uses;
}>> & import("./class").OmitClass<{
    new (...args: any[]): {
        readonly targets: import("./target_set").TargetSet;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    };
    targets: string[];
    uses: typeof BasicController.uses;
}>> & import("./class").OmitClass<{
    new (...args: any[]): {
        readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    };
    values: import("./value_properties").ValueDefinitionMap;
    uses: typeof BasicController.uses;
}>;
export declare class Controller extends Controller_base {
}
export {};
//# sourceMappingURL=controller.d.ts.map