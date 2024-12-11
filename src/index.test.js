const {
  initializeApp,
  initializeFeatureButtons,
  initializeSidebarToggleButton,
  loadFeatureComponent,
  initializeDarkMode,
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

  test("should display error message if component is not defined", () => {
    const componentName = "undefined-component";

    loadFeatureComponent(componentName, contentArea);

    expect(contentArea.innerHTML).toContain(
      "Failed to load component: undefined-component",
    );
  });

  test("should load about-us component without error", () => {
    loadFeatureComponent("about-us", contentArea);

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

describe("initializeDarkMode", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="theme-toggle"></button>
    `;
  });

  test("theme toggle button is found and initialized correctly", () => {
    initializeDarkMode();
    expect(document.getElementById("theme-toggle")).not.toBeNull();
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  test("theme toggle button is not found and error is logged", () => {
    document.body.innerHTML = "";
    console.error = jest.fn();
    initializeDarkMode();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      "Theme toggle button not found.",
    );
  });

  test("saved theme is retrieved from localStorage and applied correctly", () => {
    localStorage.setItem("theme", "dark");
    initializeDarkMode();
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  test("theme is toggled correctly when button is clicked", () => {
    localStorage.setItem("theme", "dark");
    initializeDarkMode();
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.click();
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    themeToggle.click();
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});

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
                        <button id="theme-toggle" class="theme-toggle">𖤓</button>
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

    const featureComponents = {
      "json-formatter-button": "json-formatter-tool",
      "url-encoder-decoder-button": "url-encoder-decoder-tool",
      "unix-timestamp-converter-button": "unix-timestamp-converter-tool",
    };
    localStorage.clear();
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

  test("should toggle sidebar visibility when toggle button is clicked", () => {
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(true);
    toggleBtn.click();
    expect(sideBar.classList.contains("active")).toBe(false);
  });

  test("dark mode initialize correctly", () => {
    const htmlElement = document.documentElement; // This refers to the <html> tag

    initializeDarkMode();
    expect(htmlElement.getAttribute("data-theme")).toBe("light");
  });
});
