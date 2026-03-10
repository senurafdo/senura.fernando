import { expect, test } from '@playwright/test';

test.describe('Home Page Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays current hero content', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Senura Fernando/ })).toBeVisible();
    await expect(page.getByText('Senior Quality Engineer')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Read Blog' })).toHaveAttribute('href', '/blog');
    await expect(page.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about');
  });

  test('recent blog posts section displays current cards', async ({ page }) => {
    const blogSection = page.getByRole('region', { name: 'Recent Blog Posts' });
    await expect(blogSection).toBeVisible();
    await expect(blogSection.getByRole('heading', { name: 'Recent Blog Posts' })).toBeVisible();

    const blogCards = blogSection.getByRole('article');
    const count = await blogCards.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(6);

    await expect(blogCards.first().getByRole('heading', { level: 3 })).toBeVisible();
    await expect(blogCards.first().locator('time')).toBeVisible();
  });

  test('temporarily hidden home sections are not shown', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Recent Videos' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Recent Podcasts' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Featured Podcast' })).toHaveCount(0);
  });

  test('main home links navigate correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Recent Blog Posts' }).click();
    await expect(page).toHaveURL('/blog');

    await page.goto('/');
    await page.getByRole('link', { name: 'About Me' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('core home content is accessible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    const links = page.getByRole('link');
    expect(await links.count()).toBeGreaterThan(0);

    const images = page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });
});
