import { ActionEvent } from "../../action_event";
import { Controller } from "../../controller";
export declare type ActionLogEntry = {
    name: string;
    controller: Controller;
    identifier: string;
    eventType: string;
    currentTarget: EventTarget | null;
    params: {
        [key: string]: any;
    };
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
    log(event: ActionEvent): void;
    log2(event: ActionEvent): void;
    log3(event: ActionEvent): void;
    logPassive(event: ActionEvent): void;
    stop(event: ActionEvent): void;
    get actionLog(): ActionLogEntry[];
    private recordAction;
}
//# sourceMappingURL=log_controller.d.ts.map