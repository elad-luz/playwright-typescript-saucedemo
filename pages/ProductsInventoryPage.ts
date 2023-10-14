import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductsInventoryPage extends BasePage {

    private pageTitleElement: Locator; // the element itself (not the title)
    private productBackpack: Locator;
    private productBikeLight: Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitleElement = this.page.locator('[class="title"]');
        this.productBackpack = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.productBikeLight = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    public async validateTitle(title: string) {
        console.log('validating title');
        await this.validateElementsText(this.pageTitleElement, title);
    }

    // TODO - combine the methods & refine !!!
    public async addProductBackpack() {
        console.log('adding productBackpack to cart');
        await this.productBackpack.click();
    }
    public async addProductBikeLight() {
        console.log('adding productBikeLight to cart');
        await this.productBikeLight.click();
    }
}