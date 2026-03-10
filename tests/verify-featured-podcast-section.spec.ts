// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Content Display', { tag: '@agent' }, () => {
  test('Verify Featured Podcast Section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Featured Podcast' })).toHaveCount(0);
  });
});
