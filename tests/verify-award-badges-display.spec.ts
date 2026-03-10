// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Content Display', { tag: '@agent' }, () => {
  test('Verify Award Badges Display', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Read Blog' })).toHaveAttribute('href', '/blog');
    await expect(page.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about');
  });
});
