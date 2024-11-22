class UrlEncoderDecoderTool extends HTMLElement {
  constructor() {
    super();
    this.toolPanel = null;
    // this.formatBtn = null;
    // this.inputArea = null;
    // this.outputArea = null;
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
              <p>Make your tools here</p>
            </section>
          </section>
        `;

    // Store references to elements
    this.toolPanel = this.querySelector('.tool-panel');
    // this.formatBtn = this.querySelector('.encode-decode-btn');
    // this.inputArea = this.querySelector('.input-area');
    // this.outputArea = this.querySelector('.output-area');

    // Bind event listeners
    //this.formatBtn.addEventListener('click', () => this.formatJson());
  }

  //Add more methods as needed

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
  }
}

// Register the custom element
customElements.define('url-encoder-decoder-tool', UrlEncoderDecoderTool);
