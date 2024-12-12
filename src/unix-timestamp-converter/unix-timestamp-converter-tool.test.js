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
  let copyNotification;

  beforeEach(() => {
    document.body.innerHTML = `
        <unix-timestamp-converter-tool></unix-timestamp-converter-tool>
      `;

    // Get references to elements inside the custom element
    unixTimestampConverterTool = document.querySelector(
      "unix-timestamp-converter-tool",
    );
    toolPanel = unixTimestampConverterTool.querySelector(".tool-panel");
    inputArea = unixTimestampConverterTool.querySelector(".input-area");
    outputArea = unixTimestampConverterTool.querySelector(".output-area");
    convertToUtcBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-utc-btn",
    );
    convertToIsoBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-iso-btn",
    );
    convertToUnixBtn = unixTimestampConverterTool.querySelector(
      ".convert-to-unix-btn",
    );
    swapBtn = unixTimestampConverterTool.querySelector(".swap-btn");
    copyBtn = unixTimestampConverterTool.querySelector(".copy-btn");
    copyNotification = unixTimestampConverterTool.querySelector(
      ".copy-btn-container .notification",
    );
  });

  test("Should render the UNIX timestamp converter tool correctly", () => {
    expect(inputArea).toBeTruthy();
    expect(convertToUtcBtn).toBeTruthy();
    expect(convertToIsoBtn).toBeTruthy();
    expect(convertToUnixBtn).toBeTruthy();
    expect(swapBtn).toBeTruthy();
    expect(copyBtn).toBeTruthy();
    expect(outputArea).toBeTruthy();
    expect(copyNotification).toBeTruthy();
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
  test("should alert a successful copy", async () => {
    // Make the test async
    const showNotificationMock = jest
      .spyOn(unixTimestampConverterTool, "showNotification")
      .mockImplementation(() => {});

    // Successful copy to clipboard
    const clipboardMock = jest.fn().mockResolvedValue();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: clipboardMock,
      },
      writable: true,
    });
    outputArea.value = "99999";
    await copyBtn.click();
    expect(clipboardMock).toHaveBeenCalledWith("99999");
    expect(showNotificationMock).toHaveBeenCalledWith(
      unixTimestampConverterTool.copyNotification,
      "Copied to clipboard!",
    );
  });

  // empty output copy alert test
  test("should alert when copying nothing", async () => {
    const showNotificationMock = jest.spyOn(
      unixTimestampConverterTool,
      "showNotification",
    );
    outputArea.value = "";
    copyBtn.click();
    expect(showNotificationMock).toHaveBeenCalledWith(
      unixTimestampConverterTool.copyNotification,
      "Nothing to copy!",
    );

    // Wait for timeout to complete
    await new Promise((resolve) => setTimeout(resolve, 1100));
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
