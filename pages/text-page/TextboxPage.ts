import BasePage from "../BasePage";
import { TextboxFields } from "../../utils/types";
import { Page } from "@playwright/test";
import { step } from "../../utils/decorator";

export class TextboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    textField(id: string) {
        return this.page.getByTestId(id);
    }

    async fillTextboxes(field: TextboxFields, data: string) {
        
    }
}