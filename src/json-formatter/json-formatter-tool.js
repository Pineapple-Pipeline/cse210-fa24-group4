class JsonFormatterTool extends HTMLElement {
  /**
   * Initializes a new instance of JsonFormatterTool.
   * Sets up initial properties for toolPanel, formatBtn, inputArea, and outputArea as null.
   */
  constructor() {
    super();
    this.toolPanel = null;
    this.formatBtn = null;
    this.inputArea = null;
    this.outputArea = null;
    this.copyBtn = null;
    this.downloadBtn = null;
    this.uploadBtn = null;
  }

  /**
   * Called when the element is added to the DOM.
   * Sets up the HTML structure of the tool and stores references to elements.
   * Binds event listeners for the "Format" button.
   */
  connectedCallback() {
    // Set up the HTML structure when the element is added to the DOM
    this.innerHTML = `
      <link rel="stylesheet" href="json-formatter/json-formatter-tool.css"> 
      <section class="tool-panel">
        <header class="tool-header">
          <h3>JSON Formatter</h3>
        </header>
        <section class="tool-content">
          <textarea class="input-area" placeholder="Paste your JSON here"></textarea>
          <button class="format-btn">Format</button>
          <textarea class="output-area" readonly></textarea>
          <div align="center" class="button-group">
            <button class="copy-btn">Copy to Clipboard</button>
            <button class="download-btn">Download Formatted JSON</button>
          </div> 
        </section>
      </section>
      `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.formatBtn = this.querySelector(".format-btn");
    this.inputArea = this.querySelector(".input-area");
    this.outputArea = this.querySelector(".output-area");
    this.copyBtn = this.querySelector(".copy-btn");
    this.downloadBtn = this.querySelector(".download-btn");

    // Bind event listeners
    this.formatBtn.addEventListener("click", this.formatJson);
    this.copyBtn.addEventListener("click", this.copyToClipboard.bind(this));
    this.downloadBtn.addEventListener("click", this.downloadJson.bind(this));
  }

  /**
   * Formats the input JSON and updates the output area.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
   */
  formatJson = () => {
    try {
      const input = this.inputArea.value;
      if (input) {
        const parsed = JSON.parse(input);
        this.outputArea.value = JSON.stringify(parsed, null, 2);
      }
    } catch (error) {
      this.outputArea.value = `Error: ${error.message}`;
    }
  };

  /**
   * Cleans up event listeners when the element is removed from the DOM.
   * @see https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    if (this.formatBtn)
      this.formatBtn.removeEventListener("click", this.formatJson);
    if (this.copyBtn)
      this.copyBtn.removeEventListener("click", this.copyToClipboard);
    if (this.downloadBtn)
      this.downloadBtn.removeEventListener("click", this.downloadJson);
    if (this.uploadBtn)
      this.uploadBtn.removeEventListener("change", this.handleFileUpload);
  }
  copyToClipboard() {
    const output = this.outputArea.value;
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() => alert("Formatted JSON copied to clipboard!"))
        .catch(() => alert("Failed to copy JSON to clipboard."));
    } else {
      alert("Nothing to copy!");
    }
  }

  downloadJson() {
    const formattedJson = this.outputArea.value;
    if (formattedJson) {
      const blob = new Blob([formattedJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "formatted.json";
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert("There is no formatted JSON to download.");
    }
  }
}

// Register the custom element
customElements.define("json-formatter-tool", JsonFormatterTool);
