class UrlEncoderDecoderTool extends HTMLElement {
  constructor() {
    super();
    this.toolPanel = null;
    this.encodeBtn = null;
    this.decodeBtn = null;
    this.clearBtn = null;
    this.inputArea = null;
    this.outputArea = null;
  }

  connectedCallback() {
    // Set up the HTML structure when the element is added to the DOM
    this.innerHTML = `
          <link rel="stylesheet" href="url-encoder-decoder/url-encoder-decoder-tool.css"> 
          <section class="tool-panel">
            <header class="tool-header">
              <h3>URL Encoder/Decoder</h3>
            </header>
            <hr />
            <section class="tool-content">
              <div class="tool-row">
                <textarea class="input-area" placeholder="Enter text here"></textarea>
                <textarea class="output-area" placeholder=" " readonly></textarea>
              </div>
              <div class="tool-buttons">
                <button class="encode-btn">Encode</button>
                <button class="decode-btn">Decode</button>
                <button class="clear-btn">Clear</button>
              </div>
            </section>
          </section>
        `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.encodeBtn = this.querySelector(".encode-btn");
    this.decodeBtn = this.querySelector(".decode-btn");
    this.clearBtn = this.querySelector(".clear-btn");
    this.inputArea = this.querySelector(".input-area");
    this.outputArea = this.querySelector(".output-area");

    // Bind event listeners
    this.encodeBtn.addEventListener("click", () => this.encodeUrl());
    this.decodeBtn.addEventListener("click", () => this.decodeUrl());
    this.clearBtn.addEventListener("click", () => this.clearAreas());
  }

  // Method to validate a URL
  isValidUrl(url) {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // Validate the protocol (http or https, optional)
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // Domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IPv4 address
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // Port and path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // Query string
        "(\\#[-a-zA-Z\\d_]*)?$", // Fragment locator
      "i"
    );
    return !!urlPattern.test(url); // Test if the input matches the pattern
  }

  // Method to encode URL
  encodeUrl() {
    const inputText = this.inputArea.value;
    if (inputText.trim() === "") {
      this.outputArea.value = "Please enter text to encode.";
      return;
    }

    if (!this.isValidUrl(inputText)) {
      this.outputArea.value =
        "Invalid URL. Please enter a proper URL to encode.";
      return;
    }

    this.outputArea.value = encodeURIComponent(inputText);
  }

  // Method to decode URL
  decodeUrl() {
    const inputText = this.inputArea.value;
    if (inputText.trim() === "") {
      this.outputArea.value = "Please enter text to decode.";
      return;
    }
    try {
      this.outputArea.value = decodeURIComponent(inputText);
    } catch (error) {
      this.outputArea.value = `Error: ${error.message}`;
    }
  }

  // Method to clear both input and output areas
  clearAreas() {
    this.inputArea.value = "";
    this.outputArea.value = "";
  }

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    this.encodeBtn.removeEventListener("click", () => this.encodeUrl());
    this.decodeBtn.removeEventListener("click", () => this.decodeUrl());
    this.clearBtn.removeEventListener("click", () => this.clearAreas());
  }
}

// Register the custom element
customElements.define("url-encoder-decoder-tool", UrlEncoderDecoderTool);
