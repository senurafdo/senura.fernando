import { expect, test } from '@playwright/test';

test.describe('Home Hero Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('read blog CTA navigates to blog page', async ({ page }) => {
    await page.getByRole('link', { name: 'Read Blog' }).click();
    await expect(page).toHaveURL('/blog');
  });

  test('about me CTA navigates to about page', async ({ page }) => {
    await page.getByRole('link', { name: 'About Me' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('footer buy me a coffee link points to current profile', async ({ page }) => {
    await expect(page.getByRole('contentinfo').getByRole('link', { name: 'buy me a coffee' }))
      .toHaveAttribute('href', 'https://buymeacoffee.com/senura');
  });
});
