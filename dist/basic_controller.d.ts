import { Constructor } from "./class";
import { Context } from "./context";
import { Mixin, Mix } from "./mixin";
export declare class BasicController {
    static uses<B extends Constructor, T extends B, C extends typeof BasicController>(this: C, mixin: Mixin<B, T>): Mix<C, T>;
    readonly context: Context;
    constructor(context: Context);
    get application(): import("./application").Application;
    get data(): import("./data_map").DataMap;
    get element(): Element;
    get identifier(): string;
    get scope(): import("./scope").Scope;
    initialize(): void;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=basic_controller.d.ts.map