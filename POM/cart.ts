import { type Locator, type Page } from '@playwright/test';

export class Cart {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }
}