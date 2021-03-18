export declare type Camelize<S extends string> = S extends `${infer Head}-${infer Tail}` ? `${Head}${Capitalize<Camelize<Tail>>}` : S;
export declare function camelize<S extends string>(value: S): Camelize<S>;
export declare function capitalize<S extends string>(value: S): Capitalize<S>;
export declare function dasherize(value: string): string;
//# sourceMappingURL=string_helpers.d.ts.map