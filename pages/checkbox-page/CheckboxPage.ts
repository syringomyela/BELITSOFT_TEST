import BasePage from "../BasePage";
import { Page, expect, Locator } from "@playwright/test";
import { step } from "../../utils/decorator";

export class CheckboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get directory() {
        return {
            folder: (state: 'open' | 'close') => this.page.locator(`.rc-tree-switcher_${state}`),
            element: this.page.locator('.rc-tree-title'),
        };
    }

    @step("Expanding directory fully")
    async expandAllTree() {
    while (await this.directory.folder('close').count() > 0) {
        await this.directory.folder('close').first().click();
        await this.page.waitForTimeout(50);
        }
    }

    @step("Verifying chosen elements are correct")
    async verifyChosenElements() {
        const expected: string[] = [];
        const actual: string[] = [];
        const formArray = async (locatorArr: Locator[], arr: string[]) => {
            for (const element of locatorArr) {
                const text = (await element.textContent()).replace('.doc', '').toLowerCase();
                arr.push(text.replace(/\s/g, ''));
            }
            arr.sort();
        };
        const expectedElements: Locator[] = await this.directory.element.all();
        await formArray(expectedElements, expected);
        const actualElements: Locator[] = await this.elementId('result').locator('//span').all();
        actualElements.shift();
        await formArray(actualElements, actual);
        expect(expected, 'Expected elements match actual elements').toEqual(actual);
    }
    }