import { test, expect } from '@playwright/test';

test('smoke: blog page loads', async ({ page }) => {
  await page.goto('/blog');
  await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
});
