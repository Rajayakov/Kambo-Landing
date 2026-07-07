import { test, expect } from '@playwright/test'

test('homepage loads with no console errors and key sections render', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', (err) => errors.push(err.message))

  await page.goto('/')

  await expect(page.locator('h1')).toHaveText('Камбо')
  await expect(page.locator('#effects')).toBeAttached()
  await expect(page.locator('#process')).toBeAttached()
  await expect(page.locator('#booking')).toBeAttached()
  await expect(page.locator('footer')).toBeAttached()

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const innerWidth = await page.evaluate(() => window.innerWidth)
  expect(scrollWidth).toBeLessThanOrEqual(innerWidth + 1)

  expect(errors).toEqual([])
})

test('nav links scroll to correct sections', async ({ page }) => {
  await page.goto('/')
  await page.locator('a:has-text("Эффекты")').click()
  await expect(page).toHaveURL(/#effects/)
  await page.locator('a:has-text("Процесс")').click()
  await expect(page).toHaveURL(/#process/)
})

test('booking CTA opens Telegram in a new tab', async ({ page, context }) => {
  await page.goto('/#booking')
  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('a.bk-cta').first().click(),
  ])
  // Firefox briefly shows "about:blank" before applying the anchor's href,
  // while Chromium sets it synchronously — poll briefly for the URL itself
  // (fast, local) without waiting on the third-party site's full page load.
  await expect.poll(() => popup.url(), { timeout: 5000 }).toContain('t.me/Rajuna_Yakov')
})

test('footer legal links resolve without 404', async ({ page }) => {
  await page.goto('/')
  const links = ['/privacy-policy', '/data-consent', '/oferta', '/disclaimer']
  for (const href of links) {
    const response = await page.request.get(href)
    expect(response.status()).toBe(200)
  }
})
