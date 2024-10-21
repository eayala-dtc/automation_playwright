import { Given, When, Then } from "@cucumber/cucumber"
import  LoginGenioPage  from "../../pages/loginGenioPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
//import * as data from "../../helper/util/test-data/registerUser.json";
import * as dotenv from 'dotenv';
import { findSourceMap } from "module";
dotenv.config();
let loginPage : LoginGenioPage;
let assert : Assert;


Given('User navigates to the Genio_webpage', async function () {
    loginPage = new LoginGenioPage(fixture.page);
        assert = new Assert(fixture.page);
        await loginPage.navigateToLoginPage();
});

Given('User click on the login link', async function () {
    await loginPage.clicloginlink();
});

Given('User enter the email as {string}', async function (email) {
    await loginPage.enterEmail(email);
});

Given('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);

});

When('User click on the login button', async function () {
    await loginPage.clickLoginButton;

});

Then('Login should be success', async function () {
    const user = await assert.assertURL("https://elgeniox.com/account/login?return_url=%2Faccount%3Fview%3Dorders");

});

//When ('Login should fail', async function (){
  // const failureMessage = await pageFixture.page.locator("mat-error[role='alert']");
   //await expect(failureMessage).toBeVisible();
//});
