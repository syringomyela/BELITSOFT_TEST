import BasePage from "../BasePage";
import testData from "../../test-data/testData.json";
import { Page, expect } from "@playwright/test";
import { step } from "../../utils/decorator";

export class TextboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    @step("Filling textboxes")
    async fillTextboxes(data: Record<string, string>) {
        for (const [key, value] of Object.entries(data)) {
            await this.fillTextbox(this.elementId(key), value);
        }

        await this.elementId("submit").click();
    }

    @step("Verifying data")
    async verifyData(expected: Record<string, string>) {
        const result = this.elementId("output");

        for (const [key, value] of Object.entries(expected)) {
            await expect(this.elementId(key, result)).toContainText(value);
        }
    }
}