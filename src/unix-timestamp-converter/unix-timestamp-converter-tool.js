class UnixTimestampConverterTool extends HTMLElement {
  /**
   * Creates an instance of UnixTimestampConverterTool.
   *
   * @constructor
   */
  constructor() {
    super();
    this.toolPanel = null;
    this.swapBtn = null;
    this.convertToUtcBtn = null;
    this.convertToIsoBtn = null;
    this.convertToUnixBtn = null;
    this.copyBtn = null;
    this.swapBtn = null;
    this.inputArea = null;
    this.outputArea = null;
    this.copyNotification = null;
  }

  /**
   * Called when the element is added to the DOM.
   * Sets up the HTML structure of the tool and stores references to elements.
   */
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

        <section class="tool-content">
          <textarea class="input-area" placeholder="Paste a timestamp in UNIX, UTC, or ISO format here"></textarea>
          <div class="button-group">
            <button class="convert-to-utc-btn">Convert TO UTC</button>
            <button class="convert-to-iso-btn">Convert TO ISO</button>
          </div>
          <button class="convert-to-unix-btn">Convert TO UNIX</button>
          <textarea class="output-area" readonly></textarea>
          <div align="center" class="copy-btn-container">
            <div class="notification-wrapper">
              <div class="notification">Copied to clipboard!</div>
            </div>
            <button class="copy-btn">Copy to Clipboard</button>
          </div>
        </section>
      </section>
    `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.swapBtn = this.querySelector(".swap-btn");
    this.convertToUtcBtn = this.querySelector(".convert-to-utc-btn");
    this.convertToIsoBtn = this.querySelector(".convert-to-iso-btn");
    this.convertToUnixBtn = this.querySelector(".convert-to-unix-btn");
    this.copyBtn = this.querySelector(".copy-btn");
    this.inputArea = this.querySelector(".input-area");
    this.outputArea = this.querySelector(".output-area");
    this.copyNotification = this.querySelector(
      ".copy-btn-container .notification",
    );

    // Bind event listeners
    this.swapBtn.addEventListener("click", () => this.swapMode());
    this.convertToUtcBtn.addEventListener("click", () =>
      this.convertFromUnix("utc"),
    );
    this.convertToIsoBtn.addEventListener("click", () =>
      this.convertFromUnix("iso"),
    );
    this.convertToUnixBtn.addEventListener("click", () => this.convertToUnix());
    this.copyBtn.addEventListener("click", () => this.copyToClipboard());
  }

  /**
   * Shows the notification on top of target button
   *
   * @param notification - notification element
   * @param message - message to display
   */
  showNotification(notification, message) {
    notification.textContent = message;
    notification.classList.add("show");

    // Hide notification after 2 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 1000);
  }

  /** Swaps conditional .tool-panel state */
  swapMode = () => {
    this.toolPanel.classList.toggle("swapped");
  };

  /**
   * Converts from unix timstamp to either iso or utc
   * formats depending on format parameter
   *
   * @param format - either "utc" or "iso"
   */
  convertFromUnix = (format) => {
    try {
      const input = this.inputArea.value.trim();
      const unixTimestamp = parseInt(input, 10);

      // More specific error handling
      if (isNaN(unixTimestamp)) {
        throw new Error("Error: Invalid Unix timestamp");
      }

      const date = new Date(unixTimestamp * 1000);

      // output based on format inputted
      if (format == "utc") {
        this.outputArea.value = date.toUTCString();
      } else if (format == "iso") {
        this.outputArea.value = date.toISOString();
      }
    } catch (error) {
      this.outputArea.value = `${error.message}`;
    }
  };

  /**
   * Converts from either UTC or ISO format to Unix timestamp
   */
  convertToUnix = () => {
    try {
      const input = this.inputArea.value.trim();
      const date = new Date(input);

      // catch invalid dates and formats
      if (isNaN(date.getTime())) {
        this.outputArea.value = "Error: Invalid date format";
      }

      // convert to unix timestamp
      const unixTimestamp = date.getTime() / 1000;

      if (isNaN(unixTimestamp)) {
        this.outputArea.value = "Error: Invalid date format";
      } else {
        this.outputArea.value = unixTimestamp;
      }
    } catch (error) {
      this.outputArea.value = `${error.message}`;
    }
  };

  /**
   * Copies the output to the clipboard
   */
  copyToClipboard() {
    const output = this.outputArea.value;
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() =>
          this.showNotification(this.copyNotification, "Copied to clipboard!"),
        );
    } else {
      console.log("here");
      this.showNotification(this.copyNotification, "Nothing to copy!");
    }
  }

  /**
   * Cleans up event listeners when the element is removed from the DOM.
   */
  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    if (this.swapBtn) this.swapBtn.removeEventListener("click", this.swapMode);
    if (this.convertToUtcBtn)
      this.convertToUtcBtn.removeEventListener(
        "click",
        this.convertFromUnix("utc"),
      );
    if (this.convertToIsoBtn)
      this.convertToIsoBtn.removeEventListener(
        "click",
        this.convertFromUnix("iso"),
      );
    if (this.convertToUnixBtn)
      this.convertToUnixBtn.removeEventListener("click", this.convertToUnix);
    if (this.copyBtn)
      this.copyBtn.removeEventListener("click", this.copyToClipboard);
  }
}

// Register the custom element
customElements.define(
  "unix-timestamp-converter-tool",
  UnixTimestampConverterTool,
);
