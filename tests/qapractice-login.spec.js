import { test, expect } from '@playwright/test';

const loginUrl = 'https://www.qapractice.com/practice-login-form';

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

test('logs in with valid credentials', async ({ page }) => {
  await page.getByPlaceholder('Enter your email').fill('user@premiumbank.com');
  await page.locator('#login-password').fill('Bank@123');
  await page.locator('#login-submit').click();

  await expect(page.locator('#login-success')).toBeVisible();
});

test('shows an error for invalid credentials', async ({ page }) => {
  await page.getByPlaceholder('Enter your email').fill('invalid@example.com');
  await page.locator('#login-password').fill('wrong-password');
  await page.locator('#login-submit').click();

  await expect(page.locator('#login-error')).toBeVisible();
});

test('requires an email address', async ({ page }) => {
  await page.locator('#login-password').fill('Bank@123');
  await page.locator('#login-submit').click();

  await expect(page.getByTestId('login-error')).toBeVisible();
});

test('requires a password', async ({ page }) => {
  await page.getByPlaceholder('Enter your email').fill('user@premiumbank.com');
  await page.locator('#login-submit').click();

  await expect(page.getByTestId('login-error')).toBeVisible();
});
