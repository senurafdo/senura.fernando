// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('About Page Content', () => {
  test('Verify About Page Biography', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();

    await expect(page.getByText('With over a decade of experience in software quality engineering')).toBeVisible();
    await expect(page.getByText('Senior QA Engineer and QA Lead')).toBeVisible();
    await expect(page.getByText('hands-on experience using tools like Playwright')).toBeVisible();
  });
});
