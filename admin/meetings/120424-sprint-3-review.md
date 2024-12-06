## Sprint 3 Review Meeting

### Date

- **Date of Meeting:** 12/04/24

### Meeting Details

- **Sprint Number:** 4
- **Duration:** 45 minutes
- **Attendees:** All team members

### Goals

- Review completed work from Sprint 4
- Demonstrate progress on features

### Agenda

1. Opening and welcome
2. Overview of sprint goals and objectives
3. Demonstration of completed work
4. Summary and wrap-up (team retro)

### Accomplishments

- JSON formatter: added test with good coverage (44%), couldn’t achieve file upload/download test well (very complicated to mock up the process). Thinking of removing file upload/download completely because the process is different from text box entry, use case doesn’t make sense (uploaded file will directly be formatted)

- URL Encoder: test is done and code coverage confirmed. Test coverage (75%) good, but failed Prettier linting
- Has a CSS scrolling issue that affects some screens (an overflow). To be fixed.

- UNIX Timestamp: test is done with 100% coverage. Can add a copy button and/or help/hints

- Frontend: CSS consolidation

### Key Takeaways

- Consolidated linting process and clarified pipeline confusions
- JSON and URL Encoder: test coverage
- URL Encoder: fix the scrolling display issue
- UNIX Timestamp: refined feature (copy button and/or hints to clarify what the tool does)
