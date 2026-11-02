import { test, expect } from '@playwright/test';

test('prices', async ({ page }) => {
    await page.goto('https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&sort=price_asc');

    const prices = await page.locator('//div[@class="hZ3P6w DeU9vF"]').allTextContents();

    console.log(prices);

    const numbers = prices.map(price =>
        Number(price.replace(/[₹,]/g, ''))
    );

    console.log(numbers);

    const sorted = [...numbers].sort((a, b) => a - b);

if (numbers.every((price, i) => price === sorted[i])) {
    console.log("Prices are in ascending order");
} else {
    console.log("Prices are NOT in ascending order");
}
});