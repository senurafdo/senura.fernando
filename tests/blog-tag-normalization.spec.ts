import { expect, test } from '@playwright/test';

test.describe('Blog Tag Normalization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('tag links use normalized slugs', async ({ page }) => {
    const hrefs = await page
      .locator('section a[href^="/blog/tags/"]')
      .evaluateAll(links =>
        links
          .map(link => link.getAttribute('href'))
          .filter((href): href is string => Boolean(href)),
      );

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      const slug = href.replace('/blog/tags/', '');
      expect(slug).toBe(slug.toLowerCase());
      expect(slug).not.toContain(' ');
    }
  });

  test('hyphenated tag pages are reachable', async ({ page }) => {
    await page.goto('/blog/tags/mac-mini');
    await expect(page).toHaveURL('/blog/tags/mac-mini');
    await expect(page.getByRole('heading', { level: 1, name: /Blog Posts/i })).toBeVisible();
    expect(await page.getByRole('article').count()).toBeGreaterThan(0);
  });

  test('search on a tag page can return results outside default tag set', async ({ page }) => {
    await page.goto('/blog/tags/mac-mini');
    await page.getByPlaceholder('Search...').fill('saas');

    await expect(page).toHaveURL('/blog/tags/mac-mini');
    await expect(page.getByPlaceholder('Search...')).toHaveValue('saas');
    await expect(page.getByRole('article').first()).toBeVisible();
  });
});
