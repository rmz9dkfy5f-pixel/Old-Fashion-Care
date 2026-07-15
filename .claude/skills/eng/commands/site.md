# /eng site

## Category

Build

## Purpose

Design and build a bespoke cinematic single-page site from one topic string, with its own
art-directed layout, motion, and browser verification.

## When To Use

- You want a distinctive one-page site, not a generic template.

## Inputs

- Required: a topic string.
- Optional: brand/art-direction preferences.

## Non-Negotiable Guardrails

- Avoid generic template output.
- Use motion only if the project supports it or the user approves the dependency.

## Workflow

1. Ask for or infer the topic string.
2. Define the art direction.
3. Build a single-page site with custom layout.
4. Use motion only if the project supports it or the user approves the dependency.
5. Verify in a real browser if available.
6. Provide a screenshot or browser-verification notes.
7. Avoid generic template output.

## Approval Gates

- **Stop before adding new dependencies such as GSAP/Lenis if not already present.**

## Required Output

The built single-page site files + browser-verification notes/screenshot.

## Failure Conditions

Stop and ask the user when:
- The desired motion/effects require a dependency not present and not yet approved.
