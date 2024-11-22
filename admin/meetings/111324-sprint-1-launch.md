## Sprint 1 Launch Meeting

### Date

- **Date of Meeting:** 11/13/24

### Meeting Details

- **Sprint Number:** 1
- **Duration:** 60 minutes
- **Attendees:** All team members

### Goals

- Align understanding of documentation and sprint practices
- Aim at starting to code this week

### Agenda

1. Opening and welcome
2. Discuss sprint notes
3. Decide on file/folder structure

   - Decide how we do CI/CD
   - Option 1:
     - /src
       - /function1: html, js
       - /function2 …
       - /main-page: html, js
       - /css: all-in-one css everyone should use
       - index.html
     - Pros: every person can work on their own file, we separate and each group/person takes one function and develops their webpage. The main page will use an iframe to link the different pages. Testing is also doable on both the main page level and each function level. Kind of the idea of React/
     - Cons: Too many uses of iframe? It’s more like front+back per team
       - The structure is more sparse
   - Option 2:
     - /src
       - Home page/ html js -> this includes all the front end thing
       - JS/func1.js func2.js -> This is the backend code
       - CSS/index.css -> all-in-one css
     - Pros: Front end & back end are more separated.
     - Cons:
       - Frontend will need to work on the single html file (it will make things complex on git)
       - More difficult to add new functions (if use iframe it’s just one line of code)

4. Discuss design
5. Decide on CI/CD
6. Decide on the separation of tasks
7. Decide on documentation convention

### Interim Notes

1. 11/10/24 Major Interim Meeting
   - Attendees: Adrian, Laura, Nikhil, Tim, Anusha, Hailey
   - Tasks:
     - [Done] DM TA about questions
     - [Done] Research tool functionalities and add to [shared doc](https://docs.google.com/document/d/1QAZQGwWbdckf3Y2-6m03UvYw9QRADKr_RrGiQrVJWsU/edit?usp=sharing)
     - Finalize and draft CI/CD diagram with specific tools
     - Start setting up:
       - Basic unit tests
       - Linting
       - Doc Generation
       - Code Quality
     - For later: e2e testing
   - CI/CD:
     ![image](https://github.com/user-attachments/assets/6a3e357b-c14c-4d59-8543-e48c20d099e5)
   - Linting and code style enforcement (may happen in pipeline and/or in editor)
     - [Guideline] Catch style and syntax issues early with automatic linting (in the editor and pipeline)
     - Does everyone use the same environment, code practices, and linter in development?
       - [Decision] we should.
     - ESLint - JS standard
   - Code quality via a tool (ex. Codeclimate, Codacy, etc.)
     - [Guideline] Use tools like CodeClimate or Codacy to maintain high standards.
   - Code quality via human review (ex. pull requests)
     - [Guideline] Code Quality via Human Review: Perform regular pull request reviews for additional oversight.
   - Unit tests via automation (ex. Jest, Tape, Ava, Cypress, Mocha/Chai, etc.)
     - [Confirmed by TA] Use Jest
   - Documentation generation via automation (ex. JSDocs)
     - JSDocs generates documentation for a short description of the function, params, the return value
     - [Confirmed by TA] Good practice
   - Code Coverage Reporting:
     - [Guideline] Track our testing coverage to maintain thorough testing across code.
   - Deployment:
     - [Guideline] Integrate deployment steps for streamlined delivery.
   - End-to-End and Pixel Testing (so you may decide to use an environment that does numerous things):
     - [Guideline] Include testing to confirm functionality and UI accuracy.
     - Figure it out when we reach it
     - GitHub Actions
   - Packaging & Minification:
     - [Guideline] Optimize code for production with packaging and minification where appropriate.
