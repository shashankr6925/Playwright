import {test,expect} from '@playwright/test';

test('Login Test for qa-practice',async({page})=>{

    await page.goto('https://www.qapractice.com/practice-login-form');
    await page.locator('//input[@placeholder="Enter your email"]').fill("user@premiumbank.com");
    await page.locator('//input[@id="login-password"]').fill("Bank@123");
    await page.locator('//button[@id="login-submit"]').click();
    await expect(page.locator('//div[@id="login-success"]')).toBeVisible();
})

