<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">CSE210-FA24-GROUP4</h1></p>
<p align="center">
    <em>Code quality, testing, and seamless deployment flow.</em>
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/cse210-fa24-group4/cse210-fa24-group4?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
    <img src="https://img.shields.io/github/last-commit/cse210-fa24-group4/cse210-fa24-group4?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/cse210-fa24-group4/cse210-fa24-group4?style=default&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/cse210-fa24-group4/cse210-fa24-group4?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
    <!-- default option, no dependency badges. -->
</p>
<br>

## Table of Contents

- [ Overview](#-overview)
- [Important Links](#-Important-Links)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Contributing](#-contributing)

---

## Overview

This is a simple yet efficient browser based developer tool-kit that provides developers access to the most commonly used developer tools for whatever project the user is working on. The web-app is written in vanilla JS, HTML, and CSS, providing smooth, fast responses, without a backend for security, and speed. Each component is modular, and is not dependent on any other tool available in the tool-kit.

---

## Important Links

- [Link to our application](https://cse210-fa24-group4.github.io/cse210-fa24-group4/)

- [Link to JS Docs](https://cse210-fa24-group4.github.io/cse210-fa24-group4/docs/)

- [Link to our coverage report](https://app.codecov.io/github/cse210-fa24-group4/cse210-fa24-group4)

---

## Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                                                                                                                   |
| :-- | :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **JavaScript** as the primary language with a diverse set of **JSON**, **YAML**, **HTML**, **CSS**, and **MJS** files.</li><li>Configures **ESLint**, **Jest**, **Playwright**, and **Prettier** for code quality and testing.</li><li>Integrates **live-server** for local development and **Playwright** for end-to-end tests.</li></ul>                               |
| 🔩  | **Code Quality**  | <ul><li>Defines ESLint configurations in **config/eslint.config.mjs** for JavaScript files, including Jest testing rules and globals.</li><li>Automates linting for HTML, ESLint, and Prettier in **.github/workflows/linting.yml**.</li><li>Generates and uploads test coverage reports to Codecov in **.github/workflows/test.yml**.</li></ul>                                          |
| 📄  | **Documentation** | <ul><li>Step by step use of each tool available in admin/docs.</li><li>Link to JS docs provided for detailed information of each function/class.</li><li>Provides detailed usage commands and test commands in the **package.json** file.</li></ul>                                                                                                                                       |
| 🔌  | **Integrations**  | <ul><li>Automates deployment to GitHub Pages in **.github/workflows/deploy.yml**.</li><li>Automates Playwright tests setup and execution in **.github/workflows/playwright.yml**.</li><li>Utilizes **GitHub Actions** for continuous integration and deployment.</li></ul>                                                                                                                |
| 🧩  |  **Modularity**   | <ul><li>Defines custom elements for various tools like **URL Encoder/Decoder**, **Unix Timestamp Converter**, **JSON Formatter**, **JWT Generator**, and **UUID Generator**.</li><li>Separates styling and functionality into distinct CSS and JS files for each tool.</li><li>Tests individual tool functionalities in separate test files within the **e2e-tests** directory.</li></ul> |
| 🧪  |    **Testing**    | <ul><li>Implements end-to-end tests for all tools</li><li>Unit test for all javascript files using Jest</li><li>Validates tool functionality for various input scenarios and edge cases.</li><li>You can find the reports for unit testing and end-to-end testing in artifacts section of the workflows in github actions.</li></ul>                                                      |
| ⚡️ |  **Performance**  | <ul><li>Utilizes **Playwright** for end-to-end tests, ensuring seamless integration with the project's deployment workflow.</li><li>Configures Playwright test settings for parallel test execution, CI integration, and browser configurations.</li><li>Optimizes tool performance by handling conversions, formatting, and generation efficiently.</li></ul>                            |

---

## Project Structure

```sh
└── cse210-fa24-group4/
    ├── .github
    │   ├── ISSUE_TEMPLATE
    │   │   ├── bug_report.md
    │   │   ├── coding_task.md
    │   │   ├── feature_request.md
    │   │   └── non-code-task.md
    │   ├── pull_request_template.md
    │   └── workflows
    │       ├── deploy.yml
    │       ├── linting.yml
    │       ├── playwright.yml
    │       └── test.yml
    ├── README.md
    ├── admin
    │   ├── adrs
    │   │   ├── 0001-select-green-brown-field.md
    │   │   ├── 0002-initial-web-design.md
    │   │   ├── 0002-select-folder-structure.md
    │   │   ├── 0003-first-iteration-tech-stack.md
    │   │   ├── 0004-first-iteration-file-structure.md
    │   │   ├── 0005-first-iteration-CICD.md
    │   │   ├── 0006-first-iteration-tools.md
    │   │   ├── 0007-first-iteration-github-branches.md
    │   │   ├── 0008-html-boilerplate.md
    │   │   ├── 0009-final-sprint-new-tool.md
    │   │   ├── 0010-landing-page
    │   │   └── 0011-accessibility-tools
    │   ├── cipipeline
    │   │   ├── cicd.md
    │   │   └── cicd.png
    │   ├── meetings
    │   │   ├── 110624-sprint-0-launch.md
    │   │   ├── 110624-sprint-0-review.md
    │   │   ├── 111324-sprint-0-retro.md
    │   │   ├── 111324-sprint-1-launch.md
    │   │   ├── 111324-sprint-1-review.md
    │   │   ├── 112024-sprint-1-retro.md
    │   │   ├── 112024-sprint-1-review.md
    │   │   ├── 112024-sprint-2-launch.md
    │   │   ├── 112724-sprint-2-retro.md
    │   │   ├── 112724-sprint-2-review.md
    │   │   ├── 112724-sprint-3-launch.md
    │   │   ├── 120424-sprint-3-retro.md
    │   │   ├── 120424-sprint-3-review.md
    │   │   ├── 120424-sprint-4-launch.md
    │   │   ├── 121124-sprint-4-retro.md
    │   │   ├── 121124-sprint-4-review.md
    │   │   ├── MMDDYY-sprint-X-launch.md
    │   │   ├── MMDDYY-sprint-X-review.md
    │   │   └── about.md
    │   └── videos
    │       └── statusvideo.mp4
    ├── config
    │   ├── eslint.config.mjs
    │   └── playwright.config.js
    ├── e2e-tests
    │   ├── health.spec.js
    │   ├── json-formatter.spec.js
    │   ├── jwt-generator.spec.js
    │   ├── unix-timestamp-converter.spec.js
    │   ├── url-encoder-decoder.spec.js
    │   └── uuid-generator.spec.js
    ├── package.json
    ├── specs
    │   ├── Team 4 Coding Practices.pdf
    │   └── pitch
    │       ├── CSE-210-Project-Proposal-final.pdf
    │       └── miro.md
    └── src
        ├── about-us
        │   ├── about-us.css
        │   └── about-us.js
        ├── imgs
        │   ├── android-chrome-192x192.png
        │   ├── android-chrome-512x512.png
        │   ├── apple-touch-icon.png
        │   ├── dark_mode.png
        │   ├── favicon-16x16.png
        │   ├── favicon-32x32.png
        │   ├── favicon.ico
        │   ├── light_mode.png
        │   └── site.webmanifest
        ├── index.css
        ├── index.html
        ├── index.js
        ├── index.test.js
        ├── json-formatter
        │   ├── json-formatter-tool.css
        │   ├── json-formatter-tool.js
        │   └── json-formatter-tool.test.js
        ├── jwt-generator
        │   ├── jwt-generator-tool.css
        │   ├── jwt-generator-tool.js
        │   └── jwt-generator-tool.test.js
        ├── unix-timestamp-converter
        │   ├── unix-timestamp-converter-tool.css
        │   ├── unix-timestamp-converter-tool.js
        │   └── unix-timestamp-converter-tool.test.js
        ├── url-encoder-decoder
        │   ├── url-encoder-decoder-tool.css
        │   ├── url-encoder-decoder-tool.js
        │   └── url-encoder-decoder-tool.test.js
        └── uuid-generator
            ├── uuid-generator-tool.css
            ├── uuid-generator-tool.js
            └── uuid-generator-tool.test.js
```

### Project Index

<details open>
    <summary><b><code>CSE210-FA24-GROUP4/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/package.json'>package.json</a></b></td>
                <td>- Define project scripts and dependencies for development and testing<br>- Configure ESLint, Jest, Playwright, and Prettier for code quality and testing<br>- Utilize live-server for local development and Playwright for end-to-end tests<br>- Ensure Jest uses jsdom environment and ignores e2e test paths<br>- Include necessary dev dependencies and a dotenv dependency for environment variables.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- .github Submodule -->
        <!-- <summary><b>.github</b></summary>
        <blockquote>
            <details> -->
                <summary><b>workflows</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/.github/workflows/linting.yml'>linting.yml</a></b></td>
                        <td>- Automates linting for HTML, ESLint, and Prettier on specific branches<br>- Executes checks on push to main and other branches, and on pull requests to main<br>- Validates HTML, runs ESLint with custom config, and checks code formatting with Prettier.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/.github/workflows/test.yml'>test.yml</a></b></td>
                        <td>- Generates and uploads test coverage reports to Codecov for the project's main and feature branches<br>- The workflow runs tests, collects coverage data, and uploads it as an artifact<br>- This ensures visibility into code quality and test coverage across different branches, aiding in maintaining code health and quality standards.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/.github/workflows/deploy.yml'>deploy.yml</a></b></td>
                        <td>- Automates deployment to GitHub Pages by building JSDocs and moving source files<br>- Sets up Node.js, generates documentation using a specified template, and uploads artifacts<br>- Deploys to GitHub Pages with necessary permissions and dependencies on the build job.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/.github/workflows/playwright.yml'>playwright.yml</a></b></td>
                        <td>- Automates Playwright tests setup and execution in GitHub Actions workflow<br>- Installs dependencies, sets base URL, runs tests, and uploads test reports<br>- Ensures seamless integration with the project's deployment workflow.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        <!-- </blockquote>
    </details> -->
    <details> <!-- e2e-tests Submodule -->
        <summary><b>e2e-tests</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/jwt-generator.spec.js'>jwt-generator.spec.js</a></b></td>
                <td>- Tests the JWT Generator tool by filling input fields with mock data, generating a JWT, and validating the output format<br>- The test ensures that the tool correctly processes the provided header, payload, and secret key to produce a valid JWT.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/uuid-generator.spec.js'>uuid-generator.spec.js</a></b></td>
                <td>- Verifies UUID generation functionality by simulating user interaction with the UUID Generator tool in an end-to-end test scenario<br>- The test ensures that clicking the generate button produces a valid UUID format as expected.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/unix-timestamp-converter.spec.js'>unix-timestamp-converter.spec.js</a></b></td>
                <td>- Implements end-to-end tests for a Unix Timestamp Converter tool, verifying accurate conversions between Unix timestamps, UTC, and ISO formats<br>- Tests various scenarios like valid conversions, invalid inputs, and whitespace handling<br>- Interacts with the tool's UI elements to validate input and output values.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/url-encoder-decoder.spec.js'>url-encoder-decoder.spec.js</a></b></td>
                <td>- Implements end-to-end tests for a URL Encoder Decoder tool, validating encoding and decoding functionality for various URL scenarios<br>- Tests ensure correct transformation of URLs with query parameters, special characters, internationalized domain names, reserved characters, long query strings, Unicode emojis, and base64 encoded data.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/health.spec.js'>health.spec.js</a></b></td>
                <td>- Implements end-to-end tests for the basic dashboard functionality, ensuring correct initialization and component loading behavior<br>- The tests validate the presence of key elements like the content area, JSON Formatter component, and URL Encoder/Decoder component upon specific user interactions.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/e2e-tests/json-formatter.spec.js'>json-formatter.spec.js</a></b></td>
                <td>- Tests the JSON Formatter tool by formatting small, medium, and large JSON inputs, ensuring correct output<br>- Handles error cases gracefully by displaying an error message<br>- Navigates to the tool, inputs JSON, formats it, and verifies the output<br>- Validates tool functionality for various JSON sizes and structures.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- src Submodule -->
        <summary><b>src</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/index.css'>index.css</a></b></td>
                <td>- Define global styling variables for fonts, colors, and themes to maintain consistency and enable easy theming across the project<br>- Set up base styles for the main layout components like the dashboard, sidebar, and content area, ensuring a responsive and visually cohesive user interface.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/index.js'>index.js</a></b></td>
                <td>- The code in src/index.js initializes an application by setting up feature buttons to load custom components, toggles the sidebar visibility, and enables a dark mode toggle<br>- It ensures a seamless user experience by dynamically loading components and providing theme customization options.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/index.html'>index.html</a></b></td>
                <td>- Defines the main structure and layout of the Backend Buddy dashboard, including key elements like the sidebar, theme toggle, and various tool buttons for functionalities such as JSON formatting, URL encoding/decoding, and more<br>- This file sets the foundation for user interaction and navigation within the project.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/index.test.js'>index.test.js</a></b></td>
                <td>- The code file in src/index.test.js defines custom elements and tests for initializing app features like loading components, toggling sidebar visibility, and managing dark mode<br>- It ensures proper functionality and error handling within the project's dashboard interface.</td>
            </tr>
            </table>
            <details>
                <summary><b>url-encoder-decoder</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/url-encoder-decoder/url-encoder-decoder-tool.css'>url-encoder-decoder-tool.css</a></b></td>
                        <td>- Defines the responsive layout and styling for a tool panel in the project, ensuring a user-friendly interface across devices<br>- The code establishes the structure, design, and behavior of the tool panel, including header, content area, input/output sections, buttons, and mobile responsiveness.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/url-encoder-decoder/url-encoder-decoder-tool.js'>url-encoder-decoder-tool.js</a></b></td>
                        <td>- Implements a custom HTML element for URL encoding and decoding<br>- Users can input a URL, encode/decode it, or clear the input/output areas<br>- Handles encoding, decoding, and error cases, enhancing user experience.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/url-encoder-decoder/url-encoder-decoder-tool.test.js'>url-encoder-decoder-tool.test.js</a></b></td>
                        <td>- Tests the encoding, decoding, and functionality of the URL encoder/decoder tool by ensuring correct rendering of elements, accurate URL encoding/decoding, handling of empty inputs, and clearing of input/output areas<br>- Additionally, it validates error handling for invalid inputs, contributing to robust tool functionality within the project architecture.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>unix-timestamp-converter</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/unix-timestamp-converter/unix-timestamp-converter-tool.test.js'>unix-timestamp-converter-tool.test.js</a></b></td>
                        <td>- The Unix Timestamp Converter Tool file in the codebase facilitates seamless conversion between Unix timestamps, UTC, and ISO formats<br>- It ensures accurate conversions and error handling for various input scenarios, enhancing the user experience of the timestamp conversion tool within the project architecture.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/unix-timestamp-converter/unix-timestamp-converter-tool.css'>unix-timestamp-converter-tool.css</a></b></td>
                        <td>- Defines styling for a tool panel in the project, including header, content, input/output areas, notifications, and buttons<br>- Handles responsive design for mobile screens.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/unix-timestamp-converter/unix-timestamp-converter-tool.js'>unix-timestamp-converter-tool.js</a></b></td>
                        <td>- Enables conversion between UNIX timestamps and UTC/ISO formats, providing a user-friendly interface for input and output<br>- Handles conversion logic and clipboard functionality, enhancing the project's utility for timestamp manipulation.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>json-formatter</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/json-formatter/json-formatter-tool.css'>json-formatter-tool.css</a></b></td>
                        <td>- Define the styling for the JSON Formatter tool's interface, including the layout, colors, and button interactions<br>- This CSS file ensures a consistent and visually appealing design for the tool, enhancing user experience and readability.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/json-formatter/json-formatter-tool.js'>json-formatter-tool.js</a></b></td>
                        <td>- The JsonFormatterTool class defines a custom element for formatting JSON data<br>- It provides a user-friendly interface to input JSON, format it, copy to clipboard, and download as a file<br>- The class encapsulates the logic for parsing and stringifying JSON, enhancing the usability of the tool within the project's architecture.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/json-formatter/json-formatter-tool.test.js'>json-formatter-tool.test.js</a></b></td>
                        <td>Tests the JSON formatter tool's functionality, ensuring correct rendering, formatting of simple and complex JSON inputs, handling of empty inputs, error indication, successful copy to clipboard, alerts for empty copy/download, file download trigger, and proper button states based on input validity.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>about-us</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/about-us/about-us.js'>about-us.js</a></b></td>
                        <td>- Defines a custom element `AboutUs` that renders a team section with members' details<br>- It sets up the component's inner HTML, showcasing team members' names and roles in a grid layout<br>- The component includes styles for proper display and aims to introduce the "Pineapple Pipeline" kitchen chefs, offering backend tools for users to explore and enjoy.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/about-us/about-us.css'>about-us.css</a></b></td>
                        <td>Define styling for the about us section and team grid, ensuring consistent design across different screen sizes.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>jwt-generator</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/jwt-generator/jwt-generator-tool.css'>jwt-generator-tool.css</a></b></td>
                        <td>Enhances the visual styling of the JSON Formatter tool by defining CSS rules for the tool panel, header, content, input/output areas, notifications, buttons, and responsive design.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/jwt-generator/jwt-generator-tool.js'>jwt-generator-tool.js</a></b></td>
                        <td>- The JWT Generator Tool class defines a custom element for generating JSON Web Tokens (JWTs) based on user input<br>- It handles encoding, signing, and combining the token components to produce a final JWT<br>- The tool also provides functionality to copy the generated token to the clipboard.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/jwt-generator/jwt-generator-tool.test.js'>jwt-generator-tool.test.js</a></b></td>
                        <td>- Tests the functionality of a JWT token generator tool by simulating user interactions and verifying error handling, successful token generation, and clipboard copying<br>- The code ensures proper rendering, input validation, and cleanup on disconnection<br>- It mocks cryptographic functions and user notifications for seamless testing.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>uuid-generator</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/uuid-generator/uuid-generator-tool.css'>uuid-generator-tool.css</a></b></td>
                        <td>Defines the styling for a JSON Formatter tool, including layout, header, content, output area, notifications, buttons, and responsiveness for various screen sizes.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/uuid-generator/uuid-generator-tool.test.js'>uuid-generator-tool.test.js</a></b></td>
                        <td>- Tests the UUID generator tool's rendering, copy functionality, UUID generation, and cleanup on close<br>- Verifies correct rendering, successful copy to clipboard, handling empty output, generating valid UUIDs, and proper cleanup when disconnected.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/src/uuid-generator/uuid-generator-tool.js'>uuid-generator-tool.js</a></b></td>
                        <td>- Generates UUIDs and provides a user interface for copying them to the clipboard<br>- Displays a notification upon successful copy or if there's nothing to copy<br>- The tool allows users to easily generate and manage UUIDs within the project.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
    <details> <!-- config Submodule -->
        <summary><b>config</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/config/eslint.config.mjs'>eslint.config.mjs</a></b></td>
                <td>- Define ESLint configurations for JavaScript files, including Jest testing rules and globals<br>- Import necessary plugins and set language options for commonJS and Jest environments<br>- Apply recommended rules for Jest test files, excluding specific directories.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/config/playwright.config.js'>playwright.config.js</a></b></td>
                <td>- Defines Playwright test configuration for parallel test execution, CI integration, and browser settings<br>- Reads environment variables, sets test directory, retries on CI, and configures browsers (Chromium, Firefox, WebKit)<br>- Utilizes shared settings like baseURL and trace collection<br>- Implements Playwright test reporter for HTML output.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- admin Submodule -->
        <summary><b>admin</b></summary>
        <blockquote>
            <details>
                <summary><b>adrs</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/admin/adrs/0010-landing-page'>0010-landing-page</a></b></td>
                        <td>- Enhances user experience by introducing a customized landing page with team information and website overview<br>- Improves UI/UX by providing users with a better understanding of the project's purpose and tool kit use cases.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/master/admin/adrs/0011-accessibility-tools'>0011-accessibility-tools</a></b></td>
                        <td>- Prioritizing Dark/Light Mode for website accessibility enhances user experience, especially for developers working late hours<br>- This decision aligns with the project's goal of creating a comfortable and accessible website for all users.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with cse210-fa24-group4, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Install cse210-fa24-group4 using one of the following methods:

**Build from source:**

1. Clone the cse210-fa24-group4 repository:

```sh
❯ git clone https://github.com/cse210-fa24-group4/cse210-fa24-group4
```

2. Navigate to the project directory:

```sh
❯ cd cse210-fa24-group4
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Usage

Run cse210-fa24-group4 using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

### Unit Testing

Run the unit-test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

### End-to-End Testing

Run the end-to-end test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm e2e
```

---

### Linting

This command will lint the codebase using the defined linting rules:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm lint
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/cse210-fa24-group4/cse210-fa24-group4/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/cse210-fa24-group4/cse210-fa24-group4/issues)**: Submit bugs found or log feature requests for the `cse210-fa24-group4` project.
- **💡 [Submit Pull Requests](https://github.com/cse210-fa24-group4/cse210-fa24-group4/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/cse210-fa24-group4/cse210-fa24-group4
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/cse210-fa24-group4/cse210-fa24-group4/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=cse210-fa24-group4/cse210-fa24-group4">
   </a>
</p>
</details>

---
