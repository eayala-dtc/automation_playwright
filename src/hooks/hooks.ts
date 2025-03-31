import { Before, After } from "@cucumber/cucumber";
import { Browser, Page } from "@playwright/test";
import { invokeBrowser } from "../../src/helper/browsers/browserManager";

let browser: Browser;
let page: Page;

Before(async function () {
    //getEnv();
    browser = await invokeBrowser();
    page = await browser.newPage();
});

After(async function () {
    await page.close();
    await browser.close();
})

export { page };