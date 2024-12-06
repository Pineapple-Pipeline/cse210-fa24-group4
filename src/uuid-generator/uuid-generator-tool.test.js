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
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

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
      "5fa63246-a09e-4e82-853b-c38450d39d08"
    );
    expect(alertMock).toHaveBeenCalledWith("UUID copied to clipboard!");
  });

  // empty output copy alert test
  test("should alert when copying with no UUID", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    outputArea.value = "";
    copyBtn.click();
    expect(alertMock).toHaveBeenCalledWith("Nothing to copy!");
  });

  // JS cleanup on close test
  test("Should handle cleanup correctly when disconnected", () => {
    const removeEventListenerSpy = jest.spyOn(
      generateBtn,
      "removeEventListener"
    );
    uuidGeneratorTool.remove();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });
});
