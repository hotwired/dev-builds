export declare type Locatable = URL | string;
export declare function expandURL(locatable: Locatable): URL;
export declare function getAnchor(url: URL): string | undefined;
export declare function getExtension(url: URL): string;
export declare function isHTML(url: URL): boolean;
export declare function isPrefixedBy(baseURL: URL, url: URL): boolean;
export declare function getRequestURL(url: URL): string;
export declare function toCacheKey(url: URL): string;
