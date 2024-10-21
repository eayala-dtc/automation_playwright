import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, Browser, expect, Page,  } from "@playwright/test"
import { fixture } from "../../hooks/pageFixture"
import * as dotenv from 'dotenv';
dotenv.config();
setDefaultTimeout(60 * 1000 * 2);

let browser: Browser;
let page: Page;

Given('User navigates to the applications', async function () {
    //await fixture.page.goto(process.env.BASEURL);
    browser =  await chromium.launch({headless: false }); 
    page = await browser.newPage();
    await page.goto("https://bookcart.azurewebsites.net/");
});

Given('User click on the login links', async function () {
    const loginLink = fixture.page.getByRole('button', { name: 'Login' })
    try {
        await loginLink.waitFor({ state: 'visible', timeout: 60000 });
        await loginLink.click();
    } catch (error) {
        console.error("Error clicking on the login link:", error);
    }
    

});

Given('User enter the usernames as {string}', async function (username) {
    await fixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the passwords as {string}', async function (password) {
    await fixture.page.locator("input[formcontrolname='password']").type(password);

});

When('User click on the login buttons', async function () {
    await fixture.page.locator("button[color='primary']").click();
    await fixture.page.waitForLoadState();
    //pageFixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);

});

Then('Login should be successs', async function () {
    const user = await fixture.page.locator("//button[contains(@class, 'mat-focus-indicator mat-menu-trigger')]//span[1]");
    await expect(user).toBeVisible();
    const userName = await user.textContent();
    console.log("Username: " + user);
});

//When ('Login should fail', async function (){
  // const failureMessage = await pageFixture.page.locator("mat-error[role='alert']");
   //await expect(failureMessage).toBeVisible();
//});
