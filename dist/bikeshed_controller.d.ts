import { BasicController } from "./basic_controller";
declare const BikeshedController_base: import("./class").Constructor<BasicController & {
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
}> & import("./class").OmitClass<import("./class").Constructor<BasicController & {
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
}> & import("./class").OmitClass<import("./class").Constructor<BasicController & {
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
    class<T extends import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
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
        uses: typeof BasicController.uses;
    }>, K extends string>(this: T, key: K): import("./mixin").Mix<T, import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
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
        uses: typeof BasicController.uses;
    }> & import("./class").Constructor<`${K}Class` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Class` as K_1]: string | null; } : { -readonly [K_2 in `${K}Class` as K_2]: string | null; }, any[]> & import("./class").Prototype<`${K}Class` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Class` as K_1]: string | null; } : { -readonly [K_2 in `${K}Class` as K_2]: string | null; }> & import("./class").Constructor<`has${Capitalize<`${K}Class`>}` extends keyof {
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
    } | keyof (`${K}Class` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Class` as K_1]: string | null; } : { -readonly [K_2 in `${K}Class` as K_2]: string | null; }) ? { readonly [K_3 in `has${Capitalize<`${K}Class`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${K}Class`>}` as K_4]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${K}Class`>}` extends keyof {
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
    } | keyof (`${K}Class` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Class` as K_1]: string | null; } : { -readonly [K_2 in `${K}Class` as K_2]: string | null; }) ? { readonly [K_3 in `has${Capitalize<`${K}Class`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${K}Class`>}` as K_4]: boolean; }>>;
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
    target<T_1 extends import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
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
        uses: typeof BasicController.uses;
    }>, K_5 extends string>(this: T_1, key: K_5): import("./mixin").Mix<T_1, import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
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
        uses: typeof BasicController.uses;
    }> & import("./class").Constructor<`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }, any[]> & import("./class").Prototype<`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }> & import("./class").Constructor<`${K_5}Targets` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) ? { readonly [K_8 in `${K_5}Targets` as K_8]: Element[]; } : { -readonly [K_9 in `${K_5}Targets` as K_9]: Element[]; }, any[]> & import("./class").Prototype<`${K_5}Targets` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) ? { readonly [K_8 in `${K_5}Targets` as K_8]: Element[]; } : { -readonly [K_9 in `${K_5}Targets` as K_9]: Element[]; }> & import("./class").Constructor<`has${Capitalize<`${K_5}Target`>}` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) | keyof (`${K_5}Targets` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) ? { readonly [K_8 in `${K_5}Targets` as K_8]: Element[]; } : { -readonly [K_9 in `${K_5}Targets` as K_9]: Element[]; }) ? { readonly [K_10 in `has${Capitalize<`${K_5}Target`>}` as K_10]: boolean; } : { -readonly [K_11 in `has${Capitalize<`${K_5}Target`>}` as K_11]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${K_5}Target`>}` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) | keyof (`${K_5}Targets` extends keyof {
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
    } | keyof (`${K_5}Target` extends keyof {
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
    } ? { readonly [K_6 in keyof {
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
    } & `${K_5}Target` as K_6]: Element; } : { -readonly [K_7 in `${K_5}Target` as K_7]: Element; }) ? { readonly [K_8 in `${K_5}Targets` as K_8]: Element[]; } : { -readonly [K_9 in `${K_5}Targets` as K_9]: Element[]; }) ? { readonly [K_10 in `has${Capitalize<`${K_5}Target`>}` as K_10]: boolean; } : { -readonly [K_11 in `has${Capitalize<`${K_5}Target`>}` as K_11]: boolean; }>>;
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
    value<T_2 extends any, S extends string, V extends import("./value_properties").ValueTypeConstant>(this: T_2, token: S, typeConstant: V): import("./mixin").Mix<T_2, import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{
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
    }, any[]> & import("./class").Prototype<{
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
    }> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
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
        uses: typeof BasicController.uses;
    }>> & import("./class").Constructor<{ -readonly [K_12 in `${import("./string_helpers").Camelize<S>}Value` as K_12]: import("./value_properties").ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<{ -readonly [K_12 in `${import("./string_helpers").Camelize<S>}Value` as K_12]: import("./value_properties").ParseValueTypeConstant<V>; }> & import("./class").Constructor<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; }> & import("./class").Constructor<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` | keyof (`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; }) ? { readonly [K_15 in (keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` | keyof (`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_15]: boolean; } : { -readonly [K_16 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_16]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` | keyof (`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; }) ? { readonly [K_15 in (keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` | keyof (`${import("./string_helpers").Camelize<S>}Value` extends keyof {
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
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_13 in `${import("./string_helpers").Camelize<S>}Value` as K_13]: import("./value_properties").ParseValueTypeConstant<V>; } : { -readonly [K_14 in `${import("./string_helpers").Camelize<S>}Value` as K_14]: import("./value_properties").ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_15]: boolean; } : { -readonly [K_16 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_16]: boolean; }>>;
    uses: typeof BasicController.uses;
}>;
export declare class BikeshedController extends BikeshedController_base {
}
export {};
//# sourceMappingURL=bikeshed_controller.d.ts.map