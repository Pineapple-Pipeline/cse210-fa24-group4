const { test, expect } = require("@playwright/test");

test.describe("UUID Generator tool", () => {
  test("should generate UUID on button click", async ({ page }) => {
    // Navigate to the page
    await page.goto("./");

    // Ensure the button is available
    await page.waitForSelector("#uuid-generator-button");

    // Click the main UUID generator button
    await page.locator("#uuid-generator-button").click();

    // Ensure the output area is visible
    const outputArea = page.locator("uuid-generator-tool .output-area");
    await expect(outputArea).toBeVisible();

    // Click the generate button
    await page.locator("uuid-generator-tool .generate-btn").click();

    // Wait for the output area to update
    await expect(outputArea).not.toHaveValue("");

    // Get the value from the output area and trim it
    const rawUuid = await outputArea.inputValue();
    const uuid = rawUuid.trim();

    // Validate the UUID format using a regular expression
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(uuidRegex);
  });

    test("should copy UUID to clipboard", async ({ page, browserName }) => {
      // Navigate to the page
      await page.goto("./");

      await page
        .context()
        .grantPermissions(["clipboard-read", "clipboard-write"]);
        
      // Ensure the UUID generator button is available and click it
      await page.waitForSelector("#uuid-generator-button");
      await page.locator("#uuid-generator-button").click();

      // Click the "Generate UUID" button
      const generateButton = page.locator("uuid-generator-tool .generate-btn");
      await generateButton.click();

      // Wait for the UUID to appear
      const outputArea = page.locator("uuid-generator-tool .output-area");
      const uuid = await outputArea.inputValue();

      // Ensure the "Copy to Clipboard" button is available and click it
      const copyButton = page.locator("uuid-generator-tool .copy-btn");
      await copyButton.click();

      // Verify the clipboard content
      const clipboardContent = await page.evaluate(() =>
        navigator.clipboard.readText()
      );
      expect(clipboardContent.trim()).toBe(uuid.trim());
    });
});