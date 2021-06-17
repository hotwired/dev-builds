export declare class RequestInterceptor {
    static interceptor?: (request: any) => void;
    static register(interceptor: (request: any) => void): void;
    static get(): ((request: any) => void) | undefined;
    static reset(): void;
}
