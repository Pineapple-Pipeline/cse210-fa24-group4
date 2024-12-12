const { test, expect } = require("@playwright/test");

test.describe("JWT Generator tool", () => {
  test("should return proper JWT", async ({ page }) => {
    const header = JSON.stringify({
      alg: "HS256",
      typ: "JWT",
    });

    const payload = JSON.stringify({
      sub: "1234567890",
      name: "John Doe",
      iat: Math.floor(Date.now() / 1000),
    });

    const secretKey = "mySuperSecretKey123!";

    await page.goto("./");

    await page.waitForSelector("#jwt-generator-button");

    await page.locator("#jwt-generator-button").click();

    await page.waitForSelector("jwt-generator-tool");

    const headerArea = page.locator("jwt-generator-tool .header-area");
    const payloadArea = page.locator("jwt-generator-tool .payload-area");
    const secretKeyArea = page.locator("jwt-generator-tool .secret-key-area");
    const outputArea = page.locator("jwt-generator-tool .output-area"); // Define output area

    // Assert that input fields are initially empty
    await expect(headerArea).toHaveValue("");
    await expect(payloadArea).toHaveValue("");
    await expect(secretKeyArea).toHaveValue("");

    // Fill input fields with the mock data
    await headerArea.fill(header);
    await payloadArea.fill(payload);
    await secretKeyArea.fill(secretKey);

    // Assert that input fields contain the correct values
    await expect(headerArea).toHaveValue(header);
    await expect(payloadArea).toHaveValue(payload);
    await expect(secretKeyArea).toHaveValue(secretKey);

    // Click the generate button
    await page.locator("jwt-generator-tool .generate-btn").click();

    // Wait for the output to be generated
    const outputText = await outputArea.inputValue();

    // Validate that the generated output matches the expected JWT format
    const jwtRegex = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
    expect(outputText).toMatch(jwtRegex);
  });
});
