import { Controller } from "../../controller";
export declare type ActionLogEntry = {
    name: string;
    controller: Controller;
    identifier: string;
    eventType: string;
    currentTarget: EventTarget | null;
    defaultPrevented: boolean;
    passive: boolean;
};
export declare class LogController extends Controller {
    static actionLog: ActionLogEntry[];
    initializeCount: number;
    connectCount: number;
    disconnectCount: number;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    log(event: Event): void;
    log2(event: Event): void;
    log3(event: Event): void;
    logPassive(event: Event): void;
    stop(event: Event): void;
    get actionLog(): ActionLogEntry[];
    private recordAction;
}
//# sourceMappingURL=log_controller.d.ts.map