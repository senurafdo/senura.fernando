---
title: "AI-Generated Throwaway Tests: Understanding Meta's Just-in-Time Catching Test Generation"
date: 2026-03-13
description: "How Meta's just-in-time catching test generation uses diff-aware AI workflows to find severe bugs before code reaches production."
tags: [ai, testing, ci, quality-engineering, llm, software-engineering]
published: true
---

## Introduction

Recently I had the chance to speak with an ML engineer from Meta Platforms about how they implemented ideas from a newly published research paper inside their engineering workflow. That conversation sparked my curiosity.

One thing that became clear to me is that reading white papers can be an incredibly efficient way to understand emerging trends in software engineering.

With that in mind, I spent part of my weekend reading the paper "Just-in-Time Catching Test Generation."

The core idea is simple but powerful: instead of writing tests only to prevent regressions, what if we could automatically generate tests that actively try to break new code changes before they reach production?

## The Shift-Left Context

Many engineering teams today follow the shift-left testing philosophy, where testing happens earlier in the development lifecycle.

This often means:

- Writing strong unit tests
- Running CI checks on pull requests
- Catching bugs before deployment

While this has improved software reliability, traditional testing still relies heavily on developers anticipating possible failures.

But developers cannot predict every edge case.

This is where the concept of catching tests comes in.

## Hardening Tests vs Catching Tests

Most automated test generation research focuses on hardening tests.

Hardening tests:

- Pass when created
- Remain in the codebase
- Prevent future regressions

Example:
A developer writes a unit test to ensure a function behaves correctly.
These tests help maintain system stability.

But the paper proposes something fundamentally different: catching tests.

Catching tests are:

- Generated automatically
- Designed to fail if a bug exists
- Temporary
- Used specifically during code review

Their goal is bug discovery, not regression protection.

## The Setup Inside Meta

At Meta, proposed code changes are called diffs.

Engineers submit these diffs to the internal CI system. A risk-scoring model evaluates each diff to determine whether it might introduce problems.

High-risk diffs are then analyzed overnight by the catching test generation system.

The key research question becomes:
Can we automatically generate tests that find severe bugs before they reach production, without slowing engineers down?

## Weak Catches vs Strong Catches

The paper introduces two important concepts.

A weak catch is a generated test that:

- Fails on the new code change
- Passes on the original version

This suggests the change might have introduced a bug.

A strong catch is a weak catch that turns out to be a real bug after investigation.

The challenge is distinguishing real bugs from false positives.

## Approaches to Generating Catching Tests

The researchers evaluated several methods.

### Baseline Approaches (Not Diff-Aware)

These methods generate tests without considering the code change itself.

Coincidental catches produced extremely low results, with only 0.2% of tests identifying issues.
An LLM-based generator improved this slightly to around 2%.
Mutation-guided testing achieved roughly 0.8%.

### Diff-Aware Approaches

The more interesting results came from techniques that analyze the code diff directly.

#### Dodgy Diff

This approach treats the new diff as if it were a mutated version of the original code and generates tests to differentiate them.

This method achieved:

- 2.5% weak catch rate
- Bug signals in 4% of diffs

#### Intent-Aware Generation

This was the most sophisticated technique.

The workflow looks like this:

1. An LLM analyzes the diff
2. It infers the intent of the change
3. It predicts ways the implementation could fail
4. It generates mutants representing those risks
5. Tests are generated to catch those mutants

This achieved:

- 6.4% weak catch rate
- Bug signals in 7.9% of diffs

Overall, diff-aware approaches produced:

- 4x more catches than traditional approaches
- 20x more than coincidental catches

## Handling False Positives

One of the biggest challenges with automated bug detection is noise.

To address this, the system uses three assessors.

### Rule-Based Filtering

Patterns that strongly indicate false positives are detected automatically.

Examples include:

- Broken mocks
- Reflection-based test failures
- Tests trying to enforce private methods

### LLM Probability Scoring

A large language model evaluates whether the failure looks like a real bug.
The probability of its response is used as a confidence signal.

### Ensemble Model Voting

Multiple models analyze the same case and classify it as:

- High likelihood bug
- Medium likelihood
- Low likelihood

The median result becomes the final score.

Together these approaches reduced manual review workload by 70%.

## Did It Actually Catch Real Bugs?

Yes.

Engineers were contacted 41 times when the system detected strong signals.

Instead of presenting complex test code, engineers were simply asked:
"Was this behavioral change intentional?"

Results:

- 8 confirmed real bugs
- 4 severe production failures prevented
- 4 additional code fixes or abandoned changes

Interestingly, about 50% of the confirmed bugs were severe, far higher than the usual 5-20% rate seen in bug databases.

## An Unexpected Bonus

While generating catching tests, the system also produced thousands of passing tests.

Nearly 8,000 hardening tests were generated as a side effect.

This means catching workflows can simultaneously strengthen regression test coverage.

## The Bigger Picture

This research suggests a new direction for automated testing.

Instead of maintaining only static test suites, CI systems may increasingly generate dynamic tests tailored to each code change.

AI would act as a temporary bug hunter, probing the change for weaknesses before it lands in production.

## Final Thoughts

The results from this study are early but promising.

The system:

- Scales to extremely large codebases
- Detects real production-level bugs
- Reduces developer friction
- Integrates directly into the CI workflow

For me, the most interesting takeaway is that AI-generated throwaway tests could become a natural extension of shift-left testing.

Rather than replacing developer tests, they complement them by exploring scenarios developers might never think of.

It will be fascinating to see how this approach evolves across the industry.
