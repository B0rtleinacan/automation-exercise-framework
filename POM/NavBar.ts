import { type Locator, type Page } from '@playwright/test';

export class NavBar {
    constructor(private readonly page: Page) {}

    async gotoProducts() {
        await this.page.getByRole('link', { name: 'Products' }).click();
    }

    async gotoCart() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
    }

    async gotoSignupLogin() {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
    }

    async gotoContactUs() {
        await this.page.getByRole('link', { name: 'Contact us' }).click();
    }
}