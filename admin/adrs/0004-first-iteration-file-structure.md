# First Iteration File Structure

## Context and Problem Statement

For the first iteration, we wanted to determine the core file structure so that our CI/CD can work with it, since some github actions need to know the structure.

## Considered Options

* "Angular" Structure
  - Storing the components and tools in individual folders with their own specialized html, css, js files.
* "React" Structure
  - Storing most of the work in a core few files, with the individual components only having their own js/css files for individual functionality/appearance.
* Simple Structure
  - A barebones folder structure, with everything in a few html, css, and js files in a src folder.

## Decision Outcome

Chosen option: "Simple Structure". After much, much debate, we were leaning towards the "Angular" structure, utilizing the iframe element. However, after discussion with our professor we were told we should make an "ugly" first iteration that doesn't have the complicated file structure and instead make a simple structure that we can build into the other file structures later if need be. This helps us "fail fast" and iterate faster, which are two objective we were given, and increases our recovery time, which will likely be a big time waster in our timeline.
