const { test, expect } = require("@playwright/test");

test.describe("Unix Timestamp Converter tool", () => {
  const testCases = [
    {
      name: "Basic Unix Timestamp to UTC Conversion",
      function: "unix-utc",
      input: "1635744000",
      expected: "Wed, 01 Dec 2021 00:00:00 GMT",
    },
    {
      name: "Basic Unix Timestamp to ISO Conversion",
      function: "unix-iso",
      input: "1635744000",
      expected: "2021-12-01T00:00:00.000Z",
    },
    {
      name: "Basic UTC to Unix Timestamp Conversion",
      function: "to-unix",
      input: "Wed, 01 Dec 2021 00:00:00 GMT",
      expected: "1638316800",
    },
    {
      name: "Basic ISO to Unix Timestamp Conversion",
      function: "to-unix",
      input: "2021-12-01T00:00:00.000Z",
      expected: "1638316800",
    },
    {
      name: "Invalid Unix Timestamp",
      function: "unix-utc",
      input: "abc",
      expected: "Error: Invalid Unix timestamp",
    },
    {
      name: "Invalid Date Format",
      function: "to-unix",
      input: "abc",
      expected: "Error: Invalid date format",
    },
    {
      name: "Whitespace Unix Timestamp to UTC Conversion",
      function: "unix-utc",
      input: " 1635744000 ",
      expected: "Wed, 01 Dec 2021 00:00:00 GMT",
    },
  ];

  for (const testCase of testCases) {
    test(`should convert ${testCase.name} correctly`, async ({ page }) => {
      // Navigate to the page (https://cse210-fa24-group4.github.io/cse210-fa24-group4/)
      await page.goto("./");

      // Wait for the Unix Timestamp Converter tool to be loaded
      await page.waitForSelector("#unix-timestamp-converter-button");

      // Click the Unix Timestamp Converter button
      await page.locator("#unix-timestamp-converter-button").click();

      // Wait for the tool to be rendered
      await page.waitForSelector("unix-timestamp-converter-tool");

      // Get the input and output areas
      const inputArea = page.locator(
        "unix-timestamp-converter-tool .input-area"
      );
      const outputArea = page.locator(
        "unix-timestamp-converter-tool .output-area"
      );

      // Ensure both areas are empty
      await expect(inputArea).toHaveValue("");
      await expect(outputArea).toHaveValue("");

      // Fill in the test case
      await inputArea.fill(testCase.input);

      // Verify the input area has the correct value
      await expect(inputArea).toHaveValue(testCase.input);

      // Click the appropriate conversion button
      if (testCase.function == "unix-utc") {
        await page
          .locator("unix-timestamp-converter-tool .convert-to-utc-btn")
          .click();
      } else if (testCase.function == "unix-iso") {
        await page
          .locator("unix-timestamp-converter-tool .convert-to-iso-btn")
          .click();
      } else if (testCase.function == "to-unix") {
        await page.locator("unix-timestamp-converter-tool .swap-btn").click();
        await page
          .locator("unix-timestamp-converter-tool .convert-to-unix-btn")
          .click();
      }

      // Verify the output area contains the expected converted value
      const outputValue = await outputArea.inputValue();
      await expect(outputValue).toBe(testCase.expected);
    });
  }
});
