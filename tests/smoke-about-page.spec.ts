import { test, expect } from '@playwright/test';

test('smoke: about page loads', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();
});
