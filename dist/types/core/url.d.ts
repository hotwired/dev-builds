export declare type Locatable = URL | string;
export declare function expandURL(locatable: Locatable): URL;
export declare function getAnchor(url: URL): string;
export declare function getExtension(url: URL): string;
export declare function isHTML(url: URL): boolean;
export declare function isPrefixedBy(baseURL: URL, url: URL): boolean;
export declare function toCacheKey(url: URL): string;
export declare function urlsAreEqual(left: string, right: string): boolean;
