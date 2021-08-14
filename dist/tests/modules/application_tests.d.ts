import { ApplicationTestCase } from "../cases/application_test_case";
import { LogController } from "../controllers/log_controller";
export default class ApplicationTests extends ApplicationTestCase {
    fixtureHTML: string;
    private definitions;
    "test Application#register"(): Promise<void>;
    "test Application#load"(): void;
    "test Application#unload"(): void;
    "test reloading an already-loaded module"(): void;
    get controllers(): LogController[];
}
//# sourceMappingURL=application_tests.d.ts.map