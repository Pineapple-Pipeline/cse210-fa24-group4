import { dragElement } from "./draggable.js";

class JsonFormatterTool extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create the base HTML structure
        this.shadowRoot.innerHTML = `
            <style>
            .tool-panel {
                display: none;  /* Hidden by default */
<<<<<<< HEAD
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
=======
                position: absolute;
                top: 20px;
                left: 20px;
>>>>>>> 49a45d9 (Made the component draggable)
                width: 600px;
                background: #f9f9f9;
                border-radius: 8px;
<<<<<<< HEAD
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                padding: 20px;
=======
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                z-index:999;
>>>>>>> 49a45d9 (Made the component draggable)
            }
            
            .tool-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #2c3e50;
                color: white;
                padding: 10px;
                border-radius: 8px 8px 0 0;
            }
            
            .tool-content {
                padding: 20px;
            }

            .input-area, .output-area {
                width: 100%;
                min-height: 150px;
                margin-bottom: 15px; /* Adjusted spacing between input/output */
                padding: 0.8em;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: monospace;
                background: #fcfcfc;
                color: #333;
                resize: none;
            }

            /* Neatly arrange the buttons */
            .button-group {
                display: flex;
                justify-content: center;  /* Center buttons */
                gap: 20px;
                margin-top: 10px;
                margin-bottom: 20px;
            }

            .upload-btn {
                margin-bottom: 15px; /* Space between file upload and input box */
                padding: 6px 12px;   /* Shortened height for the upload button */
                background: #2c3e50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            .upload-btn:hover {
                background: #34495e;
            }

            /* Format button with lighter background and centered */
            .format-btn {
                display: block;
                margin: 0 auto 20px auto; /* Center and add space below */
                padding: 8px 16px;
                background: #f0f0f0;  /* Light background */
                color: #2c3e50;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background 0.3s ease, transform 0.2s ease;
            }

            .format-btn:hover {
                background: #bdc3c7; /* Slightly darker on hover */
            }

            .format-btn:active {
                transform: scale(0.98);
            }

            .copy-btn, .download-btn {
                padding: 8px 16px;
                background: #2c3e50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background 0.3s ease, transform 0.2s ease;
            }

            .copy-btn:hover, .download-btn:hover {
                background: #34495e;
            }

            .copy-btn:active, .download-btn:active {
                transform: scale(0.98);
            }

            .close-btn {
                background: none;
                border: none;
                color: #2c3e50;
                font-size: 1.5em;
                font-weight: bold;
                cursor: pointer;
                transition: transform 0.2s ease, color 0.2s ease;
                line-height: 1;
                padding: 0;
            }

            .tool-panel.active {
                display: block;
            }
            </style>

            <section class="tool-panel">
                <header class="tool-header">
                    <h3>JSON Formatter</h3>
                    <button class="close-btn" aria-label="Close">x</button>
                </header>
                <hr></hr>
                <section class="tool-content">
                    <!-- File upload section -->
                    <input type="file" class="upload-btn" accept=".json" aria-label="Upload JSON File" />
                    
                    <!-- Input area -->
                    <textarea class="input-area" placeholder="Paste or upload JSON here"></textarea>
                    
                    <!-- Format JSON button (Centered) -->
                    <button class="format-btn">Format JSON</button>

                    <!-- Output area -->
                    <textarea class="output-area" readonly></textarea>

                    <!-- Copy/Download buttons -->
                    <div class="button-group">
                        <button class="copy-btn">Copy to Clipboard</button>
                        <button class="download-btn">Download Formatted JSON</button>
                    </div>
                </section>
            </section>
        `;

        // Store references to elements
        this.toolPanel = this.shadowRoot.querySelector('.tool-panel');
        this.closeBtn = this.shadowRoot.querySelector('.close-btn');
        this.formatBtn = this.shadowRoot.querySelector('.format-btn');
        this.copyBtn = this.shadowRoot.querySelector('.copy-btn');
        this.downloadBtn = this.shadowRoot.querySelector('.download-btn');
        this.uploadBtn = this.shadowRoot.querySelector('.upload-btn');
        this.inputArea = this.shadowRoot.querySelector('.input-area');
        this.outputArea = this.shadowRoot.querySelector('.output-area');
        
        dragElement(this.toolPanel);
        // Bind event listeners
        this.closeBtn.addEventListener('click', () => this.hide());
        this.formatBtn.addEventListener('click', () => this.formatJson());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.downloadBtn.addEventListener('click', () => this.downloadJson());
        this.uploadBtn.addEventListener('change', (event) => this.handleFileUpload(event));
    }

    // Show the tool
    show() {
        this.toolPanel.style.display = 'block';
    }

    // Hide the tool
    hide() {
        this.toolPanel.style.display = 'none';
    }

    // Format JSON method
    formatJson() {
        try {
            const input = this.inputArea.value;
            const parsed = JSON.parse(input);
            this.outputArea.value = JSON.stringify(parsed, null, 2);
        } catch (error) {
            this.outputArea.value = `Error: ${error.message}`;
        }
    }

    // Copy formatted JSON to clipboard
    copyToClipboard() {
        const output = this.outputArea.value;
        if (output) {
            navigator.clipboard.writeText(output).then(() => {
                alert("Formatted JSON copied to clipboard!");
            }).catch(() => {
                alert("Failed to copy JSON to clipboard.");
            });
        } else {
            alert("Nothing to copy!");
        }
    }

    // Handle File Upload (JSON file)
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonContent = JSON.parse(e.target.result);
                    this.inputArea.value = JSON.stringify(jsonContent, null, 2);
                } catch (error) {
                    this.inputArea.value = `Error reading file: ${error.message}`;
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid JSON file.');
        }
    }

    // Download Formatted JSON
    downloadJson() {
        const formattedJson = this.outputArea.value;
        if (formattedJson) {
            const blob = new Blob([formattedJson], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'formatted.json';
            a.click();
            URL.revokeObjectURL(url);
        } else {
            alert("There is no formatted JSON to download.");
        }
    }
}

// Register the custom element
customElements.define('json-formatter-tool', JsonFormatterTool);