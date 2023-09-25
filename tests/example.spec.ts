import { test } from '@playwright/test';

test('Bug - no CSS', async ({ page }) => {
  await page.goto('https://demo.conduktor.io/')
  await page.locator('header [type="button"]').first().click()
  await page.getByRole('link', { name: 'Console Explore and manage Kafka' }).click()
  await page.getByRole('link', { name: 'Topics' }).click()
  await page.getByText('bug').click()
  await page.locator('[role="rowgroup"] [role="row"]').first().waitFor({ state: 'visible' })
  await page.getByRole('tab', { name: 'Produce' }).click()
  await page.getByTestId('start-produce-button').waitFor({ state: 'visible' })
})
