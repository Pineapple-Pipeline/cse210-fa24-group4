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
  }

  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="uuid-generator/uuid-generator-tool.css">
        <section class="tool-panel">
            <header class="tool-header">
                <h3>UUID Generator</h3>
            </header>
            <hr />
            <section class="tool-content">
                <textarea class="output-area" readonly></textarea>
                <div align="center" class="button-group">
                    <button class="generate-btn">Generate UUID</button>
                    <button class="copy-btn">Copy to Clipboard</button>
                </div>
            </section>
        </section>
        `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.generateBtn = this.querySelector(".generate-btn");
    this.outputArea = this.querySelector(".output-area");
    this.copyBtn = this.querySelector(".copy-btn");

    //Add event listeners
    this.generateBtn.addEventListener("click", this.generateUUID);
    this.copyBtn.addEventListener("click", this.copyToClipboard.bind(this));
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
        .then(() => alert("UUID copied to clipboard!"))
        .catch(() => alert("Failed to copy UUID to clipboard."));
    } else {
      alert("Nothing to copy!");
    }
  }
}

// Register the custom element
customElements.define("uuid-generator-tool", UUIDGeneratorTool);
