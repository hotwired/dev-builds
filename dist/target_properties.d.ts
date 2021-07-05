import { Constructor } from "./constructor";
export declare function TargetPropertiesBlessing<T>(constructor: Constructor<T>): PropertyDescriptorMap;
export declare type TargetDescriptor = {
    identifier: string | null;
    target: string | null;
    attribute: string;
    legacy: Boolean;
    element: Element;
};
//# sourceMappingURL=target_properties.d.ts.map