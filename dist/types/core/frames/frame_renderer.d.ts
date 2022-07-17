import { FrameElement } from "../../elements/frame_element";
import { Renderer } from "../renderer";
import { Snapshot } from "../snapshot";
export interface FrameRendererDelegate {
    frameContentsExtracted(fragment: DocumentFragment): void;
}
export declare class FrameRenderer extends Renderer<FrameElement> {
    private readonly delegate;
    constructor(delegate: FrameRendererDelegate, currentSnapshot: Snapshot<FrameElement>, newSnapshot: Snapshot<FrameElement>, isPreview: boolean, willRender?: boolean);
    get shouldRender(): boolean;
    render(): Promise<void>;
    loadFrameElement(): void;
    scrollFrameIntoView(): boolean;
    activateScriptElements(): void;
    get newScriptElements(): NodeListOf<HTMLScriptElement>;
}
