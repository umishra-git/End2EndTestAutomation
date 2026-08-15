import { test, expect } from '@playwright/test';

test.describe('SauceLabs homepage smoke tests', () => {
  test('loads the homepage and displays the core AURA messaging', async ({ page }) => {
    await page.goto('https://saucelabs.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/Learn about Sauce Labs' AURA platform: live launch event, August 19\./i).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /register now/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /^Why SauceLabs$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Products$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Solutions$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Developers$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Pricing$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Login$/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Book a Demo$/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Verify AI-generated code at the pace it's written\./i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Start Free$/i }).first()).toBeVisible();
  });
});
