import { TargetController } from "../controllers/target_controller";
declare const TargetTests_base: import("../../constructor").Constructor<import("../cases/controller_test_case").ControllerTests<TargetController>>;
export default class TargetTests extends TargetTests_base {
    fixtureHTML: string;
    "test TargetSet#find"(): void;
    "test TargetSet#findAll"(): void;
    "test TargetSet#findAll with multiple arguments"(): void;
    "test TargetSet#has"(): void;
    "test TargetSet#find ignores child controller targets"(): void;
    "test linked target properties"(): void;
    "test inherited linked target properties"(): void;
    "test singular linked target property throws an error when no target is found"(): void;
}
export {};
//# sourceMappingURL=target_tests.d.ts.map