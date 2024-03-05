import { test, chromium, expect } from "@playwright/test";

test.describe("Login cases", () => {
    test("login with valid credentials", async ({page}) => {
        await page.goto("https://login.salesforce.com");
        await page.locator('#username').fill("manofjoy0506@gmail.com");
        await page.locator('#password').fill("Welcome@123");
        await page.locator('#Login').click();
        await page.waitForLoadState("load");
        const currentURL = page.url();
        expect(currentURL).toContain("salesforce");
    })
}

)