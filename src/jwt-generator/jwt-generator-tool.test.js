require("./jwt-generator-tool");

// Mock the crypto.subtle API
const mockSign = jest.fn();
const mockImportKey = jest.fn();
global.crypto = {
  subtle: {
    importKey: mockImportKey,
    sign: mockSign,
  },
};

describe("JWTGeneratorTool", () => {
  let jwtGeneratorTool;
  let headerArea;
  let payloadArea;
  let secretKeyArea;
  let outputArea;
  let generateBtn;
  let copyBtn;

  beforeEach(() => {
    document.body.innerHTML = `
            <jwt-generator-tool></jwt-generator-tool>
        `;

    // Get references to elements inside the custom element
    jwtGeneratorTool = document.querySelector("jwt-generator-tool");
    headerArea = document.querySelector(".header-area");
    payloadArea = document.querySelector(".payload-area");
    secretKeyArea = document.querySelector(".secret-key-area");
    outputArea = document.querySelector(".output-area");
    generateBtn = document.querySelector(".generate-btn");
    copyBtn = document.querySelector(".copy-btn");
  });

  //tool render test
  test("Should render the JWT token generator tool correctly", () => {
    expect(headerArea).toBeTruthy();
    expect(payloadArea).toBeTruthy();
    expect(secretKeyArea).toBeTruthy();
    expect(outputArea).toBeTruthy();
    expect(generateBtn).toBeTruthy();
    expect(copyBtn).toBeTruthy();
  });

  // invalid header input test
  test("Should indicate error on invalid header", () => {
    headerArea = "";
    payloadArea =
      '{\n  "sub": "1234567890",\n  "name": "Test User",\n  "email": "test@example.com",\n  "role": "admin",\n  "iat": 1701705600,\n  "exp": 1701709200\n}';
    secretKeyArea = "your-super-secret-key-here-min-32-chars";
    generateBtn.click();

    expect(outputArea.value).toMatch(
      "Error: Header, Payload, and Secret Key must not be empty.",
    );
  });

  // invalid payload input test
  test("Should indicate error on invalid payload", () => {
    headerArea = '{\n  "alg": "HS256",\n  "typ": "JWT"\n}';
    payloadArea =
      '{\n  "sub": "1234567890",\n  "name": "Test User",\n  "email": "test@example.com",\n  "role": "admin",\n  "iat": 1701705600,\n  "exp": 1701709200\n}';
    secretKeyArea = "";
    generateBtn.click();

    expect(outputArea.value).toMatch(
      "Error: Header, Payload, and Secret Key must not be empty.",
    );
  });

  // invalid secret key input test
  test("Should indicate error on invalid secret key", () => {
    headerArea = '{\n  "alg": "HS256",\n  "typ": "JWT"\n}';
    payloadArea = "";
    secretKeyArea = "your-super-secret-key-here-min-32-chars";
    generateBtn.click();

    expect(outputArea.value).toMatch(
      "Error: Header, Payload, and Secret Key must not be empty.",
    );
  });

  // empty output copy alert test
  test("should alert when copying with no formatted JSON", () => {
    // Mock the showNotification method
    const showNotificationMock = jest
      .spyOn(jwtGeneratorTool, "showNotification")
      .mockImplementation(() => {});

    outputArea.value = "";
    copyBtn.click();
    expect(showNotificationMock).toHaveBeenCalledWith(
      jwtGeneratorTool.copyNotification,
      "Nothing to copy!",
    );
  });

  // successful copy button test
  test("should alert a successful copy of formatted JSON", async () => {
    // Make the test async
    const showNotificationMock = jest
      .spyOn(jwtGeneratorTool, "showNotification")
      .mockImplementation(() => {});

    // Successful copy to clipboard
    const clipboardMock = jest.fn().mockResolvedValue();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: clipboardMock,
      },
      writable: true,
    });
    outputArea.value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.sm58Rt7ekEMN-NBgc2As52G_DLAbZjDVnoJ3x47Bhio";
    await copyBtn.click();
    expect(clipboardMock).toHaveBeenCalledWith(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.sm58Rt7ekEMN-NBgc2As52G_DLAbZjDVnoJ3x47Bhio",
    );
    expect(showNotificationMock).toHaveBeenCalledWith(
      jwtGeneratorTool.copyNotification,
      "Copied to clipboard!",
    );
  });

  // JS cleanup on close test
  test("Should handle cleanup correctly when disconnected", () => {
    const removeEventListenerSpy = jest.spyOn(
      generateBtn,
      "removeEventListener",
    );
    jwtGeneratorTool.remove();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function),
    );
  });
});
