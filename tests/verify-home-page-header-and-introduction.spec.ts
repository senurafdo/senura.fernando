// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Content Display', { tag: '@agent' }, () => {
  test('Verify Home Page Header and Introduction', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Senura Fernando', level: 1 })).toBeVisible();

    await expect(page.getByText('Senior Quality Engineer')).toBeVisible();

    await expect(page).toHaveTitle('Senura Fernando');
  });
});
