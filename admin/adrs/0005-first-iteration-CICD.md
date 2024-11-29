# First Iteration CICD

## Context and Problem Statement

For the first iteration, we need a CI/CD pipeline due to client request.

## Considered Options

- "All at once" Structure
  - Determining the CI/CD pipeline at once, with linters for all languages, code quality checks, peer code quality check, documenation generation, unit and e2e testing, with all of the automated build procedures planned.
- Simple Structure
  - A barebones CI/CD pipeline, where we plan to add actions as they are needed. Currently this would be an HTML validator and Github pages.

## Decision Outcome

Chosen option: "Simple Structure". Once again, we first decided on the "All at once" structure, however our Professor recommended we start simple and build into it rather than all at once. This allows us to "fail fast", and quickly switch up our project and CI/CD pipeline in the early stages, which is very valuable given the time constraints. No matter what, we will use HTML and want to view our webpage, so Github pages and an HTML validator are the only actions in the pipeline.
