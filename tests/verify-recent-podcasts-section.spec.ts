// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Content Display', { tag: '@agent' }, () => {
  test('Verify Recent Podcasts Section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Recent Podcasts' })).toHaveCount(0);
  });
});
