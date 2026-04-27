import { test as base } from '@playwright/test';
import {PageFactory} from '../pages/PageFactory.js';


export const test = base.extend<{
  pages: PageFactory;
}>({
  pages: async ({ page }, use) => {
    const pages = new PageFactory(page);
    await use(pages);
  },
});