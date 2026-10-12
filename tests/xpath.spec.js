import {test,expect} from '@playwright/test';

test('Using attribute',async({page})=>{

    await page.goto('https://www.qapractice.com/practice-login-form');
    await page.locator('//input[@placeholder="Enter your email"]').fill("user@premiumbank.com");
    await page.locator('//input[@id="login-password"]').fill("Bank@123");
    await page.locator('//button[@id="login-submit"]').click();
    await expect(page.locator('//div[@id="login-success"]')).toBeVisible();
})


test("Using text", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    await page.locator('//button[text()=" Login "]').click();
    await page.locator('//span[text()="Recruitment"]').click();
})

test("Using contains", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    await page.locator('//button[text()=" Login "]').click();
    await expect(page.locator('//p[contains(.,"Time at")]')).toBeVisible();
})
