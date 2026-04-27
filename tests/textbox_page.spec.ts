import {test,} from "../utils/fixture";
import testData from "../test-data/testData.json";

test("Fill textboxes", async ({ pages }) => {
    const data = testData.textboxValues;
    await pages.textboxPage.openBasePage();
    await pages.textboxPage.openPage('elements');
    await pages.textboxPage.openPage('text-box');
    await pages.textboxPage.fillTextboxes({
        userName: data.userName,
        userEmail: data.userEmail.correct,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress
    });
    await pages.textboxPage.verifyData({
        name: data.userName,
        email: data.userEmail.correct,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress
    });
});