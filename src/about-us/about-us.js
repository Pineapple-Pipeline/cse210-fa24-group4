class AboutUs extends HTMLElement {
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Sets the initial HTML content of the custom element.
   * 
   * This method is called when the element is inserted into the DOM.
   * It sets the innerHTML of the element to the content of the about-us
   * component, which includes the HTML and CSS for the component.
   * 
/******  f9788eae-357d-4bb9-b127-baa92cbe690b  *******/
  connectedCallback() {
    this.innerHTML = `
    <style>
        .about-us {
          color: white;
          background-color: #333; /* Optional: Add a background color for better contrast */
          padding: 20px;
          border-radius: 8px;
        }
        .about-us h1 {
          font-size: 2em;
          margin-bottom: 10px;
        }
        .about-us p {
          font-size: 1.2em;
          line-height: 1.5;
        }
      </style>
        <div class="about-us">
          <h1>About Us</h1>
          <p>Welcome to our application! We are dedicated to providing the best tools for your needs.</p>
          <p>Our team is composed of experienced developers who are passionate about creating useful and efficient software solutions.</p>
          <p>Feel free to explore our features and tools. If you have any questions, don't hesitate to contact us.</p>
        </div>
      `;
  }
}

// Register the custom element
customElements.define('about-us', AboutUs);
