
import { test, expect } from '@playwright/test';


test('Verify cart total price', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const products = ['Brocolli - 1 Kg', 'Cauliflower - 1 Kg'];
    const prices = [];
    for (const name of products) {
        const product = page.locator('.product').filter({ hasText: name });
        const price = await product.locator('.product-price').textContent();
        prices.push(Number(price.trim()));
        await product.getByRole('button', { name: 'ADD TO CART' }).click();
    }
    console.log('Selected prices:', prices);
    const expectedTotal = prices.reduce((sum, price) => sum + price, 0);
    console.log('Expected total:', expectedTotal);
    await page.locator('.cart-icon').click();
    await page.getByText('PROCEED TO CHECKOUT').click();
    const actualTotal = Number(await page.locator('//span[@class="totAmt"]').textContent());
    console.log('Actual cart total:', actualTotal);
    expect(actualTotal).toBe(expectedTotal);
});
