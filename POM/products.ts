import { type Locator, type Page } from '@playwright/test';

export class Products {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }
}