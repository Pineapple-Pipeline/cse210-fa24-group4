require("./unix-timestamp-converter-tool");

describe("UnixTimestampConverterTool", () => {
  let unixTimestampConverterTool;
  let inputArea;
  let outputArea;
  let convertUtcBtn;
  let convertIsoBtn;

  beforeEach(() => {
    document.body.innerHTML = `
        <unix-timestamp-converter-tool></unix-timestamp-converter-tool>
      `;

    // Get references to elements inside the custom element
    unixTimestampConverterTool = document.querySelector(
      "unix-timestamp-converter-tool",
    );
    inputArea = unixTimestampConverterTool.querySelector(".input-area");
    outputArea = unixTimestampConverterTool.querySelector(".output-area");
    convertUtcBtn =
      unixTimestampConverterTool.querySelector(".convert-utc-btn");
    convertIsoBtn =
      unixTimestampConverterTool.querySelector(".convert-iso-btn");
  });

  test("Should render the UNIX timestamp converter tool correctly", () => {
    expect(inputArea).toBeTruthy();
    expect(convertUtcBtn).toBeTruthy();
    expect(convertIsoBtn).toBeTruthy();
    expect(outputArea).toBeTruthy();
  });

  test("should convert to UTC properly when convert UTC button is clicked", () => {
    // Input valid UNIX timestamp and trigger the convert UTC button
    inputArea.value = "919191919";
    convertUtcBtn.click();

    // Check that the output area contains the correct UTC timestamp
    expect(outputArea.value).toBe("Tue, 16 Feb 1999 19:05:19 GMT");
  });

  test("should convert to ISO properly when convert ISO button is clicked", () => {
    // Input valid UNIX timestamp and trigger the convert ISO button
    inputArea.value = "919191919";
    convertIsoBtn.click();

    // Check that the output area contains the correct UTC timestamp
    expect(outputArea.value).toBe("1999-02-16T19:05:19.000Z");
  });

  test("should error out of UTC conversion when input is empty", () => {
    inputArea.value = "";
    convertUtcBtn.click();

    //The output should be empty
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should error out of ISO conversion when input is empty", () => {
    inputArea.value = "";
    convertIsoBtn.click();

    //The output should be empty
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should indicate error when converting invalid timestamp to UTC", () => {
    inputArea.value = "abc12345";
    convertUtcBtn.click();

    // Check that the output area shows the error
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });

  test("should indicate error when converting invalid timestamp to ISO", () => {
    inputArea.value = "abc12345";
    convertIsoBtn.click();

    // Check that the output area shows the error
    expect(outputArea.value).toBe("Error: Invalid Unix timestamp");
  });
});
