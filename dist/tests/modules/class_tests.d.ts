import { ClassController } from "../controllers/class_controller";
declare const ValueTests_base: import("../../constructor").Constructor<import("../cases/controller_test_case").ControllerTests<ClassController>>;
export default class ValueTests extends ValueTests_base {
    fixtureHTML: string;
    "test accessing a class property"(): void;
    "test accessing a missing class property throws an error"(): void;
    "test classes must be scoped by identifier"(): void;
}
export {};
//# sourceMappingURL=class_tests.d.ts.map