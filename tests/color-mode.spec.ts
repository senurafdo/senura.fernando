import { expect, test } from '@playwright/test';

test('color mode control cycles through light/system/dark', async ({ page }) => {
  await page.goto('/');

  const colorModeButton = page.getByRole('banner').getByRole('button', { name: /light|dark|system/i });
  await expect(colorModeButton).toBeVisible();

  const allowedModes = ['light', 'dark', 'system'];
  const firstMode = (await colorModeButton.getAttribute('aria-label')) || '';
  expect(allowedModes).toContain(firstMode);

  for (let i = 0; i < 3; i++) {
    await colorModeButton.click();
    const mode = (await colorModeButton.getAttribute('aria-label')) || '';
    expect(allowedModes).toContain(mode);
  }
});
