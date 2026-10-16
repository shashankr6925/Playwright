import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import details from '../../testdata/orangehrm_testdata/userdetails.json';

test('Login successfully to Orange HRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Add an employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(details.employee.firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(details.employee.lastName);
  await page.getByRole('textbox').nth(4).fill(faker.string.numeric(7));
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Successfully Saved')).toBeVisible();
});

test('Login with invalid details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(details.login.invalidUsername.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('alert')).toBeVisible();
});

test('Create a job title', async ({ page }) => {
  const jobTitle = `Automation ${faker.string.alphanumeric(8)}`;

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add Job Title' })).toBeVisible();
  await page.locator('.oxd-input-group')
    .filter({ hasText: 'Job Title' })
    .getByRole('textbox')
    .fill(jobTitle);
  await page.getByRole('button', { name: 'Save' }).click();


});


