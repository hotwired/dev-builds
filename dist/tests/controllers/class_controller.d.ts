import { Controller } from "../../controller";
declare class BaseClassController extends Controller {
    static classes: string[];
    readonly activeClass: string;
    readonly hasActiveClass: boolean;
}
export declare class ClassController extends BaseClassController {
    static classes: string[];
    readonly hasEnabledClass: boolean;
    readonly enabledClass: string;
    readonly loadingClass: string;
}
export {};
//# sourceMappingURL=class_controller.d.ts.map