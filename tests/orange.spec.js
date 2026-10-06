import { test, expect } from '@playwright/test';
import details from "../testdata/orangehrm_testdata/userdetails.json";

test('Login with valid details', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('div').filter({ hasText: /^Dashboard$/ })).toBeVisible();
});

test('Login with Valid username and invalid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.invalidPassword.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
});

test('Login with inValid username and valid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.invalidUsername.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
});

test('Add employee page is visible', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.getByText('Add EmployeeAccepts jpg, .png')).toBeVisible();
});

test('Create Employee', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(details.employee.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(details.employee.lastName);
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill(details.employee.employeeId);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('div').filter({ hasText: `${details.employee.firstName} ${details.employee.lastName}Personal` }).nth(4)).toBeVisible();
});

test('Create a buzz post', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Buzz' }).click();
    await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
    await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(details.buzz.post);
    await page.getByRole('button', { name: 'Post', exact: true }).click();
    await expect(page.getByText(`manda akhil user2026-28-09 08:48 PM${details.buzz.post}Read More0 Likes0 Comments ‚ 0 Shares`)).toBeVisible();
});

test('Change name in myinfo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'First Name' }).fill(details.myInfo.firstName);
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    await expect(page.getByText('Personal DetailsEmployee Full')).toBeVisible();
});

test('Seach using name', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).first().click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill(details.search.employeeName);
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('row', { name: ` ${details.search.employeeIds[0]} ${details.employee.firstName} ${details.employee.lastName}  ` })).toBeVisible();
    await expect(page.getByRole('row', { name: ` ${details.search.employeeIds[1]} ${details.employee.firstName} ${details.employee.lastName}  ` })).toBeVisible();
});

test('Search Using Employee Id', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill(details.search.employeeId);
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('.orangehrm-container')).toBeVisible();
});