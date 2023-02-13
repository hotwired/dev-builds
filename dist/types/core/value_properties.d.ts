import { Constructor } from "./constructor";
export declare function ValuePropertiesBlessing<T>(constructor: Constructor<T>): PropertyDescriptorMap;
export declare function propertiesForValueDefinitionPair<T>(valueDefinitionPair: ValueDefinitionPair, controller?: string): PropertyDescriptorMap;
export type ValueDescriptor = {
    type: ValueType;
    key: string;
    name: string;
    defaultValue: ValueTypeDefault;
    hasCustomDefaultValue: boolean;
    reader: Reader;
    writer: Writer;
};
export type ValueDescriptorMap = {
    [attributeName: string]: ValueDescriptor;
};
export type ValueDefinitionMap = {
    [token: string]: ValueTypeDefinition;
};
export type ValueDefinitionPair = [string, ValueTypeDefinition];
export type ValueTypeConstant = typeof Array | typeof Boolean | typeof Number | typeof Object | typeof String;
export type ValueTypeDefault = Array<any> | boolean | number | Object | string;
export type ValueTypeObject = Partial<{
    type: ValueTypeConstant;
    default: ValueTypeDefault;
}>;
export type ValueTypeDefinition = ValueTypeConstant | ValueTypeDefault | ValueTypeObject;
export type ValueType = "array" | "boolean" | "number" | "object" | "string";
export declare function parseValueTypeConstant(constant?: ValueTypeConstant): "object" | "string" | "number" | "array" | "boolean" | undefined;
export declare function parseValueTypeDefault(defaultValue?: ValueTypeDefault): "object" | "string" | "number" | "array" | "boolean" | undefined;
type ValueTypeObjectPayload = {
    controller?: string;
    token: string;
    typeObject: ValueTypeObject;
};
export declare function parseValueTypeObject(payload: ValueTypeObjectPayload): "object" | "string" | "number" | "array" | "boolean" | undefined;
type ValueTypeDefinitionPayload = {
    controller?: string;
    token: string;
    typeDefinition: ValueTypeDefinition;
};
export declare function parseValueTypeDefinition(payload: ValueTypeDefinitionPayload): ValueType;
export declare function defaultValueForDefinition(typeDefinition: ValueTypeDefinition): ValueTypeDefault;
type Reader = (value: string) => any;
type Writer = (value: any) => string;
export {};
