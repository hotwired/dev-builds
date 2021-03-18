import { BasicController } from "./basic_controller";
import { Mixin } from "./mixin";
export declare const BlessedClassProperties: Mixin<import("./class").Constructor<{}, any[]>, {
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
}, import("./class").Constructor<{
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
}, any[]> & import("./class").Prototype<{
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
}> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
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
}>>;
export declare const ClassPropertiesMacro: Mixin<import("./class").Constructor<{}, any[]>, {
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
    class<T extends import("./class").Constructor<BasicController, [context: import("./context").Context]> & import("./class").Prototype<BasicController> & import("./class").OmitClass<typeof BasicController>, K extends string>(this: T, key: K): import("./mixin").Mix<T, import("./class").Constructor<{
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
}, import("./class").Constructor<{
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
}, any[]> & import("./class").Prototype<{
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
}> & import("./class").OmitClass<import("./class").Constructor<{}, any[]>> & import("./class").OmitClass<{
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
    class<T extends import("./class").Constructor<BasicController, [context: import("./context").Context]> & import("./class").Prototype<BasicController> & import("./class").OmitClass<typeof BasicController>, K extends string>(this: T, key: K): import("./mixin").Mix<T, import("./class").Constructor<{
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
}>>;
//# sourceMappingURL=class_properties.d.ts.map