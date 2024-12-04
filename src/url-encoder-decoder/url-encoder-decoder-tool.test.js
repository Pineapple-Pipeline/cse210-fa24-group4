/**
 * @jest-environment jsdom
 */
require("./url-encoder-decoder-tool");

describe("UrlEncoderDecoder", () => {
  let urlEncoderDecoder;
  let encodeBtn;
  let decodeBtn;
  let clearBtn;
  let inputArea;
  let outputArea;

  beforeEach(() => {
    document.body.innerHTML = `
        <url-encoder-decoder-tool></url-encoder-decoder-tool>
      `;

    // Get references to elements inside the custom element
    urlEncoderDecoder = document.querySelector("url-encoder-decoder-tool");
    encodeBtn = urlEncoderDecoder.querySelector(".encode-btn");
    decodeBtn = urlEncoderDecoder.querySelector(".decode-btn");
    clearBtn = urlEncoderDecoder.querySelector(".clear-btn");
    inputArea = urlEncoderDecoder.querySelector(".input-area");
    outputArea = urlEncoderDecoder.querySelector(".output-area");
  });

  test("Should render the URL Encoder Decoder tool correctly", () => {
    expect(encodeBtn).toBeTruthy();
    expect(decodeBtn).toBeTruthy();
    expect(clearBtn).toBeTruthy();
    expect(inputArea).toBeTruthy();
    expect(outputArea).toBeTruthy();
  });

  test("should encode URL correctly when valid URL is entered", () => {
    // Input valid URL and trigger the encode button
    inputArea.value =
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_encodeuricomponent";
    encodeBtn.click();

    // Check that the output area contains encoded URL
    expect(outputArea.value).toBe(
      "https%3A%2F%2Fwww.w3schools.com%2Fjsref%2Ftryit.asp%3Ffilename%3Dtryjsref_encodeuricomponent",
    );
  });

  test("should decode complete encoded URL correctly when valid encoded URL is entered", () => {
    // Input valid encoded URL and trigger the decode button
    inputArea.value =
      "https%3A%2F%2Fwww.w3schools.com%2Fjsref%2Ftryit.asp%3Ffilename%3Dtryjsref_encodeuricomponent";
    decodeBtn.click();

    // Check that the output area contains encoded URL
    expect(outputArea.value).toBe(
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_encodeuricomponent",
    );
  });

  test("encode should respond correctly when input is empty", () => {
    // Attempt to encode a blank input
    inputArea.value = "";
    encodeBtn.click();

    // The output should be empty
    expect(outputArea.value).toBe("Please enter text to encode.");
  });

  test("decode should respond correctly when input is empty", () => {
    // Attempt to encode a blank input
    inputArea.value = "";
    decodeBtn.click();

    // The output should be empty
    expect(outputArea.value).toBe("Please enter text to decode.");
  });

  test("clear button should clear both input and output areas", () => {
    // Fills up input and output area
    inputArea.value =
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_encodeuricomponent";
    encodeBtn.click();

    // Confirm output area is full
    expect(outputArea.value).toBe(
      "https%3A%2F%2Fwww.w3schools.com%2Fjsref%2Ftryit.asp%3Ffilename%3Dtryjsref_encodeuricomponent",
    );

    // Use Clear button
    clearBtn.click();

    // Check to see if areas are empty
    expect(inputArea.value).toBe("");
    expect(outputArea.value).toBe("");
  });

  test("should indicate error on invalid encoded URL", () => {
    inputArea.value = "%94";
    decodeBtn.click();

    // Check that the output area shows the error
    expect(outputArea.value).toMatch(/Error/);
  });
});
