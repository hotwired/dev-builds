import { FrameElement } from "../../elements/frame_element";
import { Renderer } from "../renderer";
export declare class FrameRenderer extends Renderer<FrameElement> {
    get shouldRender(): boolean;
    render(): Promise<void>;
    loadFrameElement(): void;
    scrollFrameIntoView(): boolean;
    focusFirstAutofocusableElement(): boolean;
    get id(): string;
    get firstAutofocusableElement(): HTMLElement | null;
}
