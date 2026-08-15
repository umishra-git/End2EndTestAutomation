import { test, expect } from '@playwright/test';

test.describe('SauceLabs homepage AURA platform', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucelabs.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
  });

  test('displays the announcement banner with registration CTA', async ({ page }) => {
    await expect(page.getByText(/Learn about Sauce Labs' AURA platform: live launch event, August 19\./i).first()).toBeVisible();

    const registerLink = page.locator('.top-announcement-banner').getByRole('link', { name: /register now/i }).first();
    await expect(registerLink).toBeVisible();
    await expect(registerLink).toHaveAttribute('href', /260819-meet-aura|register/i);
  });

  test('dismisses the banner without reloading the page', async ({ page }) => {
    const beforeUrl = page.url();
    const banner = page.locator('.top-announcement-banner').first();

    await page.getByText('X', { exact: true }).first().click();
    await expect(banner).toHaveClass(/is-collapsed/);
    await expect(page).toHaveURL(beforeUrl);
  });

  test('shows the header navigation and CTA links', async ({ page }) => {
    await expect(page.getByRole('button', { name: /^Why SauceLabs$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Products$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Solutions$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Developers$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Resources$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Pricing$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Login$/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Book a Demo$/i }).first()).toBeVisible();
  });

  test('shows the AURA hero content and primary CTA buttons', async ({ page }) => {
    await expect(page.getByText(/FROM BUSINESS\s*INTENT\s*TO\s*PRODUCTION CONFIDENCE/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Verify AI-generated code at the pace it's written\./i })).toBeVisible();
    await expect(page.getByText(/AURA \(AI-Unified Release Assurance\)/i)).toBeVisible();
    await expect(page.getByText(/90%.*production incidents/i).first()).toBeVisible();
    await expect(page.getByText(/47%.*faster/i).first()).toBeVisible();
    await expect(page.getByText(/38%.*engineering capacity/i).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Start Free$/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Book a Demo$/i }).first()).toBeVisible();
  });

  test('navigates to the AURA registration page from the banner CTA', async ({ page }) => {
    const registerLink = page.locator('.top-announcement-banner').getByRole('link', { name: /register now/i }).first();
    await expect(registerLink).toBeVisible();
    await registerLink.click();
    await expect(page).toHaveURL(/260819-meet-aura/i);
  });

  test('supports keyboard focus for the primary CTA buttons', async ({ page }) => {
    const startFree = page.getByRole('link', { name: /^Start Free$/i }).first();
    const bookDemo = page.getByRole('link', { name: /^Book a Demo$/i }).first();

    await startFree.focus();
    await expect(startFree).toBeFocused();

    await bookDemo.focus();
    await expect(bookDemo).toBeFocused();
  });

  test('remains usable on mobile viewport widths', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/Learn about Sauce Labs' AURA platform/i).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Start Free$/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^Book a Demo$/i }).first()).toBeVisible();
  });
});
