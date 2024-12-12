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
});