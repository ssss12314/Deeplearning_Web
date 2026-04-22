# Deep Learning Website Project Plan

## Project Positioning

This project is not a resource dump. It is a structured learning website that explains deep learning clearly, visually, and progressively.

Core goals:

- Keep the interface minimal, premium, and readable.
- Teach concepts with explanation-first content, not raw copied material.
- Use the local `resource/` PDFs as the primary content backbone.
- Add external references only as supporting material, illustrations, and further reading.

## Product Principles

- Every page should answer one clear learning question.
- Every major concept page should include at least one visual explanation.
- Copy should stay concise and educational.
- The first version should be a static HTML website with a stable structure.
- Content quality is more important than content volume.

## Visual Direction

Visual thesis:
An editorial-style learning website with bright surfaces, strong typography, scientific diagrams, and restrained motion.

UI rules:

- Prefer layout and spacing over boxes and heavy cards.
- Keep a light theme with one accent color system.
- Use at most two typefaces.
- Use motion only to reinforce hierarchy and scrolling flow.
- Maintain strong contrast and simple navigation.

## Site Architecture

Phase 1 site structure:

- `index.html`
  - Landing page
- `pages/`
  - Topic index pages
  - Knowledge detail pages
  - Learning roadmap page
- `assets/css/`
  - Shared styles
- `assets/js/`
  - Progressive enhancement
- `assets/images/`
  - Diagrams, illustrations, icons
- `data/raw/`
  - Raw collected source material
- `data/cleaned/`
  - Structured content for the site
- `scripts/crawler/`
  - Source collection scripts
- `scripts/build/`
  - Static generation and update scripts
- `docs/`
  - Planning and content standards

## Homepage Responsibilities

The homepage should do four jobs only:

1. Explain what the website is.
2. Show a recommended learning path.
3. Highlight the first batch of core topics.
4. Direct the user into the content system.

Homepage sections:

1. Hero
2. Learning path overview
3. Core topic grid
4. Reading principles / site value
5. Final call to continue learning

## Content Template Standard

Each knowledge page should follow this structure:

1. What it is
2. Why it matters
3. How it works
4. A simple example
5. One key diagram
6. Common mistakes
7. Further reading

This structure should remain stable unless there is a strong reason to change it.

## First Batch of Topics

These eight topics are the first content milestone:

1. What a neural network is
2. Forward propagation and backpropagation
3. Gradient descent
4. What convolution is
5. Why CNN works for images
6. What RNN does
7. What attention means
8. Transformer basics

## Diagram Strategy

Priority order:

1. Self-made simplified diagrams
2. Redrawn diagrams based on lecture material
3. Carefully cited public reference diagrams

Diagram types:

- Concept diagrams
- Process diagrams
- Comparison diagrams

Avoid directly screenshotting full lecture slides into the public-facing pages when a cleaner simplified version can be created.

## Source Strategy

Primary sources:

- Local `resource/lecture*.pdf` files

Secondary sources:

- Official documentation
- Reputable university course pages
- High-quality tutorials and papers

Rules:

- Do not mirror full external pages into the site.
- Prefer summarization and explanation with source attribution.
- Keep original links for traceability.

## Build Sequence

Current implementation order:

1. Create project skeleton
2. Build homepage
3. Build one reusable content page template
4. Add two fully written example pages
5. Expand to the first eight topics
6. Add classification pages and roadmap page
7. Add data and build scripts

## Definition of Done for Phase 1

Phase 1 is complete when:

- The homepage is visually consistent and responsive.
- The project structure is stable.
- The plan and content rules are documented inside the repo.
- At least one reusable topic page template exists.
- The website can be opened locally as a static site.

## Change Control

Future work should follow this file unless a deliberate update is made here first.

If the content structure, page hierarchy, or visual direction changes, update `docs/PROJECT_PLAN.md` before implementing the new direction.
