---
title: Architecture Tests Are the Missing Layer in Automation
date: 2025-12-04
description: Why your automation tests deserve architecture tests, and how ArchUnit and TSArch can enforce structure at scale.
tags: [automation, architecture, testing, archunit, tsarch]
published: true
canonical: https://medium.com/@senurafernando/architecture-tests-are-the-missing-layer-in-automation-79c7a9870fb0
---

Why Your Automation Tests Deserve Architecture Tests

### Problem Statement

Most engineering teams advocate strong architectural designs for backend systems. Concepts like MVC, DDD, layered architecture, and SOLID principles are well-established and widely enforced.

To enable fast delivery, DevEx and Platform teams often provide boilerplate templates to help engineers bootstrap new projects quickly. For example:

- A backend engineer can set up a Spring Boot service aligned with MVC or DDD.
- An SDET can spin up a UI automation framework using Playwright or Selenium following the Page Object Model.
- An SDET can create an API automation framework with RestAssured + Java aligned to KISS or SOLID.

In theory, these templates should keep everyone aligned to globally accepted structures.

But in reality, context varies, engineer preferences differ, and architecture drifts fast.

Over time, as the codebase grows, developers and SDETs unintentionally violate these architectural rules. Not out of negligence, but because there is no system enforcing them.

The result:

- Fragile Page Objects
- Test classes accessing WebDriver directly
- Business logic leaking into test code
- Inconsistent naming and folder organization
- Tangled dependencies and hidden coupling

A test suite that becomes impossible to maintain.

### The Solution: Architecture as Executable Tests

Fortunately, we now have tools that allow us to enforce architecture directly in automated test projects, the same way we enforce code quality and unit tests.

- [ArchUnit](https://www.archunit.org/) for Java/Kotlin
- [TSArch](https://github.com/ts-arch/ts-arch) for TypeScript/JavaScript

These frameworks let us write architecture rules as unit tests, ensuring your structure stays clean as your team and test suite grow.

### What Is ArchUnit? (Java/Kotlin)

ArchUnit is a Java testing library that allows you to define and enforce architecture rules directly in your codebase. It is typically used within JUnit test suites.

Classic backend example:

`Controllers should not access repositories directly.`

Sample implementation for a Spring Boot backend service (DDD):

- [quality-hub](https://github.com/senurafdo/quality-hub)

But ArchUnit is just as powerful in UI automation.

For example:

- `Tests should not use WebDriver directly, only Page Objects should.`
- `Page Objects must not depend on test classes.`

ArchUnit executes architectural rules as part of your test suite. If a rule is violated, the test fails, and when this suite runs in CI (for example, GitHub Actions), the PR can be blocked from merging.

This makes architecture enforcement non-negotiable and keeps your codebase structurally sound over time.

### What Is TSArch? (TypeScript/JavaScript)

If you are working with Playwright, Cypress, or WebdriverIO, the equivalent tool is TSArch, a TypeScript architecture testing framework inspired by ArchUnit.

### Why Architecture Tests Matter

Architecture tests bring discipline, consistency, and maintainability to automation projects.

The real power comes when DevEx or Platform teams embed these rules into their boilerplate automation templates. From that point on, every developer and QA must adhere to the established architecture, not because they remember the rules, but because the framework enforces them.

### Conclusion

Test automation frameworks are software, and software needs an architecture.

If your UI, backend, or API test suite is starting to feel fragile, inconsistent, or difficult to maintain, architecture tests may be the most impactful improvement you introduce this year.
