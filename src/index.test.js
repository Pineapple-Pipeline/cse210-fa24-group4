const initializeApp = require("./index");

describe("initializeApp", () => {
  let contentArea;
  let jsonButton;
  let urlButton;
  let unixButton;
  let toggleBtn;
  let sideBar;

  beforeEach(() => {
    document.body.innerHTML = `
            <div class="dashboard">
                <div id="side-bar" class="sidebar">
                    <div class="sidebar-content">
                        <div class="sidebar-title">Dev Toolkit</div>
                        <button id="json-formatter-button" class="tool-button">
                            JSON Formatter
                        </button>
                        <button id="url-encoder-decoder-button" class="tool-button">
                            URL Encoder/Decoder
                        </button>
                        <button id="unix-timestamp-converter-button" class="tool-button">
                            Unix Timestamp Converter
                        </button>
                    </div>
                </div>
                <div class="toggle-btn" id="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="content-area"></div>
            </div>
        `;

    contentArea = document.querySelector(".content-area");
    jsonButton = document.getElementById("json-formatter-button");
    urlButton = document.getElementById("url-encoder-decoder-button");
    unixButton = document.getElementById("unix-timestamp-converter-button");
    toggleBtn = document.getElementById("toggle-btn");
    sideBar = document.getElementById("side-bar");
    initializeApp();
  });

  test("should load JSON Formatter component when JSON button is clicked", () => {
    jsonButton.click();
    expect(contentArea.innerHTML).toContain(
      "<json-formatter-tool></json-formatter-tool>"
    );
  });

  test("should load URL Encoder/Decoder component when URL button is clicked", () => {
    urlButton.click();
    expect(contentArea.innerHTML).toContain(
      "<url-encoder-decoder-tool></url-encoder-decoder-tool>"
    );
  });

  test("should load Unix Timestamp Converter component when Unix button is clicked", () => {
    unixButton.click();
    expect(contentArea.innerHTML).toContain(
      "<unix-timestamp-converter-tool></unix-timestamp-converter-tool>"
    );
  });

  test("should toggle sidebar visibility when toggle button is clicked", () => {
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(true);
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(false);
  });
});
