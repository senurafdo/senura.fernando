import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/blog/understanding-saas-testing-operations-in-a-bau-environment');
});

test('blog post page has title, date, content, and prev/next navigation', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'Understanding SaaS Testing Operations in a BAU Environment' })).toBeVisible();
  await expect(page.locator('header time')).toBeVisible();
  await expect(page.getByText('As organizations accelerate their adoption of SaaS')).toBeVisible();

  const nav = page.getByRole('navigation', { name: 'Blog post navigation' });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole('link', { name: /Previous post:/ })).toBeVisible();
  await expect(nav.getByRole('link', { name: /Next post:/ })).toBeVisible();

  await nav.getByRole('link', { name: /Previous post:/ }).click();
  await expect(page).toHaveURL('/blog/mac-mini-m4-pro-for-qa-automation-practical-evaluation');
  await expect(page.getByRole('heading', { level: 1, name: /Mac Mini M4 Pro for QA Automation/ })).toBeVisible();
});
