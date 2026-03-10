import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('about page shows current hero content', async ({ page }) => {
    await expect(page).toHaveTitle(/About Senura Fernando/);
    await expect(page).toHaveURL('/about');

    await expect(page.getByText('👋 Hello There!')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();
  });

  test('about page shows current biography content', async ({ page }) => {
    await expect(page.getByText('With over a decade of experience in software quality engineering')).toBeVisible();
    await expect(page.getByText('Senior QA Engineer and QA Lead')).toBeVisible();
    await expect(page.getByText('tools like Playwright')).toBeVisible();
  });

  test('about page shows current awards and achievements cards', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Awards & Achievements' })).toBeVisible();
    await expect(page.getByText('Recognition and certifications that reflect my journey')).toBeVisible();

    const awardCards = page.locator('section[aria-labelledby="awards-heading"] article');
    await expect(awardCards).toHaveCount(5);

    await expect(page.getByRole('heading', { level: 3, name: /BEng \(Hons\) Software Engineering/ })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /Master in Business Administration/ })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /ISTQB CTFL certification/ })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /ISTQB CTFL-AT certification/ })).toBeVisible();
  });
});
