import {test,} from "../utils/fixture";

test("Fill checkboxes", async ({ pages }) => {
    await pages.checkboxPage.openBasePage();
    await pages.checkboxPage.openPage('elements');
    await pages.checkboxPage.openPage('checkbox');
    await pages.checkboxPage.setCheckbox(pages.checkboxPage.elementLabel("Select Home"), true);
    await pages.checkboxPage.expandAllTree();
    await pages.checkboxPage.verifyChosenElements();
});