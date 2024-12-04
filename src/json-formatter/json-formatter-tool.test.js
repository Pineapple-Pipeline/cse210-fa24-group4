require("./json-formatter-tool");

describe("JsonFormatterTool", () => {
  let jsonFormatterTool;
  let inputArea;
  let outputArea;
  let formatBtn;
  let copyBtn;
  let downloadBtn;
  let uploadBtn;

  beforeEach(() => {
    document.body.innerHTML = `
        <json-formatter-tool></json-formatter-tool>
      `;

    // Get references to elements inside the custom element
    jsonFormatterTool = document.querySelector("json-formatter-tool");
    inputArea = jsonFormatterTool.querySelector(".input-area");
    outputArea = jsonFormatterTool.querySelector(".output-area");
    formatBtn = jsonFormatterTool.querySelector(".format-btn");
    copyBtn = jsonFormatterTool.querySelector(".copy-btn");
    downloadBtn = jsonFormatterTool.querySelector(".download-btn");
    uploadBtn = jsonFormatterTool.querySelector(".upload-btn");
  });

  // tool render test
  test("Should render the JSON formatter tool correctly", () => {
    expect(inputArea).toBeTruthy();
    expect(formatBtn).toBeTruthy();
    expect(outputArea).toBeTruthy();
    expect(copyBtn).toBeTruthy();
    expect(downloadBtn).toBeTruthy();
    expect(uploadBtn).toBeTruthy();
  });

  // simple JSON formatting test
  test("should format JSON correctly when valid JSON is entered", () => {
    // Input valid JSON and trigger the format button
    inputArea.value = '{"name": "Dylan Lukes", "age": 30}';
    formatBtn.click();

    // Check that the output area contains formatted JSON
    expect(outputArea.value).toBe(
      '{\n  "name": "Dylan Lukes",\n  "age": 30\n}'
    );
  });

  // complex JSON formatting test
  test("should format JSON correctly when valid JSON is entered", () => {
    inputArea.value =
      '{ "id":12345,"name":"John Doe", "email": "johndoe@example.com" , "address" : { "street":"123 Main St","city": "Somewhere" , "zipcode":12345} ,"phones" :[ { "type" : "mobile","number" :"123-456-7890" },{ "type": "home" , "number":"098-765-4321"} ], "preferences" : {"contactMethod" :"email", "newsletter":true}}';
    formatBtn.click();

    expect(outputArea.value).toBe(
      '{\n  "id": 12345,\n  "name": "John Doe",\n  "email": "johndoe@example.com",\n  "address": {\n    "street": "123 Main St",\n    "city": "Somewhere",\n    "zipcode": 12345\n  },\n  "phones": [\n    {\n      "type": "mobile",\n      "number": "123-456-7890"\n    },\n    {\n      "type": "home",\n      "number": "098-765-4321"\n    }\n  ],\n  "preferences": {\n    "contactMethod": "email",\n    "newsletter": true\n  }\n}'
    );
  });

  // empty input test
  test("should stay empty on empty input", () => {
    inputArea = "";
    formatBtn.click();

    //The output should be empty
    expect(outputArea.value).toBe("");
  });

  // invalid JSON error test
  test("should indicate error on invalid JSON", () => {
    inputArea.value = '{"name": "Dylan Lukes", "age": 30';
    formatBtn.click();

    // Check that the output area shows the error
    expect(outputArea.value).toMatch(/Error/);
  });

  // successful copy button test
  test("should alert a successful copy of formatted JSON", async () => {
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
    outputArea.value = '{\n  "name": "Dylan Lukes",\n  "age": 30\n}';
    await copyBtn.click();
    expect(clipboardMock).toHaveBeenCalledWith(
      '{\n  "name": "Dylan Lukes",\n  "age": 30\n}'
    );
    expect(alertMock).toHaveBeenCalledWith("Formatted JSON copied to clipboard!");
  });


  // empty output copy alert test
  test("should alert when copying with no formatted JSON", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    outputArea.value = "";
    copyBtn.click();
    expect(alertMock).toHaveBeenCalledWith("Nothing to copy!");
  });

  // successful file download test
  test("should trigger file download when formatted JSON exists", () => {
    // Mock the creation of anchor element
    const mockAnchor = {
      click: jest.fn(),
      href: "",
      download: "",
    };

    const createElementSpy = jest
      .spyOn(document, "createElement")
      .mockImplementation(() => mockAnchor);

    // Mock URL.createObjectURL and revokeObjectURL
    const mockCreateObjectURL = jest.fn().mockReturnValue("blob:mock-url");
    const mockRevokeObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;

    // Set up test data
    outputArea.value = '{"name": "John"}';
    downloadBtn.click();

    // Assertions
    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(mockAnchor.download).toBe("formatted.json");
    expect(mockAnchor.click).toHaveBeenCalled();
    expect(mockCreateObjectURL).toHaveBeenCalledWith(expect.any(Blob));
    expect(mockRevokeObjectURL).toHaveBeenCalledWith("blob:mock-url");
  });

  // empty output download alert test
  test("Should alert if trying to download without formatted JSON", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    outputArea.value = "";
    downloadBtn.click();
    expect(alertMock).toHaveBeenCalledWith(
      "There is no formatted JSON to download."
    );
  });

  // JS cleanup on close test
  test("Should handle cleanup correctly when disconnected", () => {
    const removeEventListenerSpy = jest.spyOn(formatBtn, "removeEventListener");
    jsonFormatterTool.remove();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });
});
