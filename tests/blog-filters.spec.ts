import { expect, test } from '@playwright/test';

test.describe('Blog Tag Filters', () => {
  test('topic links on /blog navigate to matching tag pages', async ({ page }) => {
    await page.goto('/blog');

    const tagHrefs = await page
      .locator('section a[href^="/blog/tags/"]')
      .evaluateAll(links =>
        [...new Set(
          links
            .map(link => link.getAttribute('href'))
            .filter((href): href is string => Boolean(href)),
        )],
      );

    expect(tagHrefs.length).toBeGreaterThan(0);

    for (const href of tagHrefs) {
      await page.goto('/blog');
      await page.locator(`a[href="${href}"]`).first().click();
      await expect(page).toHaveURL(href);
      await expect(page.getByRole('heading', { level: 1, name: /Blog Posts/i })).toBeVisible();
    }
  });
});
