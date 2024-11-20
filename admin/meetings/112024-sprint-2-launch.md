## Sprint 2 Launch Meeting
### Date
- **Date of Meeting:** 11/20/24

### Meeting Details
- **Sprint Number:** 2
- **Duration:** 90 minutes
- **Attendees:** All team members

### Accomplishments

#### Code
- Discussion on **Shadow DOM**:
  - Identified needs for modularization and separating components.
  - Agreed it’s okay to use Shadow DOM.
  - Dev toolbox identified as a potential best use case for Shadow DOM.
  - Samyak raised that it’s not strictly necessary.

#### Design
- **Mobile**:
  - Implemented dropdown functionality.
  - Decided NOT to implement click-and-drag for now.
  - Removed the close button and planned to redesign the Figma display.
- **Future Considerations**:
  - Postponed light/dark mode implementation.
  - Decided to remove "Format JSON" button and make it on-change (not for this sprint).

#### Commit Message Conventions
- Adopted the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach.
- Defined merging message practices.

#### Branches
- Agreed to merge to the `main` branch once before the sprint.
- Decided:
  - No "playground" branch for Sprint 2.
  - Adopted a [branch naming convention](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheat-sheet-8549feca2534).

#### Unit Testing
- Scheduled for **Friday** (TBD).

#### Code Review
- **HTML layout**: Side panel implemented in a `<div>`.
- **JSON interaction**: Added functionality to fetch and load components on button click:
  - Removes old child elements and appends new ones.
- **HTML in JS**: Planned to embed HTML in `.js` files, keeping it under 15 lines.
- **Shadow Root**: Defined strategy for getting references (e.g., strings) and storing elements for later use.

### Key Takeaways
#### Action Items (Updated on Github)
- [ ] **Sprint notes**: Push to main branch [Hailey and Samyak, Nov 20]
- [ ] **CI/CD setup**: Complete setup [Yunhao, Nov 20]
- [ ] **Code push**: Push to playground branch [Samyak, Thu Nov 20]
- [ ] **Main branch integration**:
  - Once playground-verified, push to main branch [Samyak and Yunhao, by Thu Nov 21]
  - Align code and resolve merge conflicts [Samyak and Anusha, by Thu Nov 21]
- [ ] **Boiler Plate ADR**: Draft completion [Tim, by Thu Nov 21]
- [ ] **Design**:
  - Color/font/button/icon updates [Hailey, Thu Nov 21]
  - Mobile display and revised web display [Hailey, end of Thanksgiving]
- [ ] **Meeting [ALL, Fri 10–3 Nov 22]**:
  - Team split for separate JS/CSS tasks and delegation
  - Unit testing decisions
  - Allow for remote join/absence if needed

