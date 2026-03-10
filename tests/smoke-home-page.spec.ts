import { test, expect } from '@playwright/test';

test('smoke: home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();
});
