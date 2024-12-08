class JWTGeneratorTool extends HTMLElement {
  /**
   * Initializes a new instance of JWT Generator Tool.
   */
  constructor() {
    super();
    this.toolPanel = null;
    this.generateBtn = null;
    this.headerArea = null;
    this.payloadArea = null;
    this.secretKeyArea = null;
    this.outputArea = null;
    this.copyBtn = null;
  }

  /**
   * Called when the element is added to the DOM.
   * Sets up the HTML structure of the tool and stores references to elements.
   * Binds event listeners for the "Format" button.
   */
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="jwt-generator/jwt-generator-tool.css">
    <section class="tool-panel" style="display:none;">
        <header class="tool-header">
            <h3>JWT Token Generator</h3>
        </header>
        <section class="tool-content">
            <textarea class="header-area" placeholder="Paste header data here"></textarea>
            <textarea class="payload-area" placeholder="Paste payload data here"></textarea>
            <textarea class="secret-key-area" placeholder="Paste secret key here"></textarea>
            <button class="generate-btn">Generate</button>
            <textarea class="output-area" readonly></textarea>
            <div align="center" class="button-group">
                <button class="copy-btn">Copy to Clipboard</button>
            </div>
        </section>
    </section>
    `;

    // Store references to elements
    this.toolPanel = this.querySelector(".tool-panel");
    this.generateBtn = this.querySelector(".generate-btn");
    this.headerArea = this.querySelector(".header-area");
    this.payloadArea = this.querySelector(".payload-area");
    this.secretKeyArea = this.querySelector(".secret-key-area");
    this.outputArea = this.querySelector(".output-area");
    this.copyBtn = this.querySelector(".copy-btn");

    // Add event listeners
    this.generateBtn.addEventListener("click", this.generateJWT);
    this.copyBtn.addEventListener("click", this.copyToClipboard.bind(this));
  }

  /* The `generateJWT` function is an asynchronous arrow function defined within the `JWTGeneratorTool`
  class. It is responsible for generating a JSON Web Token (JWT) based on the input provided in the
  header, payload, and secret key areas of the tool.*/
  generateJWT = async () => {
    try {
      // Check if any field is empty before parsing
      const headerValue = this.headerArea.value.trim();
      const payloadValue = this.payloadArea.value.trim();
      const secretKeyValue = this.secretKeyArea.value.trim();
      if (!headerValue || !payloadValue || !secretKeyValue) {
        this.outputArea.value =
          "Error: Header, Payload, and Secret Key must not be empty.";
        this.outputArea.classList.add("error");
        this.copyBtn.disabled = true;
        return;
      }

      // Parse the header and payload JSON
      const header = JSON.parse(this.headerArea.value);
      const payload = JSON.parse(this.payloadArea.value);
      const secretKey = this.secretKeyArea.value;

      // Base64Url encode header and payload
      const encodedHeader = btoa(JSON.stringify(header))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

      const encodedPayload = btoa(JSON.stringify(payload))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

      // Create signature input
      const signatureInput = `${encodedHeader}.${encodedPayload}`;

      // Convert secret key to Uint8Array
      const keyData = new TextEncoder().encode(secretKey);

      // Import the secret key
      const key = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
      );

      // Generate signature
      const signature = await crypto.subtle.sign(
        "HMAC",
        key,
        new TextEncoder().encode(signatureInput),
      );

      // Convert signature to base64url
      const encodedSignature = btoa(
        String.fromCharCode(...new Uint8Array(signature)),
      )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

      // Combine all parts to create the final JWT
      const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

      // Update output area
      this.outputArea.value = jwt;
      this.outputArea.classList.remove("error");
      this.copyBtn.disabled = false;
    } catch (error) {
      // Handle errors
      this.outputArea.value = `Error: ${error.message}`;
      this.outputArea.classList.add("error");
      this.copyBtn.disabled = true;
    }
  };

  disconnectedCallback() {
    if (this.generateBtn)
      this.generateBtn.removeEventListener("click", this.generateJWT);
  }

  copyToClipboard() {
    const output = this.outputArea.value;
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() => alert("JWT token copied to clipboard!"))
        .catch(() => alert("Failed to copy JWT token to clipboard."));
    } else {
      alert("Nothing to copy!");
    }
  }
}

// Register the custom element
customElements.define("jwt-generator-tool", JWTGeneratorTool);
