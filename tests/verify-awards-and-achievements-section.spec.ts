// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('About Page Content', () => {
  test('Verify Awards and Achievements Section', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: 'Awards & Achievements' })).toBeVisible();
    await expect(page.getByText('Recognition and certifications that reflect my journey in technology and community contribution.')).toBeVisible();

    const awardCards = page.locator('section[aria-labelledby="awards-heading"] article');
    await expect(awardCards).toHaveCount(5);

    await expect(page.getByRole('heading', { level: 3, name: /BEng \(Hons\) Software Engineering/ })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /Master in Business Administration/ })).toBeVisible();
  });
});
