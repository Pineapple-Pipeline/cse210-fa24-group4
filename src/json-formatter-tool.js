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
                position: absolute;
                top: 20px;
                left: 20px;
                width: 600px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                z-index:999;
            }
            
            .tool-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px;
                background: white;
                border-radius: 8px 8px 0 0;
            }
            
            .tool-content {
                padding: 20px;
            }
            
            .input-area, .output-area {
                position: relative;
                width: 90%;
                min-height: 150px;
                margin-bottom: 10px;
                padding: 0.8em;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: monospace;
            }
            
            .format-btn {
                display: block;
                margin: 10px 0;
                padding: 8px 16px;
                background: #2c3e50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
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
            
            /* Show the tool when active */
            .tool-panel.active {
                display: block;
            }
            </style>

            <section class="tool-panel">
                <header class="tool-header">
                    <h3>JSON Formatter</h3>
                    <button class="close-btn" arial-label="Close">x</button>
                </header>
                <hr></hr>
                <section class="tool-content">
                    <textarea class="input-area" placeholder="Paste your JSON here"></textarea>
                    <button class="format-btn">Format JSON</button>
                    <textarea class="output-area" readonly></textarea>
                </section>
            </section>
        `;

        // Store references to elements
        this.toolPanel = this.shadowRoot.querySelector('.tool-panel');
        this.closeBtn = this.shadowRoot.querySelector('.close-btn');
        this.formatBtn = this.shadowRoot.querySelector('.format-btn');
        this.inputArea = this.shadowRoot.querySelector('.input-area');
        this.outputArea = this.shadowRoot.querySelector('.output-area');
        
        dragElement(this.toolPanel);
        // Bind event listeners
        this.closeBtn.addEventListener('click', () => this.hide());
        this.formatBtn.addEventListener('click', () => this.formatJson());
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
}

// Register the custom element
customElements.define('json-formatter-tool', JsonFormatterTool);