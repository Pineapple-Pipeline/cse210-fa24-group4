/**
 * Loads a new feature component into the content area, clearing any existing content first.
 * @param {string} componentName - The name of the custom element to load.
 * @param {HTMLElement} contentArea - The element to load the feature component into.
 */
const loadFeatureComponent = (componentName, contentArea) => {
  // Clear any existing content in the content area
  contentArea.innerHTML = "";

  // Create the new feature component
  const newFeature = document.createElement(componentName);
  contentArea.appendChild(newFeature);
};

/**
 * Initializes feature buttons by attaching an event listener to each that
 * will load its associated feature component into the content area when
 * clicked.
 * @param {Object<string, string>} featureComponents - An object mapping
 *   feature button IDs to the names of the custom elements that
 *   represent the features to be loaded.
 * @param {HTMLElement} contentArea - The element to load the feature
 *   components into.
 */
const initializeFeatureButtons = (featureComponents, contentArea) => {
  for (const buttonId in featureComponents) {
    const button = document.getElementById(buttonId);

    if (button) {
      button.addEventListener("click", () => {
        loadFeatureComponent(featureComponents[buttonId], contentArea);
      });
    }
  }
};

/**
 * Toggles the 'active' class on the sidebar element to show or hide it.
 */
const toggleSidebar = () => {
  const sideBar = document.getElementById("side-bar");
  sideBar.classList.toggle("active");
};

/**
 * Initializes the toggle button for the sidebar by attaching an event listener
 * that calls the toggleSidebar function when the button is clicked.
 */
const initializeSidebarToggleButton = () => {
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleSidebar);
  }
};
/**
 * Initializes the theme toggle button by attaching an event listener that
 * toggles the document's "data-theme" attribute between "light" and "dark"
 * when clicked. The value of the attribute is also saved in localStorage.
 */
const initializeDarkMode = () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Add click event listener to toggle theme
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "L" : "D";
  });
};

/**
 * Initializes the application by setting up the main content area and
 * defining feature components. It attaches event listeners to the feature
 * buttons to load their respective components into the content area and also
 * sets up the sidebar toggle button to show or hide the sidebar.
 */
const initializeApp = () => {
  const contentArea = document.querySelector(".content-area");

  // Define each feature's component
  const featureComponents = {
    "json-formatter-button": "json-formatter-tool",
    "url-encoder-decoder-button": "url-encoder-decoder-tool",
    "unix-timestamp-converter-button": "unix-timestamp-converter-tool",
    // Add other features and their corresponding component tags here
  };

  // Initialize the feature buttons
  initializeFeatureButtons(featureComponents, contentArea);

  // Initialize the sidebar toggle button
  initializeSidebarToggleButton();

  // Initialize the dark mode bcoutton
  initializeDarkMode();
};

// Initialize the application when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);
module.exports = initializeApp;
