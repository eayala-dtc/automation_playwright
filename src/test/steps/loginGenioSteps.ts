import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"

import * as dotenv from 'dotenv';
import { page } from "../../hooks/hooks";
import LoginGenioPage from "../../pages/LoginGenioPage";

dotenv.config();

let loginPage : LoginGenioPage;

//setDefaultTimeout(1000*60*2);

Given('User navigates to the Genio_webpage', async function () {
    await page.goto('https://egx-development.uc.r.appspot.com/es');
});

Given('User click on the login link', async function () {
    await page.locator(`//span[normalize-space(text())='Iniciar Sesión']`).click();
    loginPage = new LoginGenioPage(page);
});

Given('User enter the email as {string}', async function (email) {
    await loginPage.enterEmail(email);
});

Given('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
});

When('User click on the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('Login should be success', async function () {
    await loginPage.checkSuccessLogin();
});