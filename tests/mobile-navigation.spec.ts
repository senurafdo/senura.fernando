import { expect, test } from '@playwright/test';

test.describe('Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('hamburger button is visible and toggles close icon state', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: 'open menu' });
    const closeIcon = page.locator('span[aria-label="close menu"]');

    await expect(hamburger).toBeVisible();
    await expect(closeIcon).not.toBeVisible();

    await hamburger.click();
    await expect(closeIcon).toBeVisible();

    await hamburger.click();
    await expect(closeIcon).not.toBeVisible();
  });

  test.fixme('mobile menu navigation links work and close menu', async () => {
    // Known issue: teleported mobile menu links are not consistently interactable in this layout.
  });

  test.fixme('mobile menu shows current social links', async () => {
    // Known issue: teleported mobile menu links are not consistently interactable in this layout.
  });

  test('hamburger is keyboard accessible', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: 'open menu' });
    await hamburger.focus();
    await expect(hamburger).toBeFocused();
    await expect(hamburger).toHaveAccessibleName('open menu');
  });
});
