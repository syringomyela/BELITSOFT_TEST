import BasePage from "../BasePage";
import { Page, expect, Locator } from "@playwright/test";
import { step } from "../../utils/decorator";

export class CheckboxPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get directory() {
        return {
            folder: (state: 'open ' | 'close') => this.page.locator(`.rc-tree-switcher_${state}`),
            element: this.page.locator('.rc-tree-title'),
        };
    }

    @step("Expanding directory")
    async expandAllTree() {
    while (await this.directory.folder('close').count() > 0) {
        await this.directory.folder('close').first().click();
        await this.page.waitForTimeout(50);
        }
    }

    @step("Verifying chosen elements")
    async verifyChosenElements() {
        const expected: string[] = [];
        const actual: string[] = [];
        const expectedElements: Locator[] = await this.directory.element.all();
        for (const element of expectedElements) {
            const text = (await element.textContent()).replace('.doc', '').toLowerCase();
            expected.push(text);
        }
        ;
        const actualElements: Locator[] = await this.elementId('result').locator('//span').all();
        actualElements.shift();
        for (const element of actualElements) {
            const text = (await element.textContent()).replace('.doc', '').toLowerCase();
            actual.push(text);
        }
        for (let i = 0; i < actual.length; i++) {
            expect(expected.includes(actual[i].replace(/\s/g, '')), `Expected '${expected[i]}' to be in the list of expected elements`).toBe(true);
        }

        //expect(JSON.stringify(actual.sort())).toEqual(JSON.stringify(expected.sort()));
    }
    }