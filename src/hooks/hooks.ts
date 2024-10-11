import { Before, After, BeforeAll, AfterAll, Status, ITestCaseHookParameter } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { Pickle } from "@cucumber/messages";
import { invokeBrowser } from "../../src/helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
const fs = require("fs-extra");  

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    
    const page = await context.newPage();
    fixture.page = page;
    /*await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });*/
    
});

/*Before({ tags: "@auth" }, async function ({pickle}: ITestCaseHookParameter) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    
    const page = await context.newPage();
    fixture.page = page;
});*/

//AfterStep(async function (this: any, {pickle, result}: ITestCaseHookParameter) {
  //  const scenarioName = pickle.name; // Obtener el nombre del escenario
    //    const img = await fixture.page.screenshot({ path: `../Automation_Web/test-result/screenshots/${scenarioName}.png`, type: "png" })
      //  await this.attach(img, "image/png");

//});

After(async function (this: any, { pickle, result }: ITestCaseHookParameter) {
   if (result?.status === Status.FAILED) {
        console.log(result?.status);
         //Screenshot
        const scenarioName = pickle.name; // Obtener el nombre del escenario
        const img = await fixture.page.screenshot({ path: `../../test-results/screenshots/${scenarioName}.png`, type: "png" });
        await this.attach(img, "image/png");
    }
    await fixture.page.close();
    await context.close();
});

/*After(async function ({ pickle, result }) {
    let videoPath: string; 
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == Status.PASSED) {
            const scenarioName = pickle.name; // Obtener el nombre del escenario
            img = await fixture.page.screenshot(
                { path: `../Automation_Web/test-results/screenshots/${scenarioName}.png`, type: "png" });
            //videoPath = await fixture.page.video().path();
        }
        await context.tracing.stop({ path: path });
        await fixture.page.close();
        await context.close();
        if(result?.status == Status.PASSED){
            await this.attach(
                img, "image/png"
            );
            await this.attach(
                fs.readFileSync(videoPath),
                'video/webm'
            );
            const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');
        }
        
});*/

AfterAll(async function () {
    await browser.close();
})

