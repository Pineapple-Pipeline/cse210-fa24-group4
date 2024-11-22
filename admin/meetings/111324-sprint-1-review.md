## Sprint 1 Review Meeting

### Date

- **Date of Meeting:** 11/13/24

### Meeting Details

- **Sprint Number:** 1
- **Duration:** 90 minutes
- **Attendees:** All team members

### Accomplishments

- Sprint notes structure
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
  - File structure:
    - Debated Samyak and Yunhao's design of the file structure
      - Samyak: cohesive, React-like, fewer files to maintain, less setup
      - Yunhao: modular, fits the project’s design of being modular, separation of tasks, Angular-like, might be more streamlined after proper (careful) setup
- Code quality
  - Every team member should work on a separate branch
    - Only one team member working on a single document at the same time
  - Mandatory & manual code review before merging to any branch
    - Branch structure:
      - Main (expect no merge conflicts, CI/CD)
        - -> [dashboard, f1, f2, f3, f4] (expect low / limited merge conflicts)
        - -> [per sub-branch, two to three team members who must communicate regularly on their work] (resolve conflicts)
    - Expect at least one push to main per week from each subbranch (when the weekly goal is achieved, more if necessary)
- Design
  - Change Regex Generator to Regex Tester [low priority functionality]

### Demos and Media

1. [Design](<https://www.figma.com/design/3ih44WsGIx62IKSIrP5QG3/DashStack---Free-Admin-Dashboard-UI-Kit---Admin-%26-Dashboard-Ui-Kit---Admin-Dashboard-(Community)?node-id=0-1&t=nGnziJh8RQ1oRA2a-1>)
   ![image](https://github.com/user-attachments/assets/5e9081d0-1af0-4c41-99c9-e4d2f7c16565)
   ![image](https://github.com/user-attachments/assets/25284470-7932-45ef-a65d-13383f8afa46)
   ![image](https://github.com/user-attachments/assets/3eb28820-d697-4c49-a9db-4f95f2e2e6e7)
2. CI/CD Structure
   ![image](https://github.com/user-attachments/assets/c0a0038c-cb0c-48cf-8c74-7e0d777d6ac8)

### Key Takeaways

1. **Action Items by 11/20/24** updated on GitHub

2. **[Tentative] Task Distribution**:

   - [Tim, Nikhil] JSON
   - [Adrian, Yunhao] UNIX
   - [Anusha, Jake] URL encoder/decoder
   - [Hailey, Samyak, Laura] Frontend/landing page

3. **[Affects other action items] Feedback from Professor**
   - The iframe is being turned down, we should avoid using iframe as it is essentially creating a new tab (waste resource)
   - We should be more iterative.
     - Instead of splitting teams now, we should have an "ugly" demo with maybe one feature, and understand how everything works (CSS might not even be needed, modularity can also be skipped at this sprint)
       Then, in the upcoming sprints, we can add CSS and more functions, modularize, and split teams to work on different features.
     - It might be too early to decide on file structure. CI/CD can also be iterative. For example, if we choose to focus on HTML this sprint, we could use GitHub Actions to do HTML validator.
   - He is not so sure about our "multi-window" design, but again this design should also be iterative. Maybe on this sprint, we just do 1 feature at a time but later we could do A/B testing on multiple windows.
   - We need to think BIG before we split the team. We don't need to implement this on this sprint but these are the things to consider, to avoid large code refactors later. Features he mentioned as examples:
     - A settings page that can be updated later to control things (Light/Dark color theme, etc.)
     - Multi-lingual support (no hard code of labels, instead load it through a function to read label files)

