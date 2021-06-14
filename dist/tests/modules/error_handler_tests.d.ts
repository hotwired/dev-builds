import { Controller } from "../..";
declare class ErrorWhileConnectingController extends Controller {
    connect(): void;
}
declare const ErrorHandlerTests_base: import("../../constructor").Constructor<import("../cases/controller_test_case").ControllerTests<ErrorWhileConnectingController>>;
export default class ErrorHandlerTests extends ErrorHandlerTests_base {
    controllerConstructor: typeof ErrorWhileConnectingController;
    setupApplication(): Promise<void>;
    "test errors in connect are thrown and handled by built in logger"(): Promise<void>;
    "test errors in connect are thrown and handled by window.onerror"(): Promise<void>;
}
export {};
//# sourceMappingURL=error_handler_tests.d.ts.map