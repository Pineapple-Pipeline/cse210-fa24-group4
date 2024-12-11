# Selecting an Approach for Developing the HTML Boilerplate Setup

## Context and Problem Statement

Our group needed to decide how the base framework of our developer toolkit will work. How the modularity of the developer tools will be incorporated into the dashboard in a simple, yet efficient manner. 

## Considered Options

* Simple web component through embedded Javascript that are pre-rendered and then hidden/shown through a CSS display: tag.
  - This is the simplest approach, but inefficient since everything is pre-rendered and simply hidden from view.
* Web component through Shadow-DOM manipulation, hidden/shown through a CSS display: tag.
  - This is a more complex approach, but is a valid way of modularizing tool components, their html, and their css into their own file.
  * Web component through Shadow-DOM manipulation, hidden/shown through appending and removing from object.
  - This is the best method we developed. Constructs and destructs tools dynamically.

## Decision Outcome

Chosen option: We ended up chosing to continue development through a dynamic construction/destruction method of displaying our developer tools onto the dashboard. We decided that this was a better way since the tools are so light weight that there is no inefficiencies in dynamically constructing the tool, instead of pre-rendingering all tools through embedded Javascript. In addition the inclusion of writing each tool's CSS and HTML separate in their own file subset makes modularization and understanding better. Going forward with this approach makes it relatively simple to add new tools, since its as simple as creating a new button with a new HTML id for the specific tool, and creating a custom HTML tag for the tool, with a JS containing construction and destruction code, as well as functionality and html/css specifications.
