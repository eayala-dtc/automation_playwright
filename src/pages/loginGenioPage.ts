import { expect, Page, BrowserContext, chromium} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
//import { AlertPopUp } from "../helper/util/test-data/AlertPopUp";

export default class LoginGenioPage {

    private base: PlaywrightWrapper;
    //private alertPopUp : AlertPopUp;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
      //  this.alertPopUp = new AlertPopUp(page);
    }

    private Elements = {
        
        iconinit :  "details-disclosure.header__account" ,
        secondb : "a.button--primary.header__account__login.link",
        //userName: "#RecoverEmail",
        //userPassword: "//input[@id='CustomerPassword']",
        logBtn: "//button[@id='boton-login']"
    }

    async handleLocationPermissionPopup() {
        const context: BrowserContext = this.page.context();
        await context.grantPermissions(['geolocation']);
        await this.page.goto('https://elgeniox.com/');
    }

    async navigateToLoginPage() {
        //await this.base.goto("https://elgeniox.com/account/login?return_url=%2Faccount%3Fview%3Dorders");
        await this.handleLocationPermissionPopup(); // Llama al método para manejar el popup
    }

    async clicloginlink(){
        const selectsec = this.page.locator(this.Elements.iconinit);
        await selectsec.waitFor({ state: 'visible' });
        await selectsec.click();
        await this.page.getByRole('link', {name: 'Iniciar sesión'}).click();
    }

    async enterEmail(email: string) {
        const emailField = await this.page.getByRole('textbox', {name: 'Correo electrónico'})
        await emailField.scrollIntoViewIfNeeded();
        //await this.page.pause();
        await emailField.fill(email);

    }
    async enterPassword(password: string) {
        await this.page.getByRole('textbox', {name: 'Contraseña'}).fill(password);
        //await this.page.getByLabel(this.Elements.userPassword).fill(password); o locator en vez del getbylabel
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.logBtn);
    }
    
    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

   
}

