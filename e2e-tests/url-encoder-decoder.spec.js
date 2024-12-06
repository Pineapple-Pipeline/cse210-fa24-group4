const { test, expect } = require("@playwright/test");

test.describe("URL Encoder Decoder tool", () => {
  const testCases = [
    {
      name: "Basic URL Encoding",
      function: "encoding",
      input: "https://example.com",
      expect: "https%3A%2F%2Fexample.com",
    },
    {
      name: "Basic URL Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com",
      expect: "https://example.com",
    },
    {
      name: "URL with Query Parameters Encoding",
      function: "encoding",
      input: "https://example.com/search?q=test case&lang=en",
      expect:
        "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dtest%20case%26lang%3Den",
    },
    {
      name: "URL with Query Parameters Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dtest%20case%26lang%3Den",
      expect: "https://example.com/search?q=test case&lang=en",
    },
    {
      name: "URL with Fragment Encoding",
      function: "encoding",
      input: "https://example.com/index.html#section-2",
      expect: "https%3A%2F%2Fexample.com%2Findex.html%23section-2",
    },
    {
      name: "URL with Fragment Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com%2Findex.html%23section-2",
      expect: "https://example.com/index.html#section-2",
    },
    {
      name: "URL with Special Characters Encoding",
      function: "encoding",
      input: "https://example.com/path/to/file?name=foo&value=%",
      expect:
        "https%3A%2F%2Fexample.com%2Fpath%2Fto%2Ffile%3Fname%3Dfoo%26value%3D%25",
    },
    {
      name: "URL with Special Characters Decoding",
      function: "decoding",
      input:
        "https%3A%2F%2Fexample.com%2Fpath%2Fto%2Ffile%3Fname%3Dfoo%26value%3D%25",
      expect: "https://example.com/path/to/file?name=foo&value=%",
    },
    {
      name: "Internationalized Domain Name Encoding",
      function: "encoding",
      input: "https://例子.测试/路径/文件",
      expect:
        "https%3A%2F%2F%E4%BE%8B%E5%AD%90.%E6%B5%8B%E8%AF%95%2F%E8%B7%AF%E5%BE%84%2F%E6%96%87%E4%BB%B6",
    },
    {
      name: "Internationalized Domain Name Decoding",
      function: "decoding",
      input:
        "https%3A%2F%2F%E4%BE%8B%E5%AD%90.%E6%B5%8B%E8%AF%95%2F%E8%B7%AF%E5%BE%84%2F%E6%96%87%E4%BB%B6",
      expect: "https://例子.测试/路径/文件",
    },
    {
      name: "URL with Reserved Characters Encoding",
      function: "encoding",
      input: "https://example.com/path?foo=bar@baz:qux",
      expect: "https%3A%2F%2Fexample.com%2Fpath%3Ffoo%3Dbar%40baz%3Aqux",
    },
    {
      name: "URL with Reserved Characters Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com%2Fpath%3Ffoo%3Dbar%40baz%3Aqux",
      expect: "https://example.com/path?foo=bar@baz:qux",
    },
    {
      name: "URL with Long Query Strings Encoding",
      function: "encoding",
      input:
        "https://example.com/api?name=John+Doe&session_id=123456789&timestamp=2024-01-01T00:00:00Z",
      expect:
        "https%3A%2F%2Fexample.com%2Fapi%3Fname%3DJohn%2BDoe%26session_id%3D123456789%26timestamp%3D2024-01-01T00%3A00%3A00Z",
    },
    {
      name: "URL with Long Query Strings Decoding",
      function: "decoding",
      input:
        "https%3A%2F%2Fexample.com%2Fapi%3Fname%3DJohn%2BDoe%26session_id%3D123456789%26timestamp%3D2024-01-01T00%3A00%3A00Z",
      expect:
        "https://example.com/api?name=John+Doe&session_id=123456789&timestamp=2024-01-01T00:00:00Z",
    },
    {
      name: "URL with Unicode Emojis Encoding",
      function: "encoding",
      input: "https://example.com/hello🌎",
      expect: "https%3A%2F%2Fexample.com%2Fhello%F0%9F%8C%8E",
    },
    {
      name: "URL with Unicode Emojis Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com%2Fhello%F0%9F%8C%8E",
      expect: "https://example.com/hello🌎",
    },
    {
      name: "URL with Base64 Encoded Data Encoding",
      function: "encoding",
      input: "https://example.com/data?payload=SGVsbG8gd29ybGQ=",
      expect: "https%3A%2F%2Fexample.com%2Fdata%3Fpayload%3DSGVsbG8gd29ybGQ%3D",
    },
    {
      name: "URL with Base64 Encoded Data Decoding",
      function: "decoding",
      input: "https%3A%2F%2Fexample.com%2Fdata%3Fpayload%3DSGVsbG8gd29ybGQ%3D",
      expect: "https://example.com/data?payload=SGVsbG8gd29ybGQ=",
    },
    {
      name: "Invalid URL Decoding",
      function: "decoding",
      input: "%94",
      expect: "Error: URI malformed",
    },
  ];

  for (const testCase of testCases) {
    test(`should format ${testCase.name} correctly`, async ({ page }) => {
      // Navigate to the page
      //await page.goto('http://127.0.0.1:3000/src/index.html');
      await page.goto("./");

      // Wait for the URL Encoder Decoder tool to be loaded
      await page.waitForSelector("#url-encoder-decoder-button");

      // Click the URL Encoder Decoder button
      await page.locator("#url-encoder-decoder-button").click();

      // Wait for the tool to be rendered
      await page.waitForSelector("url-encoder-decoder-tool");

      // Get the input and output areas
      const inputArea = page.locator("url-encoder-decoder-tool .input-area");
      const outputArea = page.locator("url-encoder-decoder-tool .output-area");

      // Ensure both areas are empty
      await expect(inputArea).toHaveValue("");
      await expect(outputArea).toHaveValue("");

      // Fill in the test case
      await inputArea.fill(testCase.input);

      // Verify the input area has the correct value
      await expect(inputArea).toHaveValue(testCase.input);

      // Click the encode or decode button depending on the test
      if (testCase.function == "encoding") {
        await page.locator("url-encoder-decoder-tool .encode-btn").click();
      } else if (testCase.function == "decoding") {
        await page.locator("url-encoder-decoder-tool .decode-btn").click();
      }

      // Verify the output area contains the expected encoded or decoded URL
      const outputText = await outputArea.inputValue();
      await expect(outputText.trim()).toBe(testCase.expect);
    });
  }
});
