import { TurboDriveTestCase } from "../helpers/turbo_drive_test_case";
export declare class FormSubmissionTests extends TurboDriveTestCase {
    setup(): Promise<void>;
    "test standard form submission renders a progress bar"(): Promise<void>;
    "test standard form submission does not render a progress bar before expiring the delay"(): Promise<void>;
    "test standard form submission with redirect response"(): Promise<void>;
    "test standard GET form submission"(): Promise<void>;
    "test standard GET form submission appending keys"(): Promise<void>;
    "test standard form submission with empty created response"(): Promise<void>;
    "test standard form submission with empty no-content response"(): Promise<void>;
    "test standard POST form submission with multipart/form-data enctype"(): Promise<void>;
    "test standard GET form submission ignores enctype"(): Promise<void>;
    "test standard POST form submission without an enctype"(): Promise<void>;
    "test no-action form submission with single parameter"(): Promise<void>;
    "test no-action form submission with multiple parameters"(): Promise<void>;
    "test no-action form submission submitter parameters"(): Promise<void>;
    "test input named action with no action attribute"(): Promise<void>;
    "test input named action with action attribute"(): Promise<void>;
    "test invalid form submission with unprocessable entity status"(): Promise<void>;
    "test invalid form submission with long form"(): Promise<void>;
    "test invalid form submission with server error status"(): Promise<void>;
    "test submitter form submission reads button attributes"(): Promise<void>;
    "test submitter POST form submission with multipart/form-data formenctype"(): Promise<void>;
    "test frame form submission with redirect response"(): Promise<void>;
    "test frame form submission toggles the ancestor frame's [busy] attribute"(): Promise<void>;
    "test frame form submission toggles the target frame's [busy] attribute"(): Promise<void>;
    "test frame form submission with empty created response"(): Promise<void>;
    "test frame form submission with empty no-content response"(): Promise<void>;
    "test frame form submission within a frame submits the Turbo-Frame header"(): Promise<void>;
    "test invalid frame form submission with unprocessable entity status"(): Promise<void>;
    "test invalid frame form submission with internal server errror status"(): Promise<void>;
    "test frame form submission with stream response"(): Promise<void>;
    "test frame form submission with HTTP verb other than GET or POST"(): Promise<void>;
    "test frame form submission with [data-turbo=false] on the form"(): Promise<void>;
    "test frame form submission with [data-turbo=false] on the submitter"(): Promise<void>;
    "test form submission with [data-turbo=false] on the form"(): Promise<void>;
    "test form submission with [data-turbo=false] on the submitter"(): Promise<void>;
    "test form submission skipped within method=dialog"(): Promise<void>;
    "test form submission skipped with submitter formmethod=dialog"(): Promise<void>;
    "test form submission targets disabled frame"(): Promise<void>;
    "test form submission targeting a frame submits the Turbo-Frame header"(): Promise<void>;
    "test link method form submission inside frame"(): Promise<void>;
    "test link method form submission outside frame"(): Promise<void>;
    "test link method form submission inside form"(): Promise<void>;
    get formSubmitted(): Promise<boolean>;
}
