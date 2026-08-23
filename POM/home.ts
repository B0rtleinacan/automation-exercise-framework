import { type Locator, type Page } from '@playwright/test';

export class Home {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }
}