import { test, expect } from '@playwright/test';

test('vegetable names', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
 const vegetable = await page.locator('//h4[@class="product-name"]').allTextContents();

 console.log(vegetable)
});