export declare type Class<I = any, A extends any[] = any[]> = Constructor<I, A> & Prototype<I>;
export declare type Constructor<I = any, A extends any[] = any[]> = new (...args: A) => I;
export declare type Prototype<I = any> = {
    prototype: I;
};
export declare type OmitClass<C extends Constructor> = OmitConstructor<OmitPrototype<C>>;
export declare type OmitConstructor<A> = Pick<A, keyof A>;
export declare type OmitPrototype<A> = Omit<A, "prototype">;
export declare function getAncestorsForConstructor<T>(constructor: Constructor<T>): Constructor<{}, any[]>[];
//# sourceMappingURL=class.d.ts.map