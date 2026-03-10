import { expect, test } from '@playwright/test';

test.describe('Blog Year Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('year navigation links are visible', async ({ page }) => {
    const yearLinks = page.locator('section a[href^="/blog/year/"]');
    const count = await yearLinks.count();
    expect(count).toBeGreaterThan(0);

    for (const link of await yearLinks.all()) {
      const text = (await link.textContent())?.trim() || '';
      expect(/^\d{4}$/.test(text)).toBeTruthy();
    }
  });

  test('year links navigate to matching pages', async ({ page }) => {
    const firstYearLink = page.locator('section a[href^="/blog/year/"]').first();
    const year = (await firstYearLink.textContent())?.trim() || '';

    await firstYearLink.click();
    await expect(page).toHaveURL(`/blog/year/${year}`);
    await expect(page.getByRole('heading', { level: 1, name: year })).toBeVisible();
  });

  test('year page shows posts from that year', async ({ page }) => {
    const firstYearLink = page.locator('section a[href^="/blog/year/"]').first();
    const year = (await firstYearLink.textContent())?.trim() || '';

    await firstYearLink.click();
    const dateElements = page.locator('article time');
    await expect.poll(async () => dateElements.count()).toBeGreaterThan(0);
    for (const dateEl of await dateElements.all()) {
      await expect(dateEl).toContainText(year);
    }
  });
});
