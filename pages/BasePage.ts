import { Locator, Page } from "@playwright/test";
import { step } from "../utils/decorator";
import { TextboxFields } from "../utils/types";

class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

        @step("Fill $0 textboxes with '$1' string")
        async fillTextbox(field: Locator, data: string) {
            await field.fill(data);
        }
}

export default BasePage;