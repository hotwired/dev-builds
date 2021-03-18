import { BasicController } from "./basic_controller";
import { Constructor } from "./class";
export declare type ControllerConstructor = Constructor<BasicController>;
declare const Controller_base: Constructor<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly targets: import("./target_set").TargetSet;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly targets: import("./target_set").TargetSet;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
}> & import("./class").OmitClass<Constructor<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly targets: import("./target_set").TargetSet;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
} & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly targets: import("./target_set").TargetSet;
}> & import("./class").OmitClass<Constructor<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
}, [context: import("./context").Context]> & import("./class").Prototype<BasicController & {
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    readonly classes: import("./class_map").ClassMap;
}> & import("./class").OmitClass<typeof BasicController> & import("./class").OmitClass<{
    new (context: import("./context").Context): {
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
        readonly classes: import("./class_map").ClassMap;
    };
    classes: string[];
    uses: typeof BasicController.uses;
}>> & import("./class").OmitClass<{
    new (context: import("./context").Context): {
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
        readonly targets: import("./target_set").TargetSet;
    };
    targets: string[];
    uses: typeof BasicController.uses;
}>> & import("./class").OmitClass<{
    new (context: import("./context").Context): {
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
        readonly valueDescriptorMap: import("./value_properties").ValueDescriptorMap;
    };
    values: import("./value_properties").ValueDefinitionMap;
    uses: typeof BasicController.uses;
}>;
export declare class Controller extends Controller_base {
}
export {};
//# sourceMappingURL=controller.d.ts.map