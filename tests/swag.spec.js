import { test, expect } from '@playwright/test';
import details from '../testdata/swaglabs_testdata/user.json';

test('login with standard_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.standard);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

test('login with locked_out_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.lockedOut);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('login with problem_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.problem);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

test('login with performance_glitch_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.performanceGlitch);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

test('login with error_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.error);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible({ timeout: 10000 });
});

test('login with visual_user username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(details.login.users.visual);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(details.login.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});