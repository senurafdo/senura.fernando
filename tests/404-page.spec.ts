import { expect, test } from '@playwright/test';

test.describe('404 Error Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/non-existent-page');
  });

  test('displays proper 404 page for non-existent routes', async ({ page }) => {
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - heading "Ooops looks like that page doesn't exist" [level=1]
      - paragraph: Sorry about that. No idea what went wrong but hey, nobody's perfect. Lets take you somewhere that actually exists. go.
      - link "Take me there!":
        - /url: /
      - img "broken connection"
    `);
  });

  test('404 page maintains header and footer navigation', async ({ page }) => {
    const headerNav = page.getByRole('banner').getByRole('navigation');
    await expect(headerNav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    await expect(headerNav.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    await expect(headerNav.getByRole('link')).toHaveCount(2);

    const footerNav = page.getByRole('contentinfo').getByRole('list').first();
    await expect(footerNav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    await expect(footerNav.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    await expect(footerNav.getByRole('link')).toHaveCount(2);
  });
});
