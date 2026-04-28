import BasePage from "../BasePage";
import testData from "../../test-data/testData.json";
import { Page, expect } from "@playwright/test";
import { step } from "../../utils/decorator";

export class TextboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get elements() {
        return {
            submitButton: this.elementId("submit"),
            outputField: this.elementId("output"),
        }
    };

    @step("Filling textboxes on the page")
    async fillTextboxes(data: Record<string, string>) {
        for (const [key, value] of Object.entries(data)) {
            await this.fillTextbox(this.elementId(key), value);
        }

        await this.elements.submitButton.click();
    }

    @step("Verifying data presented in output field")
    async verifyData(expected: Record<string, string>) {
        const result = this.elementId("output");

        for (const [key, value] of Object.entries(expected)) {
            await expect(this.elementId(key, this.elements.outputField)).toContainText(value);
        }
    }

    @step("Verifying invalid email error message")
    async verifyEmailError() {
        await this.verifyErrorBorder(this.elementId("userEmail"));
        await expect(this.elements.outputField, "Output field is not attached").toBeEmpty();
    }
}