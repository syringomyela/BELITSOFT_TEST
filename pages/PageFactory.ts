import { Page } from "@playwright/test";
import {TextboxPage} from "./text-page/TextboxPage";
import {CheckboxPage} from "./checkbox-page/CheckboxPage";

export class PageFactory {
    readonly textboxPage: TextboxPage;
    readonly checkboxPage: CheckboxPage;
    constructor(page: Page) {
        this.textboxPage = new TextboxPage(page);
        this.checkboxPage = new CheckboxPage(page);
    }
}