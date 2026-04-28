import {test,} from "../utils/fixture";
import testData from "../test-data/testData.json";

const data = testData.textboxValues;

test.beforeEach(async ({ pages }) => {
    await pages.textboxPage.openBasePage();
    await pages.textboxPage.openPage('elements');
    await pages.textboxPage.openPage('text-box');
});
test("Assert textboxes data output", async ({ pages }) => {
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

test("Assert invalid email error message", async ({ pages }) => {
        await pages.textboxPage.fillTextboxes({
        userName: data.userName,
        userEmail: data.userEmail.incorrect,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress
    });
    await pages.textboxPage.verifyEmailError();
});
