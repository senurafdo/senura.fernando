import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('logo links to home page', async ({ page }) => {
  await page.getByRole('link', { name: /Senura Fernando/ }).first().click();
  await expect(page).toHaveURL('/');
});

test.describe('navigation', () => {
  test('header nav links to correct pages', async ({ page }) => {
    const nav = page.getByRole('banner').getByRole('navigation');

    await nav.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');

    await page.goto('/');
    await nav.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
  });

  test('footer nav links to correct pages', async ({ page }) => {
    const footer = page.getByRole('contentinfo');

    await footer.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');

    await footer.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
  });
});
