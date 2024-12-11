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

### Agendas/Planning for sprint 1

1. Add sprint meeting notes to repo
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
8. Start basic frontend prototype and code one feature for starters so that everyone can agree upon the coding style/testing approach and then split into teams for individual developing features iteratively.
