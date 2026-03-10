// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation Functionality', { tag: '@agent' }, () => {
  test('Verify Desktop Navigation Menu', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('navigation')).toBeVisible();

    const nav = page.getByRole('navigation');
    await expect(nav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    await expect(nav.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    await expect(nav.getByRole('link')).toHaveCount(2);

    await expect(page.getByRole('link', { name: /Senura Fernando/ }).first()).toBeVisible();
  });
});
