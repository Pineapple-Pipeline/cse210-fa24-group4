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
                <textarea class="input-area" placeholder="Paste your URL here"></textarea>
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

  // Method to encode URL
  encodeUrl() {
    const inputText = this.inputArea.value.trim(); // Trim whitespace from the input
    if (inputText === "") {
      this.outputArea.value = "Please enter text to encode.";
      return;
    }
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const fullUrlRegex = new RegExp(expression);

    if (inputText.match(fullUrlRegex)) {
      // Mathes Regex for full URI
      this.outputArea.value = encodeURI(inputText); // Encode the input
    } else {
      this.outputArea.value = encodeURIComponent(inputText); // Encode the input as a component
    }
  }

  // Method to decode URL
  decodeUrl() {
    const inputText = this.inputArea.value.trim(); // Trim whitespace from the input
    if (inputText === "") {
      this.outputArea.value = "Please enter text to decode.";
      return;
    }
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const fullUrlRegex = new RegExp(expression);

    try {
      const decodedText = decodeURI(inputText);
      if (inputText.match(fullUrlRegex)) {
        // Check if it is a component or full URL
        this.outputArea.value = decodedText; // Print full decoded input
      } else {
        this.outputArea.value = decodeURIComponent(inputText); // Decode the input as a component
      }
    } catch (error) {
      this.outputArea.value = `Error: ${error.message}`; // Handle decoding errors
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
