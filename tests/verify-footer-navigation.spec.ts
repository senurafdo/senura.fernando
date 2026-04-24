// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation Functionality', { tag: '@agent' }, () => {
  test('Verify Footer Navigation', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('contentinfo', { name: '' })).toBeVisible();

    const footer = page.getByRole('contentinfo');
    const footerNav = footer.getByRole('list').first();
    await expect(footerNav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    await expect(footerNav.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    await expect(footerNav.getByRole('link')).toHaveCount(2);

    const socialLinks = footer.getByRole('list').nth(1);
    await expect(socialLinks.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/senura-fernando');
    await expect(socialLinks.getByRole('link', { name: 'YouTube' })).toHaveAttribute('href', 'https://www.youtube.com/@TestingMonkey');
    await expect(socialLinks.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/senurafdo');
    await expect(socialLinks.getByRole('link', { name: 'buy me a coffee' })).toHaveAttribute('href', 'https://buymeacoffee.com/senura');

    await expect(page.getByText('© Senura Fernando, Germany')).toBeVisible();
  });
});
