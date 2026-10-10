import { chromium, Browser, Page } from '@playwright/test';

export class CommonFun {

    static browser: Browser;
    static page: Page;

    // Open browser
    static async openbrowser() {
        CommonFun.browser = await chromium.launch({
            headless: false
        });

        const context = await CommonFun.browser.newContext();
        CommonFun.page = await context.newPage();

        console.log('Browser opened');
    }

    // Open URL
    static async openURL(url: string) {
        await CommonFun.page.goto(url);

        console.log('Application opened');
    }

    // Wait
    static async waitsmt() {
        await CommonFun.page.waitForTimeout(2000);

        console.log('Waiting period');
    }

    // Close browser
    static async closebrowser() {
        await CommonFun.browser.close();

        console.log('Browser closed');
    }
}