import { BasicController } from "./basic_controller";
import { Constructor } from "./class";
import { Mixin } from "./mixin";
export declare const BlessedValueProperties: Mixin<Constructor<{}, any[]>, {
    new (...args: any[]): {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
    values: ValueDefinitionMap;
    uses: typeof BasicController.uses;
}, Constructor<{
    readonly valueDescriptorMap: ValueDescriptorMap;
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
    readonly valueDescriptorMap: ValueDescriptorMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}> & import("./class").OmitClass<Constructor<{}, any[]>> & import("./class").OmitClass<{
    new (...args: any[]): {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
    values: ValueDefinitionMap;
    uses: typeof BasicController.uses;
}>>;
export declare const ValuePropertiesMacro: Mixin<Constructor<{}, any[]>, {
    new (...args: any[]): {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
    value<T extends any, S extends string, V extends ValueTypeConstant>(this: T, token: S, typeConstant: V): import("./mixin").Mix<T, Constructor<{
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    }> & import("./class").OmitClass<Constructor<{
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    }> & import("./class").OmitClass<Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
            readonly valueDescriptorMap: ValueDescriptorMap;
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
    }>> & Constructor<{ -readonly [K in `${import("./string_helpers").Camelize<S>}Value` as K]: ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<{ -readonly [K in `${import("./string_helpers").Camelize<S>}Value` as K]: ParseValueTypeConstant<V>; }> & Constructor<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }> & Constructor<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }) ? { readonly [K_3 in (keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_4]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }) ? { readonly [K_3 in (keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_4]: boolean; }>>;
    uses: typeof BasicController.uses;
}, Constructor<{
    readonly valueDescriptorMap: ValueDescriptorMap;
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
    readonly valueDescriptorMap: ValueDescriptorMap;
    readonly context: import("./context").Context;
    readonly application: import("./application").Application;
    readonly data: import("./data_map").DataMap;
    readonly element: Element;
    readonly identifier: string;
    readonly scope: import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}> & import("./class").OmitClass<Constructor<{}, any[]>> & import("./class").OmitClass<{
    new (...args: any[]): {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
    value<T extends any, S extends string, V extends ValueTypeConstant>(this: T, token: S, typeConstant: V): import("./mixin").Mix<T, Constructor<{
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    }> & import("./class").OmitClass<Constructor<{
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    }> & import("./class").OmitClass<Constructor<{}, any[]>> & import("./class").OmitClass<{
        new (context: import("./context").Context): {
            readonly valueDescriptorMap: ValueDescriptorMap;
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
    }>> & Constructor<{ -readonly [K in `${import("./string_helpers").Camelize<S>}Value` as K]: ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<{ -readonly [K in `${import("./string_helpers").Camelize<S>}Value` as K]: ParseValueTypeConstant<V>; }> & Constructor<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }, any[]> & import("./class").Prototype<`${import("./string_helpers").Camelize<S>}Value` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }> & Constructor<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }) ? { readonly [K_3 in (keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_4]: boolean; }, any[]> & import("./class").Prototype<`has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` extends keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; }) ? { readonly [K_3 in (keyof {
        readonly valueDescriptorMap: ValueDescriptorMap;
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
        readonly valueDescriptorMap: ValueDescriptorMap;
        readonly context: import("./context").Context;
        readonly application: import("./application").Application;
        readonly data: import("./data_map").DataMap;
        readonly element: Element;
        readonly identifier: string;
        readonly scope: import("./scope").Scope;
        initialize(): void;
        connect(): void;
        disconnect(): void;
    } | `${import("./string_helpers").Camelize<S>}Value` ? { readonly [K_1 in `${import("./string_helpers").Camelize<S>}Value` as K_1]: ParseValueTypeConstant<V>; } : { -readonly [K_2 in `${import("./string_helpers").Camelize<S>}Value` as K_2]: ParseValueTypeConstant<V>; })) & `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_3]: boolean; } : { -readonly [K_4 in `has${Capitalize<`${import("./string_helpers").Camelize<S>}Value`>}` as K_4]: boolean; }>>;
    uses: typeof BasicController.uses;
}>>;
export declare type ValueDescriptor = {
    type: ValueType;
    key: string;
    name: string;
    defaultValue: any;
};
export declare type ValueDescriptorMap = {
    [attributeName: string]: ValueDescriptor;
};
export declare type ValueDefinitionMap = {
    [token: string]: ValueTypeConstant;
};
export declare type ValueDefinitionPair = [string, ValueTypeConstant];
export declare type ValueTypeConstant = typeof Array | typeof Boolean | typeof Number | typeof Object | typeof String;
export declare type ValueType = "array" | "boolean" | "number" | "object" | "string";
export declare type ParseValueTypeConstant<V extends ValueTypeConstant> = V extends typeof Array ? any[] : V extends typeof Boolean ? boolean : V extends typeof Number ? number : V extends typeof Object ? object : V extends typeof String ? string : never;
//# sourceMappingURL=value_properties.d.ts.map