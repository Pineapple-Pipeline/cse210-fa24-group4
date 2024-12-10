class UnixTimestampConverterTool extends HTMLElement {
  constructor() {
    super();
    this.toolPanel = null;
    this.swapBtn = null;
    this.convertToUtcBtn = null;
    this.convertToIsoBtn = null;
    this.convertToUnixBtn = null;
    this.fromCopyBtn = null;
    this.toCopyBtn = null;
    this.toInputArea = null;
    this.fromInputArea = null;
    this.toOutputArea = null;
    this.fromOutputArea = null;
  }

  connectedCallback() {
    // Set up the HTML structure when the element is added to the DOM
    this.innerHTML = `
      <link rel="stylesheet" href="unix-timestamp-converter/unix-timestamp-converter-tool.css"> 
      <section class="tool-panel">
        <header class="tool-header">
          <h3 class="from-tool-header">UNIX to UTC/ISO Converter</h3>
          <h3 class="to-tool-header">UTC/ISO to UNIX Converter</h3>
          <button class="swap-btn">⟺</button>
        </header>
        <hr />

        <section class="from-tool-content">
          <textarea class="from-input-area" placeholder="Enter UNIX timestamp (e.g., 999999)"></textarea>
          <div class="button-group">
            <button class="convert-to-utc-btn">Convert TO UTC</button>
            <button class="convert-to-iso-btn">Convert TO ISO</button>
          </div>
          <textarea class="from-output-area" readonly></textarea>
          <button class="from-copy-btn">Copy to Clipboard</button>
        </section>

        <section class="to-tool-content">
          <textarea class="to-input-area" placeholder="Enter UTC/ISO time (e.g., 2021-10-01T00:00:00Z)"></textarea>
          <button class="convert-to-unix-btn">Convert TO UNIX</button>
          <textarea class="to-output-area" readonly></textarea>
          <button class="to-copy-btn">Copy to Clipboard</button>
        </section>
      </section>
    `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.swapBtn = this.querySelector(".swap-btn");
    this.convertToUtcBtn = this.querySelector(".convert-to-utc-btn");
    this.convertToIsoBtn = this.querySelector(".convert-to-iso-btn");
    this.convertToUnixBtn = this.querySelector(".convert-to-unix-btn");
    this.fromCopyBtn = this.querySelector(".from-copy-btn");
    this.toCopyBtn = this.querySelector(".to-copy-btn");
    this.toInputArea = this.querySelector(".to-input-area");
    this.fromInputArea = this.querySelector(".from-input-area");
    this.toOutputArea = this.querySelector(".to-output-area");
    this.fromOutputArea = this.querySelector(".from-output-area");

    // Bind event listeners
    this.swapBtn.addEventListener("click", () => this.swapMode());
    this.convertToUtcBtn.addEventListener("click", () =>
      this.convertFromUnix("utc")
    );
    this.convertToIsoBtn.addEventListener("click", () =>
      this.convertFromUnix("iso")
    );
    this.convertToUnixBtn.addEventListener("click", () => this.convertToUnix());
    this.fromCopyBtn.addEventListener("click", () =>
      this.copyToClipboard("from")
    );
    this.toCopyBtn.addEventListener("click", () => this.copyToClipboard("to"));
  }

  swapMode = () => {
    this.toolPanel.classList.toggle("swapped");
  };

  convertFromUnix = (format) => {
    try {
      const input = this.fromInputArea.value;
      const unixTimestamp = parseInt(input, 10);

      // More specific error handling
      if (isNaN(unixTimestamp)) {
        throw new Error("Invalid Unix timestamp");
      }

      const date = new Date(unixTimestamp * 1000);

      // output based on format inputted
      if (format == "utc") {
        this.fromOutputArea.value = date.toUTCString();
      } else if (format == "iso") {
        this.fromOutputArea.value = date.toISOString();
      }
    } catch (error) {
      this.fromOutputArea.value = `Error: ${error.message}`;
    }
  };

  convertToUnix = () => {
    try {
      const input = this.toInputArea.value;
      const date = new Date(input);

      // catch invalid dates and formats
      if (isNaN(date.getTime())) {
        this.toOutputArea.value = "Error: Invalid date format";
      }

      // convert to unix timestamp
      const unixTimestamp = date.getTime() / 1000;
      this.toOutputArea.value = unixTimestamp;
    } catch (error) {
      this.toOutputArea.value = `Error: ${error.message}`;
    }
  };

  copyToClipboard(state) {
    let output = ""; // why does this only work if it's a let statement???
    if (state == "from") {
      output = this.fromOutputArea.value;
    } else if (state == "to") {
      output = this.toOutputArea.value;
    }

    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() => alert("Timestamp copied to clipboard!"))
        .catch(() => alert("Failed to copy timestamp to clipboard."));
    } else {
      alert("Nothing to copy!");
    }
  }

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    if (this.swapBtn) this.swapBtn.removeEventListener("click", this.swapMode);
    if (this.convertToUtcBtn)
      this.convertToUtcBtn.removeEventListener(
        "click",
        this.convertFromUnix("utc")
      );
    if (this.convertToIsoBtn)
      this.convertToIsoBtn.removeEventListener(
        "click",
        this.convertFromUnix("iso")
      );
    if (this.convertToUnixBtn)
      this.convertToUnixBtn.removeEventListener("click", this.convertToUnix);
    if (this.fromCopyBtn)
      this.fromCopyBtn.removeEventListener(
        "click",
        this.copyToClipboard("from")
      );
    if (this.toCopyBtn)
      this.toCopyBtn.removeEventListener("click", this.copyToClipboard("to"));
  }
}

// Register the custom element
customElements.define(
  "unix-timestamp-converter-tool",
  UnixTimestampConverterTool
);
