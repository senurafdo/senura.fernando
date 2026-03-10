import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('home contains current name and title', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();
  await expect(page.getByText('Senior Quality Engineer')).toBeVisible();
});

test('home page has recent blog posts cards', async ({ page }) => {
  const recentPosts = page.getByRole('region', { name: /Recent Blog Posts/i });
  const count = await recentPosts.getByRole('article').count();
  expect(count).toBeGreaterThan(0);
  expect(count).toBeLessThanOrEqual(6);
});

test('home page currently hides recent podcasts section', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Recent Podcasts/i })).toHaveCount(0);
});
