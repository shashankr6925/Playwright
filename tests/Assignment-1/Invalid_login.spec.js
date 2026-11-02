import { test, expect } from '@playwright/test';

const invaliddata = {

    dataset1: { username: "admin", password: "admmin123" },
    dataset2: { username: "Admin", password: "abcdef" },
    dataset3: { username: "aaaaa", password: "admin123" },
}

for(let data in invaliddata){
test(`Login with invalid details-${data}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(invaliddata[data].username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(invaliddata[data].password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
});
}