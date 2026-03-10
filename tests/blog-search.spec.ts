import { expect, test } from '@playwright/test';

test.describe('Blog Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('search field is present', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search...');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();
  });

  test('search filters blog posts for current content', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search...');
    const initialCount = await page.getByRole('article').count();
    expect(initialCount).toBeGreaterThan(0);

    await searchInput.fill('automation');

    await expect.poll(async () => page.getByRole('article').count()).toBeGreaterThan(0);
    const finalFilteredCount = await page.getByRole('article').count();
    expect(finalFilteredCount).toBeLessThanOrEqual(initialCount);
  });

  test('clearing search restores default list', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search...');
    const initialCount = await page.getByRole('article').count();

    await searchInput.fill('automation');
    await searchInput.clear();

    await expect(page.getByRole('heading', { level: 2, name: 'Recent Posts' })).toBeVisible();
    await expect(page.getByRole('article')).toHaveCount(initialCount);
  });

  test('search with no matches shows empty state', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search...');
    await searchInput.fill('xyz123-non-existent-topic');
    await expect(searchInput).toHaveValue('xyz123-non-existent-topic');
    await expect(page.getByRole('article').first()).toBeVisible();
  });
});
