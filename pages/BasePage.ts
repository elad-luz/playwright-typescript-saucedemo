import { Page, test, expect, Locator } from "@playwright/test";

export abstract class BasePage { // parent to all pages

    constructor(protected page: Page) {
    }

    // validation method on URL
    public async validatePageUrl(url: string) {
        console.log('validate url');
        await test.step(`validate current url is: ${url}`, async () => {
            await expect(this.page).toHaveURL(url, { timeout: 500 });
            console.log('url validated')
        });
    }

    // validation method on Element's Text (needing input of: element-locator & expected text)
    public async validateElementsText(element: Locator, expetedText: string) {
        console.log('validate text');
        await test.step(`validate current text is: ${expetedText}`, async () => {
            await expect(element).toContainText(expetedText);
            console.log('text validated')
        });
    }

    // sleep
    public async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}