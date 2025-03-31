import { Page, Locator, expect } from "@playwright/test";

export default class LoginGenioPage {
    
    private emailTextBox: Locator;
    private passwordTextBox: Locator;
    private loginButton: Locator;
    private miCuentaText: Locator;

    constructor(private page: Page) {
        this.emailTextBox = page.getByRole('textbox', { name: 'Introduce tu e-mail' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Introduce tu contraseña' });
        this.loginButton = page.getByRole('button', { name: 'Ingresar' });
        this.miCuentaText = page.getByText('Ver mi cuenta');
    }

    async enterEmail(email: string) {
        await this.emailTextBox.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordTextBox.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
    
    async loginUser(email: string, password: string) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    async checkSuccessLogin() {
        try {
            await expect(this.miCuentaText).toBeVisible();
        } catch (error) {
            console.log("Error: " + error);
        }
    }
}