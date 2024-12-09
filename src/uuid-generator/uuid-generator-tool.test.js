require("./uuid-generator-tool");

const mockGetRandomValues = jest.fn((buffer) => {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = i; // Predictable values for testing
  }
  return buffer;
});

describe("UUIDGeneratorTool", () => {
  let uuidGeneratorTool;
  let outputArea;
  let generateBtn;
  let copyBtn;
  let copyNotification;

  beforeEach(() => {
    global.crypto = {
      getRandomValues: mockGetRandomValues,
    };

    document.body.innerHTML = `
        		<uuid-generator-tool></uuid-generator-tool>
        	`;

    // Get references to elements inside the custom element
    uuidGeneratorTool = document.querySelector("uuid-generator-tool");
    generateBtn = document.querySelector(".generate-btn");
    copyBtn = document.querySelector(".copy-btn");
    outputArea = document.querySelector(".output-area");
    copyNotification = document.querySelector(".copy-btn .notification");
  });

  // tool render test
  test("Should render the UUID generator tool correctly", () => {
    expect(outputArea).toBeTruthy();
    expect(generateBtn).toBeTruthy();
    expect(copyBtn).toBeTruthy();
  });

  // successful copy button test
  test("should alert a successful copy of UUID", async () => {
    // Make the test async
    const showNotificationMock = jest
      .spyOn(uuidGeneratorTool, "showNotification")
      .mockImplementation(() => { });

    // Successful copy to clipboard
    const clipboardMock = jest.fn().mockResolvedValue();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: clipboardMock,
      },
      writable: true,
    });
    outputArea.value = "5fa63246-a09e-4e82-853b-c38450d39d08";
    await copyBtn.click();
    expect(clipboardMock).toHaveBeenCalledWith(
      "5fa63246-a09e-4e82-853b-c38450d39d08",
    );
    expect(showNotificationMock).toHaveBeenCalledWith(
      uuidGeneratorTool.copyNotification,
      "Copied to clipboard!"
    );
  });

  // empty output copy alert test
  test("should alert when copying with no UUID", () => {
    const showNotificationMock = jest
      .spyOn(uuidGeneratorTool, "showNotification")
      .mockImplementation(() => {});
    outputArea.value = "";
    copyBtn.click();
    expect(showNotificationMock).toHaveBeenCalledWith(
      uuidGeneratorTool.copyNotification,
      "Nothing to copy!"
    );
  });

  test("Should generate a valid UUID with version 4 and RFC4122 variant", async () => {
    // Simulate clicking the generate button
    await generateBtn.click();

    const uuid = outputArea.value.trim(); // Get the generated UUID

    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });

  // JS cleanup on close test
  test("Should handle cleanup correctly when disconnected", () => {
    const removeEventListenerSpy = jest.spyOn(
      generateBtn,
      "removeEventListener",
    );
    uuidGeneratorTool.remove();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
    );
  });
});
