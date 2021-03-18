import { Class, Constructor, OmitClass } from "./class";
export declare class Mixin<AllowedBase extends Constructor = Constructor<{}>, Extended extends AllowedBase = AllowedBase, Derived extends Constructor = Mix<AllowedBase, Extended>> {
    private readonly mixInto;
    static define<AllowedBase extends Constructor = Constructor<{}>, Extended extends AllowedBase = AllowedBase>(mixInto: MixInto<AllowedBase, Extended>): Mixin<AllowedBase, Extended>;
    static forConstructor<C extends Constructor>(constructor: C): Mixin<C, C, Mix<C, C>>;
    static forInterface<I>(): Mixin<I extends Constructor<any, any[]> ? I : Constructor<I, any[]>, I extends Constructor<any, any[]> ? I : Constructor<I, any[]>, Mix<I extends Constructor<any, any[]> ? I : Constructor<I, any[]>, I extends Constructor<any, any[]> ? I : Constructor<I, any[]>>>;
    static forMixin<M extends Mixin>(mixin: M): Mixin<DerivedType<M>, DerivedType<M>, Mix<DerivedType<M>, DerivedType<M>>>;
    constructor(mixInto: MixInto<AllowedBase, Extended>);
    extends<ActualBase extends AllowedBase>(base: ActualBase): Mix<ActualBase, Extended>;
    define<Defined extends Derived>(mixInto: MixInto<Derived, Defined>): Mixin<Constructor<{}, any[]>, Defined, Defined extends Constructor<any, any[]> ? Defined extends Constructor<infer TI, any[]> ? Constructor<{} & TI, any[]> & import("./class").Prototype<{} & TI> & OmitClass<Constructor<{}, any[]>> & OmitClass<Defined> : never : Constructor<{} & Defined, any[]> & import("./class").Prototype<{} & Defined> & OmitClass<Constructor<{}, any[]>>>;
    defineGetter<N extends string, V>(name: N, get: (this: InstanceType<Extended>) => V): Mixin<AllowedBase, MixReadonlyProperty<Extended, N, V>>;
    defineSetter<N extends string, V>(name: N, set: (this: InstanceType<Extended>, value: V) => void): Mixin<AllowedBase, MixWritableProperty<Extended, N, V>>;
    defineValue<N extends string, V>(name: N, value: V): Mixin<AllowedBase, MixReadonlyProperty<Extended, N, V>>;
    defineMethod<N extends string, M extends (this: InstanceType<Extended>, ...args: A) => V, A extends unknown[], V>(name: N, method: M): Mixin<AllowedBase, MixReadonlyProperty<Extended, N, M>>;
    private defineProperty;
}
export declare type MixInto<AllowedBase extends Constructor, Extended extends Constructor> = (base: AllowedBase) => Extended;
export declare type Mix<B, T> = B extends Constructor ? T extends Constructor ? MixConstructorAndConstructor<B, T> : MixConstructorAndProperties<B, T> : MixPropertiesAndProperties<B, T>;
export declare type DerivedType<M extends Mixin> = M extends Mixin<infer AllowedBase, infer Extended> ? Mix<AllowedBase, Extended> : never;
declare type MixConstructorAndConstructor<B extends Constructor, T extends Constructor> = B extends Constructor<infer BI, infer A> ? T extends Constructor<infer TI, A> ? Class<BI & TI, A> & OmitClass<B> & OmitClass<T> : never : never;
declare type MixConstructorAndProperties<B extends Constructor, T> = B extends Constructor<infer BI, infer A> ? Class<BI & T, A> & OmitClass<B> : never;
declare type MixPropertiesAndProperties<B, T> = B & T;
declare type MixReadonlyProperty<B extends Constructor, N extends string, V> = B & Class<N extends keyof InstanceType<B> ? {
    readonly [K in N as K]: V;
} : {
    -readonly [K in N as K]: V;
}>;
declare type MixWritableProperty<B extends Constructor, N extends string, V> = B & Class<{
    -readonly [K in N as K]: V;
}>;
export {};
//# sourceMappingURL=mixin.d.ts.map