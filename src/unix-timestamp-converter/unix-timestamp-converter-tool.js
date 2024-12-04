class UnixTimestampConverterTool extends HTMLElement {
  constructor() {
    super();
    this.toolPanel = null;
    this.convertUtcBtn = null;
    this.convertIsoBtn = null;
    this.inputArea = null;
    this.outputArea = null;
  }

  connectedCallback() {
    // Set up the HTML structure when the element is added to the DOM
    this.innerHTML = `
            <link rel="stylesheet" href="unix-timestamp-converter/unix-timestamp-converter-tool.css"> 
            <section class="tool-panel">
              <header class="tool-header">
                <h3>UNIX Timestamp Converter</h3>
              </header>
              <hr />
              <section class="tool-content">
                <textarea class="input-area" placeholder="Paste your UNIX timestamp here"></textarea>
                <div class="button-group">
                    <button class="convert-utc-btn">Convert to UTC</button>
                    <button class="convert-iso-btn">Convert to ISO</button>
                </div>
                <textarea class="output-area" readonly></textarea>
              </section>
            </section>
          `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.convertUtcBtn = this.querySelector(".convert-utc-btn");
    this.convertIsoBtn = this.querySelector(".convert-iso-btn");
    this.inputArea = this.querySelector(".input-area");
    this.outputArea = this.querySelector(".output-area");

    // Bind event listeners
    this.convertUtcBtn.addEventListener("click", () => this.convertTime("utc"));
    this.convertIsoBtn.addEventListener("click", () => this.convertTime("iso"));
  }

  convertTime = (format) => {
    try {
      const input = this.inputArea.value;
      const unixTimestamp = parseInt(input, 10);

      // More specific error handling
      if (isNaN(unixTimestamp)) {
        throw new Error("Invalid Unix timestamp");
      }

      const date = new Date(unixTimestamp * 1000);

      // output based on format inputted
      if (format == "utc") {
        this.outputArea.value = date.toUTCString();
      } else if (format == "iso") {
        this.outputArea.value = date.toISOString();
      }
    } catch (error) {
      this.outputArea.value = `Error: ${error.message}`;
    }
  };

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    if (this.convertUtcBtn)
      this.convertUtcBtn.removeEventListener("click", this.convertTime);
    if (this.convertIsoBtn)
      this.convertIsoBtn.removeEventListener("click", this.convertTime);
  }
}

// Register the custom element
customElements.define(
  "unix-timestamp-converter-tool",
  UnixTimestampConverterTool,
);
