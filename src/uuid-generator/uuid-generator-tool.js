class UUIDGeneratorTool extends HTMLElement {
  /**
   * Initializes a new instance of the UUID Generator Tool.
   */
  constructor() {
    super();
    this.toolPanel = null;
    this.generateBtn = null;
    this.outputArea = null;
    this.copyBtn = null;
    this.copyNotification = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="uuid-generator/uuid-generator-tool.css">
        <section class="tool-panel" style="display:none;">
            <header class="tool-header">
                <h3>UUID Generator</h3>
            </header>
            <section class="tool-content">
                <textarea class="output-area" readonly></textarea>
                <div align="center" class="button-group">
                    <button class="generate-btn">Generate UUID</button>
                    <div class="copy-btn-container">
                      <div class="notification-wrapper">
                        <div class="notification">Copied to clipboard!</div>
                      </div>
                      <button class="copy-btn">Copy to Clipboard</button>
                    </div>
                </div>
            </section>
        </section>
        `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.generateBtn = this.querySelector(".generate-btn");
    this.outputArea = this.querySelector(".output-area");
    this.copyBtn = this.querySelector(".copy-btn");
    this.copyNotification = this.querySelector(
      ".copy-btn-container .notification"
    );

    //Add event listeners
    this.generateBtn.addEventListener("click", this.generateUUID);
    this.copyBtn.addEventListener("click", this.copyToClipboard.bind(this));
  }

  /**
   * The `showNotification` function displays a message in a notification element for a short period of
   * time before hiding it.
   * @param notification - The `notification` parameter is a reference to the HTML element that will
   * display the notification message to the user.
   * @param message - The `message` parameter is the text content that you want to display in the
   * notification element. It is the message that will be set as the text content of the `notification`
   * element when the `showNotification` function is called.
   */
  showNotification(notification, message) {
    notification.textContent = message;
    notification.classList.add("show");
    console.log("here");

    // Hide notification after 2 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 1000);
  }

  generateUUID = async () => {
    // Create a Uint8Array of 16 random bytes
    const buffer = new Uint8Array(16);
    await crypto.getRandomValues(buffer);

    // Set version (4) and variant (RFC4122)
    buffer[6] = (buffer[6] & 0x0f) | 0x40; // version 4
    buffer[8] = (buffer[8] & 0x3f) | 0x80; // variant RFC4122

    // Convert to hex string with proper formatting
    const hex = Array.from(buffer)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    // Insert dashes according to UUID format
    this.outputArea.value = `\n${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  };

  disconnectedCallback() {
    if (this.generateBtn)
      this.generateBtn.removeEventListener("click", this.generateUUID);
  }

  copyToClipboard() {
    const output = this.outputArea.value;
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() =>
          this.showNotification(this.copyNotification, "Copied to clipboard!")
        )
        .catch(() =>
          this.showNotification(
            this.copyNotification,
            "Failed to copy to clipboard"
          )
        );
    } else {
      this.showNotification(this.copyNotification, "Nothing to copy!");
    }
  }
}

// Register the custom element
customElements.define("uuid-generator-tool", UUIDGeneratorTool);
