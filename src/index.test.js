const {
  initializeApp,
  initializeFeatureButtons,
  initializeSidebarToggleButton,
  loadFeatureComponent,
} = require("./index");

class JsonFormatterTool extends HTMLElement {}
class UrlEncoderDecoderTool extends HTMLElement {}
class UnixTimestampConverterTool extends HTMLElement {}
class AboutUs extends HTMLElement {}

customElements.define("json-formatter-tool", JsonFormatterTool);
customElements.define("url-encoder-decoder-tool", UrlEncoderDecoderTool);
customElements.define(
  "unix-timestamp-converter-tool",
  UnixTimestampConverterTool,
);
customElements.define("about-us", AboutUs);

describe("loadFeatureComponent", () => {
  let contentArea;

  beforeEach(() => {
    document.body.innerHTML = '<div class="content-area"></div>';
    contentArea = document.querySelector(".content-area");
  });

  test("should display error message if component is not defined", async () => {
    const componentName = "undefined-component";

    await loadFeatureComponent(componentName, contentArea);

    expect(contentArea.innerHTML).toContain(
      "Failed to load component: undefined-component",
    );
  });

  test("should load about-us component without error", async () => {
    await loadFeatureComponent("about-us", contentArea);

    expect(contentArea.innerHTML).toContain("<about-us></about-us>");
  });
});

describe("initializeSidebarToggleButton", () => {
  let toggleBtn;
  let sideBar;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="dashboard">
        <div id="side-bar" class="sidebar">
          <div class="sidebar-content">
            <div class="sidebar-title">Dev Toolkit</div>
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

    toggleBtn = document.getElementById("toggle-btn");
    sideBar = document.getElementById("side-bar");

    initializeSidebarToggleButton();
  });

  test("should toggle sidebar visibility when toggle button is clicked", () => {
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(true);
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(false);
  });

  test("should log an error if toggle button is not found", () => {
    console.error = jest.fn();

    document.body.innerHTML = `
      <div class="dashboard">
        <div id="side-bar" class="sidebar">
          <div class="sidebar-content">
            <div class="sidebar-title">Dev Toolkit</div>
          </div>
        </div>
        <div class="content-area"></div>
      </div>
    `;

    initializeSidebarToggleButton();
    expect(console.error).toHaveBeenCalledWith("Toggle button not found.");
  });
});

describe("initializeFeatureButtons", () => {
  let contentArea;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="dashboard">
        <div id="side-bar" class="sidebar">
          <div class="sidebar-content">
            <div class="sidebar-title">Dev Toolkit</div>
            <button id="json-formatter-button" class="tool-button">
              JSON Formatter
            </button>
          </div>
        </div>
        <div class="content-area"></div>
      </div>
    `;

    contentArea = document.querySelector(".content-area");
  });

  test("should log an error if a button is not found", () => {
    console.error = jest.fn();

    const featureComponents = {
      "json-formatter-button": "json-formatter-tool",
      "url-encoder-decoder-button": "url-encoder-decoder-tool",
    };

    initializeFeatureButtons(featureComponents, contentArea);
    expect(console.error).toHaveBeenCalledWith(
      "Button with ID url-encoder-decoder-button not found.",
    );
  });
});

describe("initializeApp", () => {
  let contentArea;
  let jsonButton;
  let urlButton;
  let unixButton;

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
    const featureComponents = {
      "json-formatter-button": "json-formatter-tool",
      "url-encoder-decoder-button": "url-encoder-decoder-tool",
      "unix-timestamp-converter-button": "unix-timestamp-converter-tool",
    };
    initializeApp(featureComponents);
  });

  test("should load JSON Formatter component when JSON button is clicked", () => {
    jsonButton.click();
    expect(contentArea.innerHTML).toContain(
      "<json-formatter-tool></json-formatter-tool>",
    );
  });

  test("should load URL Encoder/Decoder component when URL button is clicked", () => {
    urlButton.click();
    expect(contentArea.innerHTML).toContain(
      "<url-encoder-decoder-tool></url-encoder-decoder-tool>",
    );
  });

  test("should load Unix Timestamp Converter component when Unix button is clicked", () => {
    unixButton.click();
    expect(contentArea.innerHTML).toContain(
      "<unix-timestamp-converter-tool></unix-timestamp-converter-tool>",
    );
  });
});
