import { BasicController } from "./basic_controller";
import { Mixin } from "./mixin";
export declare const BlessedTargetProperties: Mixin<import("./class").Constructor<{}, any[]>, {
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
}, import("./class").Constructor<{
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
}>>;
export declare const TargetPropertiesMacro: Mixin<import("./class").Constructor<{}, any[]>, {
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
    target<T extends import("./class").Constructor<{
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
    }>, K extends string>(this: T, key: K): import("./mixin").Mix<T, import("./class").Constructor<{
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
    }> & import("./class").Constructor<`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }, any[]> & import("./class").Prototype<`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }> & import("./class").Constructor<`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }, any[]> & import("./class").Prototype<`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }> & import("./class").Constructor<`has${Capitalize<`${K}Target`>}` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) | keyof (`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }) ? { readonly [K_5 in `has${Capitalize<`${K}Target`>}` as K_5]: boolean; } : { -readonly [K_6 in `has${Capitalize<`${K}Target`>}` as K_6]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${K}Target`>}` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) | keyof (`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }) ? { readonly [K_5 in `has${Capitalize<`${K}Target`>}` as K_5]: boolean; } : { -readonly [K_6 in `has${Capitalize<`${K}Target`>}` as K_6]: boolean; }>>;
    uses: typeof BasicController.uses;
}, import("./class").Constructor<{
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
    target<T extends import("./class").Constructor<{
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
    }>, K extends string>(this: T, key: K): import("./mixin").Mix<T, import("./class").Constructor<{
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
    }> & import("./class").Constructor<`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }, any[]> & import("./class").Prototype<`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }> & import("./class").Constructor<`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }, any[]> & import("./class").Prototype<`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }> & import("./class").Constructor<`has${Capitalize<`${K}Target`>}` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) | keyof (`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }) ? { readonly [K_5 in `has${Capitalize<`${K}Target`>}` as K_5]: boolean; } : { -readonly [K_6 in `has${Capitalize<`${K}Target`>}` as K_6]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${K}Target`>}` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) | keyof (`${K}Targets` extends keyof {
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
    } | keyof (`${K}Target` extends keyof {
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
    } ? { readonly [K_1 in keyof {
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
    } & `${K}Target` as K_1]: Element; } : { -readonly [K_2 in `${K}Target` as K_2]: Element; }) ? { readonly [K_3 in `${K}Targets` as K_3]: Element[]; } : { -readonly [K_4 in `${K}Targets` as K_4]: Element[]; }) ? { readonly [K_5 in `has${Capitalize<`${K}Target`>}` as K_5]: boolean; } : { -readonly [K_6 in `has${Capitalize<`${K}Target`>}` as K_6]: boolean; }>>;
    uses: typeof BasicController.uses;
}>>;
//# sourceMappingURL=target_properties.d.ts.map