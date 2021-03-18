import { TargetController } from "../controllers/target_controller";
declare const LegacyTargetTests_base: import("../..").Constructor<import("../cases/controller_test_case").ControllerTests<TargetController>, any[]>;
export default class LegacyTargetTests extends LegacyTargetTests_base {
    fixtureHTML: string;
    warningCount: number;
    setupApplication(): Promise<void>;
    "test TargetSet#find"(): void;
    "test TargetSet#find prefers scoped target attributes"(): void;
    "test TargetSet#findAll"(): void;
    "test TargetSet#findAll prioritizes scoped target attributes"(): void;
    "test TargetSet#findAll with multiple arguments"(): void;
    "test TargetSet#has"(): void;
    "test TargetSet#find ignores child controller targets"(): void;
    "test linked target properties"(): void;
    "test inherited linked target properties"(): void;
    "test singular linked target property throws an error when no target is found"(): void;
}
export {};
//# sourceMappingURL=legacy_target_tests.d.ts.map