import { AttributeObserver, AttributeObserverDelegate } from "../../attribute_observer";
import { ObserverTestCase } from "../observer_test_case";
export default class AttributeObserverTests extends ObserverTestCase implements AttributeObserverDelegate {
    attributeName: string;
    fixtureHTML: string;
    observer: AttributeObserver;
    "test elementMatchedAttribute"(): Promise<void>;
    "test elementAttributeValueChanged"(): Promise<void>;
    "test elementUnmatchedAttribute"(): Promise<void>;
    "test observes attribute changes to child elements"(): Promise<void>;
    "test ignores other attributes"(): Promise<void>;
    "test observes removal of nested matched element HTML"(): Promise<void>;
    "test ignores synchronously disconnected elements"(): Promise<void>;
    "test ignores synchronously moved elements"(): Promise<void>;
    get outerElement(): Element;
    get innerElement(): Element;
    elementMatchedAttribute(element: Element, attributeName: string): void;
    elementAttributeValueChanged(element: Element, attributeName: string): void;
    elementUnmatchedAttribute(element: Element, attributeName: string): void;
}
//# sourceMappingURL=attribute_observer_tests.d.ts.map