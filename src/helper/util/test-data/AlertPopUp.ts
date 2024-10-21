import { Page } from "@playwright/test";

export class AlertPopUp {
    constructor(private page: Page) {}

    async closePopUp() {
        // Espera a que el popup esté visible
        const popupSelector = "selector_del_popup"; // Cambia este selector según el popup real
        await this.page.waitForSelector(popupSelector, { state: 'visible' });
        if (await this.page.locator(popupSelector).isVisible()) {
            await this.page.locator(popupSelector).click(); // O el método adecuado para cerrarlo
        }
    }
}
