class UnixTimestampConverterTool extends HTMLElement {
  constructor() {
    super();
    this.toolPanel = null;
    this.convertBtn = null;
    this.inputArea = null;
    this.outputArea = null;
  }

  connectedCallback() {
    // Set up the HTML structure when the element is added to the DOM
    this.innerHTML = `
            <link rel="stylesheet" href="unix-timestamp-converter/unix-timestamp-converter-tool.css"> 
            <section class="tool-panel">
              <header class="tool-header">
                <h3>UNIX to UTC</h3>
              </header>
              <hr />
              <section class="tool-content">
                <textarea class="input-area" placeholder="Paste your UNIX timestamp here"></textarea>
                <button class="convert-btn">Convert</button>
                <textarea class="output-area" readonly></textarea>
              </section>
            </section>
          `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.convertBtn = this.querySelector(".convert-btn");
    this.inputArea = this.querySelector(".input-area");
    this.outputArea = this.querySelector(".output-area");

    // Bind event listeners
    this.convertBtn.addEventListener("click", () => this.convertUNIX());
  }

  // how is the documentation getting added with JSDocs? Is this on push to main?
  convertUNIX = () => {
    try {
      const input = this.inputArea.value;
      const unixTimestamp = parseInt(input, 10);

      // More specific error handling
      if (isNaN(unixTimestamp)) {
        throw new Error("Invalid Unix timestamp");
      }

      const date = new Date(unixTimestamp * 1000);
      this.outputArea.value = date.toUTCString();
    } catch (error) {
      this.outputArea.value = `Error: ${error.message}`;
    }
  };

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    if (this.convertBtn)
      this.convertBtn.removeEventListener("click", this.convertUNIX);
  }
}

// Register the custom element
customElements.define(
  "unix-timestamp-converter-tool",
  UnixTimestampConverterTool,
);
