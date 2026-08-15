import { test, expect } from '@playwright/test';

test.describe('Sauce Labs AURA registration landing page', () => {
  const url = 'https://info.saucelabs.com/260819-meet-aura.html';

  test.beforeEach(async ({ page }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
  });

  test('loads the event page with the required content and navigation', async ({ page }) => {
    await expect(page).toHaveTitle(/Sauce Labs/i);
    await expect(page.locator('#heroDate')).toContainText('Virtual Event');
    await expect(page.locator('#heroDate')).toContainText('August 19');
    await expect(page.getByRole('heading', { name: 'Agenda' })).toBeVisible();
    await expect(page.getByText('Register below')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Save your seat.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sauce Labs' }).first()).toHaveAttribute('href', /saucelabs\.com/i);
    await expect(page.getByRole('button', { name: /^Submit$/i })).toBeEnabled();
  });

  test('validates invalid email and preserves entered values', async ({ page }) => {
    const email = page.locator('input[name="Email"]');
    const firstName = page.locator('input[name="FirstName"]');
    const lastName = page.locator('input[name="LastName"]');
    const submit = page.getByRole('button', { name: /^Submit$/i });

    await email.fill('bad-email');
    await firstName.fill('Jane');
    await lastName.fill('Doe');
    await submit.click();

    await expect(page.getByText('Must be valid email.')).toBeVisible();
    await expect(email).toHaveValue('bad-email');
    await expect(firstName).toHaveValue('Jane');
    await expect(lastName).toHaveValue('Doe');
  });

  test('supports privacy link navigation and consent checkbox interaction', async ({ page }) => {
    const privacyLink = page.getByRole('link', { name: /privacy notice/i }).first();
    const checkbox = page.locator('input[name="sauceLabsContactConsent"]');

    await expect(privacyLink).toHaveAttribute('href', /privacy-policy/i);
    await privacyLink.click();
    await expect(page).toHaveURL(/privacy-policy/i);

    await page.goBack();
    await page.waitForLoadState('networkidle');
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
});
