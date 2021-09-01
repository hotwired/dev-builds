export interface Logger {
    log(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
    groupCollapsed(groupTitle?: string, ...args: any[]): void;
    groupEnd(): void;
}
//# sourceMappingURL=logger.d.ts.map