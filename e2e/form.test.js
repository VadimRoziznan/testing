import puppeteer from "puppeteer";


jest.setTimeout(30000);
describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.form-inline');
  });

  test('Form input should add .correct class if the card number is valid', async () => {
    
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.form-inline');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn-success');

    await input.type('371449635398431');
    await submit.click();

    await page.waitForSelector('.correct');
  });

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
