require("./unix-timestamp-converter-tool");

describe("UnixTimestampConverterTool", () => {
  let unixTimestampConverterTool;
  let toolPanel;
  let inputArea;
  let outputArea;
  let convertToUtcBtn;
  let convertToIsoBtn;
  let convertToUnixBtn;
  let swapBtn;
  let copyBtn;

  beforeEach(() => {
    document.body.innerHTML = `
        <unix-timestamp-converter-tool></unix-timestamp-converter-tool>
      `;

    // Get references to elements inside the custom element
    unixTimestampConverterTool = document.querySelector(
      "unix-timestamp-converter-tool"
    );
    toolPanel = unixTimestampConverterTool.querySelector(".tool-panel");
    inputArea = unixTimestampConverterTool.querySelector(".input-area");
    outputArea = unixTimestampConverterTool.querySelector(".output-area");
    convertToUtcBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-utc-btn"
    );
    convertToIsoBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-iso-btn"
    );
    convertToUnixBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-unix-btn"
    );
    swapBtn = unixTimestampConverterTool.querySelector(".swap-btn");
    copyBtn = unixTimestampConverterTool.querySelector(".copy-btn");
  });

  test("Should render the UNIX timestamp converter tool correctly", () => {
    expect(inputArea).toBeTruthy();
    expect(convertToUtcBtn).toBeTruthy();
    expect(convertToIsoBtn).toBeTruthy();
    expect(convertToUnixBtn).toBeTruthy();
    expect(swapBtn).toBeTruthy();
    expect(copyBtn).toBeTruthy();
    expect(outputArea).toBeTruthy();
  });

  test("converts from UNIX to UTC", () => {
    inputArea.value = "1633046400";
    convertToUtcBtn.click();
    expect(outputArea.value).toBe("Fri, 01 Oct 2021 00:00:00 GMT");
  });

  test("converts from UNIX to ISO", () => {
    inputArea.value = "1633046400";
    convertToIsoBtn.click();
    expect(outputArea.value).toBe("2021-10-01T00:00:00.000Z");
  });

  test("converts from UTC to UNIX", () => {
    swapBtn.click(); // Swap to 'to' panel
    inputArea.value = "2021-10-01T00:00:00Z";
    convertToUnixBtn.click();
    expect(outputArea.value).toBe("1633046400");
  });

  test("swaps panels", () => {
    expect(toolPanel.classList.contains("swapped")).toBe(false);
    swapBtn.click();
    expect(toolPanel.classList.contains("swapped")).toBe(true);
    swapBtn.click();
    expect(toolPanel.classList.contains("swapped")).toBe(false);
  });

  // successful copy button test
  test("should alert a successful copy of timestamp", async () => {
    // Make the test async
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    // Successful copy to clipboard
    const clipboardMock = jest.fn().mockResolvedValue();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: clipboardMock,
      },
      writable: true,
    });
    outputArea.value = "999999";
    await copyBtn.click();
    expect(clipboardMock).toHaveBeenCalledWith("999999");
    expect(alertMock).toHaveBeenCalledWith("Timestamp copied to clipboard!");
  });

  test("should alert when copying with nothing in input", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    outputArea.value = "";
    copyBtn.click();
    expect(alertMock).toHaveBeenCalledWith("Nothing to copy!");
  });

  test("should error out of UTC conversion when input is empty", () => {
    inputArea.value = "";
    convertToUtcBtn.click();
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should error out of ISO conversion when input is empty", () => {
    inputArea.value = "";
    convertToIsoBtn.click();
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should indicate error when converting invalid timestamp to UTC", () => {
    inputArea.value = "abc12345";
    convertToUtcBtn.click();
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should indicate error when converting invalid timestamp to ISO", () => {
    inputArea.value = "abc12345";
    convertToIsoBtn.click();
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should error out of UNIX conversion when input is empty", () => {
    inputArea.value = "";
    convertToUnixBtn.click();
    expect(outputArea.value).toBe("Error: Invalid date format");
  });

  test("should error out of UNIX conversion when input is invalid", () => {
    inputArea.value = "abc12345";
    convertToUnixBtn.click();
    expect(outputArea.value).toBe("Error: Invalid date format");
  });

  test("to UTC conversion should handle whitespace without issue", () => {
    inputArea.value = " 1633046400 ";
    convertToUtcBtn.click();
    expect(outputArea.value).toBe("Fri, 01 Oct 2021 00:00:00 GMT");
  });

  test("to ISO conversion should handle whitespace without issue", () => {
    inputArea.value = " 1633046400 ";
    convertToIsoBtn.click();
    expect(outputArea.value).toBe("2021-10-01T00:00:00.000Z");
  });

  test("to UNIX conversion should handle whitespace without issue", () => {
    inputArea.value = " 2021-10-01T00:00:00Z ";
    convertToUnixBtn.click();
    expect(outputArea.value).toBe("1633046400");
  });
});
