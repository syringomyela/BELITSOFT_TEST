import { Locator, Page } from "@playwright/test";
import { step } from "../utils/decorator";
import { elementTabs, Tabs, TextboxFields } from "../utils/types";

class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elementId(id: string, embedded?: Locator): Locator {
        return embedded ? embedded.getByTestId(id) : this.page.getByTestId(id);
    }

    elementLabel(label: string, embedded?: Locator): Locator {
        return embedded ? embedded.getByLabel(label) : this.page.getByLabel(label);
    }

    @step("Opening base page")
    async openBasePage() {
        await this.page.goto("/");
        await this.page.waitForLoadState("load");
    }

    @step("Opening $0 tab via UI")
    async openPage(tab: Tabs | elementTabs) {
        await this.page.locator(`//a[@href="/${tab}"]`).click();
        await this.page.waitForLoadState("load");
    }

    @step("Filling $0 textbox with '$1' string")
    async fillTextbox(field: Locator, data: string) {
        await field.fill(data);
    }

    @step("Setting checkbox to $1 state")
    async setCheckbox(field: Locator, checked: boolean) {
        await field.setChecked(checked);
    }
}

export default BasePage;