import BasePage from "../BasePage";
import { Page } from "@playwright/test";

export class CheckboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Methods specific to TextboxPage can be defined here
    checkCheckbox(selector: string, text: string): void {
        const textbox = document.querySelector(selector) as HTMLInputElement;
        if (textbox) {
            textbox.value = text;
        } else {
            console.error(`Textbox with selector "${selector}" not found.`);
        }
    }
}