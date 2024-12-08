const { test, expect } = require("@playwright/test");

test.describe("Basic Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("should initialize the application correctly", async ({ page }) => {
    const contentArea = await page.$(".content-area");
    expect(contentArea).not.toBeNull();
  });

  test("should load JSON Formatter component when button is clicked", async ({
    page,
  }) => {
    await page.click("#json-formatter-button");
    const jsonFormatter = await page.$("json-formatter-tool");
    expect(jsonFormatter).not.toBeNull();
  });

  test("should load URL Encoder/Decoder component when button is clicked", async ({
    page,
  }) => {
    await page.click("#url-encoder-decoder-button");
    const urlEncoderDecoder = await page.$("url-encoder-decoder-tool");
    expect(urlEncoderDecoder).not.toBeNull();
  });
});
