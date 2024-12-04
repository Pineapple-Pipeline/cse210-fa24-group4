const { test, expect } = require('@playwright/test');

test.describe('JSON Formatter tool', () => {
  const testCases = [
    {
      name: 'small JSON',
      input: `{"abc":"def"}`,
      expected: `{
  "abc": "def"
}`,
    },
    {
      name: 'medium JSON',
      input: `{"name":"John Doe","age":30,"city":"New York","hobbies":["reading","traveling"]}`,
      expected: `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": [
    "reading",
    "traveling"
  ]
}`,
    },
    {
      name: 'large JSON',
      input: `{"company":"TechCorp","employees":[{"name":"Alice","department":"HR"},{"name":"Bob","department":"Engineering"},{"name":"Charlie","department":"Marketing"}],"headquarters":{"address":"123 Tech Lane","city":"San Francisco","state":"CA","zip":"94105"}}`,
      expected: `{
  "company": "TechCorp",
  "employees": [
    {
      "name": "Alice",
      "department": "HR"
    },
    {
      "name": "Bob",
      "department": "Engineering"
    },
    {
      "name": "Charlie",
      "department": "Marketing"
    }
  ],
  "headquarters": {
    "address": "123 Tech Lane",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105"
  }
}`,
    },
    {
      name: 'error JSON',
      input: `{"name":"John Doe", "age": 30,`, // Invalid JSON
      expected: `Error`,
    },
  ];

  for (const testCase of testCases) {
    test(`should format ${testCase.name} correctly`, async ({ page }) => {
      // Navigate to the page
      //await page.goto('http://127.0.0.1:3000/src/index.html');
      await page.goto('./');

      // Wait for the JSON Formatter tool to be loaded
      await page.waitForSelector('#json-formatter-button');

      // Click the JSON Formatter button
      await page.locator('#json-formatter-button').click();

      // Wait for the tool to be rendered
      await page.waitForSelector('json-formatter-tool');

      // Get the input and output areas
      const inputArea = page.locator('json-formatter-tool .input-area');
      const outputArea = page.locator('json-formatter-tool .output-area');

      // Ensure both areas are empty
      await expect(inputArea).toHaveValue('');
      await expect(outputArea).toHaveValue('');

      // Fill in the test case JSON
      await inputArea.fill(testCase.input);

      // Verify the input area has the correct value
      await expect(inputArea).toHaveValue(testCase.input);

      // Click the format button
      await page.locator('json-formatter-tool .format-btn').click();

      // Verify the output area contains the expected formatted JSON
      const outputText = await outputArea.inputValue();
      if (testCase.name === 'error JSON') {
        await expect(outputText.trim()).toMatch(testCase.expected);
      } else {
        await expect(outputText.trim()).toBe(testCase.expected);
      }
    });
  }
});
