import { test, expect } from '@playwright/test';
import fs from 'fs';

test('DemoQA Bookstore UI Test', async ({ page }) => {
  const username = "YOUR_USERNAME";
  const password = "YOUR_PASSWORD";

  await page.goto('https://demoqa.com/books');
  await page.click('#login');
  await page.fill('#userName', username);
  await page.fill('#password', password);
  await page.click('#login');

  await expect(page.locator('#userName-value')).toHaveText(username);
  await expect(page.locator('#submit')).toBeVisible();

  await page.click('#gotoStore');

  await page.fill('#searchBox', 'Learning JavaScript Design Patterns');
  const book = page.locator("a:text('Learning JavaScript Design Patterns')");
  await expect(book).toBeVisible();

  await book.click();

  const title = await page.locator('#title-wrapper').innerText();
  const author = await page.locator('#author-wrapper').innerText();
  const publisher = await page.locator('#publisher-wrapper').innerText();

  fs.writeFileSync('bookDetails.txt', `${title}\n${author}\n${publisher}`);

  await page.click('#submit');
});