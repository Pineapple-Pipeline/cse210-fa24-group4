/**
 * Loads a custom element into the specified content area. The function clears any
 * existing content and attempts to create and append a new feature component based on
 * the provided component name. If the component is not defined, an error message is
 * displayed in the content area.
 *
 * @param {string} componentName - The name of the custom element to be loaded.
 * @param {HTMLElement} contentArea - The DOM element where the custom element should be loaded.
 */
const loadFeatureComponent = (componentName, contentArea) => {
	// Clear any existing content in the content area
	try {
		// Clear any existing content in the content area
		contentArea.innerHTML = "";

		// Create the new feature component
		const newFeature = document.createElement(componentName);

		//Check if the custom element is defined
		if (!customElements.get(componentName)) {
			throw new Error(`Component ${componentName} is not defined.`);
		}

		contentArea.appendChild(newFeature);
	} catch (error) {
		console.error("Error loading feature component:", error);
		contentArea.innerHTML = `<div class="error-message">Failed to load component: ${componentName}</div>`;
	}
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
		} else {
			console.error(`Button with ID ${buttonId} not found.`);
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
	} else {
		console.error("Toggle button not found.");
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
	if (savedTheme === "dark") {
		themeToggle.innerHTML = " ";
		themeToggle.innerHTML =
			'<img src="imgs/light_mode.png" alt="Sun" style="width: 2rem; height: 2rem;">';
	} else {
		themeToggle.innerHTML = " ";
		themeToggle.innerHTML =
			'<img src="imgs/dark_mode.png" alt="Moon" style="width: 2rem; height: 2rem;">';
	}

	// Add click event listener to toggle theme
	themeToggle.addEventListener("click", () => {
		const currentTheme = document.documentElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		if (newTheme === "dark") {
			themeToggle.innerHTML = " ";
			themeToggle.innerHTML =
				'<img src="imgs/light_mode.png" alt="Sun" style="width: 2rem; height: 2rem;">';
		} else {
			themeToggle.innerHTML = " ";
			themeToggle.innerHTML =
				'<img src="imgs/dark_mode.png" alt="Moon" style="width: 2rem; height: 2rem;">';
		}
	});
};

/**
 * Initializes the application by setting up the main content area and
 * defining feature components. It attaches event listeners to the feature
 * buttons to load their respective components into the content area and also
 * sets up the sidebar toggle button to show or hide the sidebar.
 */

const featureComponents = {
	"json-formatter-button": "json-formatter-tool",
	"url-encoder-decoder-button": "url-encoder-decoder-tool",
	"unix-timestamp-converter-button": "unix-timestamp-converter-tool",
	"home-button": "about-us",
	"jwt-generator-button": "jwt-generator-tool",
	"uuid-generator-button": "uuid-generator-tool",
	// Add other features and their corresponding component tags here
};
/**
 * Initializes the application by setting up the main content area and
 * attaching event listeners to feature buttons, the sidebar toggle button,
 * and the dark mode toggle button. It also loads the 'about-us' component
 * by default once the window is fully loaded.
 *
 * @param {Object<string, string>} featureComponents - An object mapping
 *   feature button IDs to the names of the custom elements that
 *   represent the features to be loaded.
 */
const initializeApp = (featureComponents) => {
	const contentArea = document.querySelector(".content-area");

	// Define each feature's component

	// Initialize the feature buttons
	initializeFeatureButtons(featureComponents, contentArea);

	// Initialize the sidebar toggle button
	initializeSidebarToggleButton();

	// Initialize the dark mode button
	initializeDarkMode();
};

// Initialize the application when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp(featureComponents));

if (typeof module !== "undefined" && module.exports) {
	module.exports = {
		initializeApp,
		initializeFeatureButtons,
		initializeSidebarToggleButton,
		loadFeatureComponent,
		initializeDarkMode,
	};
}
