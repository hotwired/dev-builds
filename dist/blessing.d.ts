import { Constructor } from "./class";
import { MixInto } from "./mixin";
declare type Blessing<B extends Constructor = Constructor, C extends B = B> = MixInto<B, C>;
export declare function bless<C extends Constructor>(constructor: C): C;
export declare function blessed<C extends Constructor>(constructor: C, blessing: Blessing<C>): C;
export {};
//# sourceMappingURL=blessing.d.ts.map