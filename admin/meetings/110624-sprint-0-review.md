## Sprint 0 Review Meeting
### Date
- **Date of Meeting:** 11/13/24

### Meeting Details
- **Sprint Number:** 0
- **Duration:** 30 minutes
- **Attendees:** All team members

### Accomplishments
- Sprint timeline:
  - Sprint 0 Nov 6 - 13
  - Sprint 1 Nov 13 - 20
  - Sprint 2 Nov 20 - 4 [Thanksgiving]
  - Sprint 3 Nov 4 - 8 [wrap-up]
- Testing framework decision: Jest
  - Briefly talked about: designing a tester  
  - Briefly talked about: Architectural Decision Records (ADRs)
-  Sprint notes structure
  - Two docs: LAUNCH (sprint objectives) and REVIEW (sprint retrospective notes)
- Discussed what we have achieved:
  - CI/CD pipeline draft
    - folder structure [proposed by Yunhao]
    - Decision: standard linting
    - Decision: NOT preparing for open-source
  - Hi-fidelity design, iteration 1
- Decisions:
  - Testing: Jest
  - Tools: HTML, CSS, JS
  - IDE: VsCode
  - Linter: ESLint
  - Scrum master: Hailey (meeting notes, maintaining meeting structures, progress tracking)


### Demos and Media/ Design
- [Mid-fidelity Figma wireframe](https://www.figma.com/design/KDKjlJwomQLX7ZEIHylx7a/Wireframe?node-id=4088-385&t=9MbCajT7BU3fpj1S-1)
  Demo:
  ![JSON Formatter   Validater](https://github.com/user-attachments/assets/a20e5148-6869-4293-bb76-cde2635e3a89)
  ![Landing Page - Windows Open - Supports Reorganizing Windows](https://github.com/user-attachments/assets/09fb0441-6814-415e-8e84-866d67041477)

### Preliminary UI/UX design
[UI design first look](https://www.figma.com/design/3ih44WsGIx62IKSIrP5QG3/DashStack---Free-Admin-Dashboard-UI-Kit---Admin-%26-Dashboard-Ui-Kit---Admin-Dashboard-(Community)?node-id=0-1&node-type=canvas&t=TBWBzzjDW69nEbPV-0)

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


### Key Takeaways/Backlog
- **Action Items by 11/07/24**
  - More user stories (Assigned to: Hailey)
  - Testing tech stack decision
  - Rework the Gantt timeline to Github
- **Action Items for Next Sprint:**
  - Finalize the feature choices (TA Kashish accepts that we have 4 features, instead of 5)
  - Develop CI/CD pipeline
    - Linters?
    - Jest
    - Github
  - Refine design to high-fidelity
  - Code style/coding practices
