// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home Page Content Display', { tag: '@agent' }, () => {
  test('Verify Recent Blog Posts Section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Recent Blog Posts' })).toBeVisible();

    const recentBlogLink = page.getByRole('link', { name: 'Recent Blog Posts' });
    await expect(recentBlogLink).toHaveAttribute('href', '/blog');

    const blogRegion = page.getByRole('region', { name: 'Recent Blog Posts' });
    const blogArticles = blogRegion.locator('article');
    const articleCount = await blogArticles.count();
    expect(articleCount).toBeGreaterThan(0);
    expect(articleCount).toBeLessThanOrEqual(6);

    for (const article of await blogArticles.all()) {
      await expect(article.getByRole('heading', { level: 3 })).toBeVisible();
      await expect(article.locator('time')).toBeVisible();
      await expect(article.getByRole('list')).toBeVisible();
    }
  });
});
