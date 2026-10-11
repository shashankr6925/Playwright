import {test,expect} from '@playwright/test'

test("Login", async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.locator('#submit').click()
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
})