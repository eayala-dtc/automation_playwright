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
        
        iconinit :  "div.header_info__account" ,
        logBtn:"button.auth_login_form__button.p-button.p-component"
    }

    async handleLocationPermissionPopup() {
        //const context: BrowserContext = this.page.context();
        //await context.grantPermissions(['geolocation']);
        await this.page.goto('https://egx-development.uc.r.appspot.com/es');
    }

    async navigateToLoginPage() {
        await this.handleLocationPermissionPopup(); // Llama al método para manejar el popup
    }

    async clicloginlink(){
        const selectsec = this.page.locator(this.Elements.iconinit);
        await selectsec.waitFor({ state: 'visible' });
        await selectsec.click();
    }

    async enterEmail(email: string) {
        const emailField = await this.page.getByRole('textbox', {name: 'Introduce tu e-mail'})
        await emailField.scrollIntoViewIfNeeded();
        await emailField.fill(email);

    }
    async enterPassword(password: string) {
        await this.page.getByRole('textbox', {name: 'Introduce tu contraseña'}).fill(password);
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

